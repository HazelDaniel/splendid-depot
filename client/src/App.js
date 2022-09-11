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
import {useFetchUser} from "./hooks/app/app.use_fetch_user";

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
	const [lastAuth,setLastAuth] = useState(null);
	const manualSignInValue = useMemo(
		() => ({
			manualSignedIn,
			manualSignIn,
		}),
		[manualSignIn, manualSignedIn]
	);
	const checkLastSignedIn = useCallback(()=> (async _ => {
		try{
			const lastAuthed = await checkLastAuthSession();
			setLastAuth(lastAuthed);
		}catch (err){
			setLastAuth(err);
		}
	})(),[]);
	
	useEffect(()=>{
		//checking for the last auth session only when the app mounts (to determine whether user was previously logged in)
		checkLastSignedIn();
	},[]);
	
	
	const {data:checkedData,error:checkedError,isSuccess:checkedIsSuccessful,isError:checkedIsErrored} = useFetchUser(lastAuth?.uid);
	

	const fetchAuthedUserDetails = useCallback(
		() =>
			(async () => {
				if(checkedIsSuccessful){
					// console.log("fetching user auth details")
					console.log(checkedData);
					
					const {fields} = checkedData.data;
					const reformedUserWithCart = checkForArraysAndReform(reformUserObject(fields));
					clientCartDispatch(__syncCart(reformedUserWithCart));
					currentDBcart.carts = reformedUserWithCart.carts;
					const userData = {
						id: lastAuth.uid,
						...reformedUserWithCart,
						currentUser: lastAuth,
					};
					updateCurrentUser(userData);
				}
			})(),
		[checkedIsSuccessful]
	);

	useEffect(() => {
		//welcome message if the user exists
		// prettier-ignore
		if (!(!!currentUser.currentUser)) return;
		const checkUserIsWelcome = async () => {
			appDispatch(__renderWelcome());
			await wait(3);
			appDispatch(__unmountWelcome());
		};
		(async _ =>checkUserIsWelcome())();
	}, [currentUser, appDispatch]);

	useEffect(() => {
		
		(async () => {
			await fetchAuthedUserDetails();
		})();
	}, [fetchAuthedUserDetails]);

	useEffect(() => {
		(async () => {
			if (!!manualSignedIn) {
				await fetchAuthedUserDetails();
			}
		})();
	}, [manualSignedIn, fetchAuthedUserDetails]);

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

//TODO: THERE IS A BUG WHEN FETCHING THE USER AUTH THAT THROWS AN ERROR SAYING THE .json data has already been read;

export default App;
