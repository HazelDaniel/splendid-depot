import { React, useEffect, useRef, createContext, useReducer, useState } from "react";
import "./App.scss";
import Wrapper from "./components/wrapper/wrapper.component";
// FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { auth, checkLastAuthSession, createUserProfileDocument, DB, projectId } from "./firebase/firebase.utils";
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
		if (!(!!(currentUser.currentUser)))return;
		const listenForUserUpdate = async (currentUser) => {
			try {
				dispatch(renderLoader);
				const userRef = doc(DB, "users", currentUser.id);
				let userSnapshot = await getDoc(userRef);
				unsubscribeFromSnapshot = onSnapshot(userRef, () => {
					const userData = {
						id: userRef.id,
						...userSnapshot.data(),
						currentUser: currentUser.currentUser,
					};
					// updateCurrentUser(JSON.parse(JSON.stringify(userData)));
				});
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(renderWelcome());
				await wait(3);
				dispatch(unmountWelcome());
			}
		};
		listenForUserUpdate(currentUser);
		return () => {
			unsubscribeFromSnapshot &&	unsubscribeFromSnapshot();
		};
	}, [currentUser, dispatch]);

	useEffect(() => {
		let unsubscribeFromSnapshot;
		const checkLastSIgnIn = async () => {
			try {
				const lastSignIn = await checkLastAuthSession();

				dispatch(renderLoader);
				const userRes = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${lastSignIn.uid}`);
				const { fields } = await userRes.json();
				const userData = {
					id: lastSignIn.uid,
					...(reformUserObject(fields)),
					currentUser: lastSignIn
				}
				console.log(userData);
				updateCurrentUser(userData);
			} catch (error) {
				return error;
			} finally {
				dispatch(unmountLoader());
				unsubscribeFromSnapshot && unsubscribeFromSnapshot();
			}
		};
		checkLastSIgnIn()
	},[dispatch])

	return (
		<UserProvider value={userProviderValue}>
			<Wrapper />
		</UserProvider>
	);
};

export default App;
