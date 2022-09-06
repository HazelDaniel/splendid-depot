import { React, useEffect, useRef, createContext, useReducer, useState, memo, useCallback, useMemo } from "react";
import "./App.scss";
import Wrapper from "./components/wrapper/wrapper.component";
// FIREBASE
import { addCollectionAndDocument, checkLastAuthSession, projectId, SHOP_DATA } from "./firebase/firebase.utils";
// UTILS
import { checkForArraysAndReform, reformUserObject, wait } from "./utils";
import { clientCartInitial, clientCartReducer, currentDBcart, __syncCart } from "./reducers/cart.reducer";
import { appReducer, initialAppState, __renderLoader, __renderWelcome, __unmountLoader, __unmountWelcome } from "./reducers/app.reducer";
import { initialShopState, shopReducer } from "./reducers/shop.reducer";

let unsubscribeFromSnapshot;

export const user = {
	currentUser: null,
};
export const manualAuth = {
	manualSignedIn: 0,
	manualSignIn: () => {},
};
export const cartContext = createContext(clientCartInitial);
export const manualSignInContext = createContext(manualAuth);
export const userContext = createContext({
	...user,
	updateCurrentUser: () => {},
});
export const AppContext = createContext(initialAppState);
export const ShopContext = createContext(initialShopState);

const UserProvider = userContext.Provider;
const ManualSignInProvider = manualSignInContext.Provider;
const ClientCartProvider = cartContext.Provider;
const AppProvider = AppContext.Provider;
const ShopProvider = ShopContext.Provider;


const contextSelector = (callback, state) => {
	return callback(state);
}
const App = (_) => {
	// CONTEXT STATES
	const [currentUser, updateCurrentUser] = useState(user);
	const [clientCartState, clientCartDispatch] = useReducer(clientCartReducer, clientCartInitial);
	const [{ manualSignedIn }, manualSignIn] = useState(manualAuth);
	const [appState, appDispatch] = useReducer(appReducer, initialAppState);
	const [shopState, shopDispatch] = useReducer(shopReducer, initialShopState);

	// CONTEXT SELECTORS
	const shopSelector = useCallback((callback) => contextSelector(callback, shopState), [shopState]);

	// CONTEXT PROVIDER VALUES
	const clientCartProviderValue = useMemo(() => ({ clientCartState, clientCartDispatch }), [clientCartState]);
	const userProviderValue = useMemo(() => ({ currentUser, updateCurrentUser }), [currentUser]);
	const appProviderValue = useMemo(() => ({ appState, appDispatch }), [appState]);
	const shopProviderValue = useMemo(() => ({ shopState, shopDispatch,shopSelector }), [shopState,shopSelector]);
	const manualSignInValue = useMemo(
		() => ({
			manualSignedIn,
			manualSignIn,
		}),
		[manualSignIn, manualSignedIn]
	);


	const checkLastSIgnIn = useCallback(
		() =>
			(async () => {
				try {
					appDispatch(__renderLoader());
					const lastSignIn = await checkLastAuthSession();
					// console.log("checking last auth session ...", lastSignIn);
					const userRes = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${lastSignIn.uid}`);
					const { fields } = await userRes.json();
					const reformedUserWithCart = checkForArraysAndReform(reformUserObject(fields));
					// console.log(fields);
					clientCartDispatch(__syncCart(reformedUserWithCart));
					currentDBcart.carts = reformedUserWithCart.carts;
					// console.log(currentDBcart);
					const userData = {
						id: lastSignIn.uid,
						...reformedUserWithCart,
						currentUser: lastSignIn,
					};
					// IN THIS BLOCK , WE ALSO WANT TO GET THE CARTS OF THE CURRENT SIGNED IN USER
					updateCurrentUser(userData);
				} catch (error) {
					return error;
				} finally {
					appDispatch(__unmountLoader());
				}
			})(),
		[appDispatch]
	);

	// console.log(currentUser);
	useEffect(() => {
		// prettier-ignore
		if (!(!!currentUser.currentUser)) return;
		const checkUserIsWelcome = async () => {
			// TODO: THIS IS A CLIENT SIGN IN FUNCTIONALITY RIGHT HERE, EXPORT IT TO A SINGLE FUNCTION
			//TODO: remember to dispatch a sign in action to store instead of rendering and unmounting welcome message
			appDispatch(__renderWelcome());
			await wait(3);
			appDispatch(__unmountWelcome());
			// toast("welcome")
		};
		checkUserIsWelcome();
		return () => {
			unsubscribeFromSnapshot && unsubscribeFromSnapshot();
		};
	}, [currentUser, appDispatch]);

	useEffect(() => {
		// TODO: DISPATCH AN ACTION THAT RE-TRIGGERS THIS EFFECT FROM THE SIGN IN COMPONENT (AND UPDATE THE DEPENDENCY ARRAY) SO AS NOT TO MAKE EXTRA API REQUEST WHEN SIGNING IN
		(async () => {
			await checkLastSIgnIn();
		})();
	}, [checkLastSIgnIn]);

	useEffect(() => {
		(async () => {
			if (!!manualSignedIn) {
				// console.log("manually signed in on client");
				await checkLastSIgnIn();
			}
		})();
	}, [manualSignedIn, checkLastSIgnIn]);

	return (
		<UserProvider value={userProviderValue}>
			<ShopProvider value={shopProviderValue}>
				<ClientCartProvider value={clientCartProviderValue}>
					<ManualSignInProvider value={manualSignInValue}>
						<AppProvider value={appProviderValue}>
							<Wrapper />
						</AppProvider>
					</ManualSignInProvider>
				</ClientCartProvider>
			</ShopProvider>
		</UserProvider>
	);
};

export default App;
