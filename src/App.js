import { React, useEffect, useRef, createContext, useReducer, useState, memo } from "react";
import "./App.scss";
import Wrapper from "./components/wrapper/wrapper.component";
// FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { addCollectionAndDocument, auth, checkLastAuthSession, createUserProfileDocument, DB, projectId, SHOP_DATA } from "./firebase/firebase.utils";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
// REDUX
// import { updateUser } from "./redux/user/user.slice";
import { renderWelcome, unmountWelcome } from "./redux/app/app.slice";
import { useDispatch } from "react-redux";
import { unmountLoader, renderLoader } from "./redux/app/app.slice";
// UTILS
import { reformUserObject, wait } from "./utils";
import { last } from "lodash";
import { useQuery } from "react-query";
import { useFetchUser } from "./hooks/app/app.use_fetch_user";
import { toast } from "react-toastify";

let unsubscribeFromAuth;
let unsubscribeFromSnapshot;

export const user = {
	currentUser: null,
};
export const userContext = createContext({
	...user,
	updateCurrentUser: () => {},
});
export const userNameContext = createContext({
	displayName: null,
	setDisplayName: () => {},
});
const UserProvider = userContext.Provider;

// const userReducer = (state, action) => {
// 	switch (action.type) {
// 		case `SET_CURRENT_USER`:
// 			return {
// 				...state,
// 				...action.payload
// 			}
// 		default:
// 			return state
// 	}
// }
// const setCurrentUser = (payload) => {
// 	return {
// 		type: `SET_CURRENT_USER`,
// 		payload
// 	}
// }

const App = (_) => {
	const dispatch = useDispatch();
	const [currentUser, updateCurrentUser] = useState(user);
	const userProviderValue = { currentUser, updateCurrentUser };
	console.log(currentUser);
	useEffect(() => {
		// prettier-ignore
		if (!(!!currentUser.currentUser)) return;
		const listenForUserUpdate = async () => {
			// TODO: THIS IS A CLIENT SIGN IN FUNCTIONALITY RIGHT HERE, EXPORT IT TO A SINGLE FUNCTION
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
		let unsubscribeFromSnapshot;
		const checkLastSIgnIn = async () => {
			try {
				dispatch(renderLoader());
				const lastSignIn = await checkLastAuthSession();
				const userRes = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${lastSignIn.uid}`);
				const { fields } = await userRes.json();
				const userData = {
					id: lastSignIn.uid,
					...reformUserObject(fields),
					currentUser: lastSignIn,
				};
				updateCurrentUser(userData);
			} catch (error) {
				return error;
			} finally {
				unsubscribeFromSnapshot && unsubscribeFromSnapshot();
				dispatch(unmountLoader());
			}
		};
		checkLastSIgnIn();
	}, [dispatch]);

	return (
		<UserProvider value={userProviderValue}>
			<Wrapper />
		</UserProvider>
	);
};

export default App;