import { React, useEffect, useRef, createContext, useReducer, useState, memo, useCallback, useMemo } from "react";
import "./App.scss";
import Wrapper from "./components/wrapper/wrapper.component";
// FIREBASE
import { addCollectionAndDocument, auth, checkLastAuthSession, projectId, SHOP_DATA } from "./firebase/firebase.utils";
// REDUX
// import { updateUser } from "./redux/user/user.slice";
import { renderWelcome, unmountWelcome } from "./redux/app/app.slice";
import { useDispatch } from "react-redux";
import { unmountLoader, renderLoader } from "./redux/app/app.slice";
// UTILS
import { checkForArraysAndReform, reformUserObject, wait } from "./utils";
import { useQuery } from "react-query";
import { useFetchUser } from "./hooks/app/app.use_fetch_user";
import { toast } from "react-toastify";
import { clientCartInitial, clientCartReducer, currentDBcart, __syncCart } from "./App.utils";

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
const UserProvider = userContext.Provider;
const ManualSignInProvider = manualSignInContext.Provider;
const ClientCartProvider = cartContext.Provider;

const App = (_) => {
	const dispatch = useDispatch();
	const [currentUser, updateCurrentUser] = useState(user);
	const [clientCartState, clientCartDispatch] = useReducer(clientCartReducer, clientCartInitial);
	console.log(clientCartState)
	const clientCartProviderValue = { clientCartState, clientCartDispatch };
	const userProviderValue = { currentUser, updateCurrentUser };
	const [{ manualSignedIn }, manualSignIn] = useState(manualAuth);

	const manualSignInValue = useMemo(()=>({
		manualSignedIn, manualSignIn
	}),[manualSignIn,manualSignedIn]);


	const checkLastSIgnIn = useCallback(() => (async () => {
		try {
			dispatch(renderLoader());
			const lastSignIn = await checkLastAuthSession();
			console.log(lastSignIn)
			const userRes = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${lastSignIn.uid}`);
			const { fields } = await userRes.json();
			console.log(fields)
			const reformedUserWithCart = checkForArraysAndReform(reformUserObject(fields));
			console.log(reformedUserWithCart)
			// console.log(fields);
			clientCartDispatch(__syncCart(reformedUserWithCart));
			currentDBcart.carts = reformedUserWithCart.carts;
			console.log(currentDBcart)
			const userData = {
				id: lastSignIn.uid,
				...reformedUserWithCart,
				currentUser: lastSignIn,
			};
			console.log(userData)
			// IN THIS BLOCK , WE ALSO WANT TO GET THE CARTS OF THE CURRENT SIGNED IN USER
			updateCurrentUser(userData);
		} catch (error) {
			return error;
		} finally {
			dispatch(unmountLoader());
		}
	})(),[dispatch]);

	console.log(currentUser);
	useEffect(() => {
		// prettier-ignore
		if (!(!!currentUser.currentUser)) return;
		const listenForUserUpdate = async () => {
			// TODO: THIS IS A CLIENT SIGN IN FUNCTIONALITY RIGHT HERE, EXPORT IT TO A SINGLE FUNCTION
			//TODO: remember to dispatch a sign in action to store instead of rendering and unmounting welcome message
			dispatch(renderWelcome());
			await wait(3);
			dispatch(unmountWelcome());
		};
		listenForUserUpdate();
		return () => {
			unsubscribeFromSnapshot && unsubscribeFromSnapshot();
		};
	}, [currentUser, dispatch]);

	useEffect(() => {
		// TODO: DISPATCH AN ACTION THAT RE-TRIGGERS THIS EFFECT FROM THE SIGN IN COMPONENT (AND UPDATE THE DEPENDENCY ARRAY) SO AS NOT TO MAKE EXTRA API REQUEST WHEN SIGNING IN
		checkLastSIgnIn();
	}, [checkLastSIgnIn]);



	useEffect(() => {
		if (!!manualSignedIn) {
			console.log("signed in on client");
			checkLastSIgnIn();
		}
	}, [manualSignedIn, checkLastSIgnIn]);

	return (
		<UserProvider value={userProviderValue}>
			<ClientCartProvider value={clientCartProviderValue}>
				<ManualSignInProvider value={manualSignInValue}>
					<Wrapper />
				</ManualSignInProvider>
			</ClientCartProvider>
		</UserProvider>
	);
};

export default App;