import { React, Component } from "react";
import "./App.scss";
import Wrapper from "./components/wrapper/wrapper.component";
import { Switch, Route,withRouter } from "react-router-dom/cjs/react-router-dom.min";

// FIREBASE
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { getDoc, onSnapshot } from "firebase/firestore";

// REDUX
import { updateUser } from "./redux/user/user.slice";
import {
	renderWelcome, unmountWelcome} from "./redux/app/app.slice";
import { appSelector, userSelector } from "./redux/store";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Loader from "./components/loader/loader.component";

// UTILS
import { wait } from "./utils";



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		};
	}
	renderLoader() {
		this.setState((state, props) => {
			return { isLoading: true };
		});
	}
	unmountLoader() {
		this.setState((state, props) => {
			return { isLoading: false };
		});
	}
	render() {
		return this.state.isLoading === false ? (
			<Switch>
				<Route exact path="/checkout/">
					<Wrapper />
				</Route>

				<Wrapper />
			</Switch>
		) : (
			<Loader />
		);
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unmountLoader();
		const { updateUser, app, renderWelcome, unmountWelcome } = this.props;
		this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				try {
					this.renderLoader();
					const userRef = await createUserProfileDocument(userAuth);
					let userSnapshot = await getDoc(userRef);
					onSnapshot(userRef, () => {
						const userData = {
							id: userRef.id,
							...userSnapshot.data(),
							currentUser: userAuth,
						};
						updateUser(JSON.parse(JSON.stringify(userData)));
						this.unmountLoader();
					});
				} catch (error) {
					console.log(error);
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
