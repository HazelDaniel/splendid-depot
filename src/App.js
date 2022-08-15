import { React, Component } from "react";
import "./App.scss";
import Wrapper from "./components/wrapper/wrapper.component";
import { Switch, Route, withRouter } from "react-router-dom/cjs/react-router-dom.min";


// FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc, onSnapshot } from "firebase/firestore";

// REDUX
import { updateUser } from "./redux/user/user.slice";
import {renderWelcome, unmountWelcome} from "./redux/app/app.slice";
import { appSelector, userSelector } from "./redux/store";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { unmountLoader,renderLoader } from "./redux/app/app.slice";


// UTILS
import { wait } from "./utils";

class App extends Component {
	
	render() {
		return <Wrapper />
	}
	unsubscribeFromAuth = null;
	componentDidMount() {

		const { updateUser, renderWelcome, unmountWelcome,renderLoader,unmountLoader } = this.props;
		try {
			this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
				if (userAuth) {
					try {
						renderLoader();
						const userRef = await createUserProfileDocument(userAuth);
						// console.log(userRef);
						let userSnapshot = await getDoc(userRef);
						onSnapshot(userRef, () => {
							const userData = {
								id: userRef.id,
								...userSnapshot.data(),
								currentUser: userAuth,
							};


							updateUser(JSON.parse(JSON.stringify(userData)));
							unmountLoader();
						});
					} catch (error) {
						throw (error);
					}
					// console.log(userAuth.displayName.split(" ")[1])
					renderWelcome();
					await wait(3);
					unmountWelcome();
				} else {
					// this.setState({currentUser: userAuth})
					updateUser({ currentUser: userAuth });
					unmountWelcome();
				}

				// user = userAuth;
				// console.log(currentUser);
				//TODO: IMPLEMENT A "WELCOME, USER.DISPLAY_NAME , CLICK HERE TO GO TO ..." POPUP MESSAGE ,  WHICH SHOULD HAPPEN ONLY ONCE (WILL NOT HAPPEN HERE IN THIS BLOCK)
			});
		} catch (error) {
			console.log(error);
		}
	}
	
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: userSelector,
	app: appSelector
});
const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (user) => {
			dispatch(updateUser(user));
		},
		renderWelcome: (_) => {
			dispatch(renderWelcome());
		},
		unmountWelcome: (_) => {
			dispatch(unmountWelcome());
		},
		renderLoader: (_) => {
			dispatch(renderLoader())
		},
		unmountLoader: (_) => {
			dispatch(unmountLoader())
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
