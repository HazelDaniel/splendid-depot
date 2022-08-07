import { React ,Component} from "react";
import './App.scss';
import Wrapper from "./components/wrapper/wrapper.component";
import { ModalOverlay } from "./components/overlays/checkout_modal_overlay/checkout_modal_overlay.component";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { updateCurrentUser, signOut, onAuthStateChanged } from "firebase/auth";
import { auth , createUserProfileDocument} from "./firebase/firebase.utils";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getDoc, onSnapshot } from "firebase/firestore";

import { updateUser } from "./redux/user/user.slice";
import { userSelector } from "./redux/store";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";



// export let user = null;


class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { currentUser } = this.props;
		// console.log(currentUser);
		return (
			<Switch>
				<Route exact path="/checkout/">
					<Wrapper ></Wrapper>
					<ModalOverlay></ModalOverlay>
				</Route>
				{/* <Route path="/" component={Wrapper}>
				</Route> */}
				<Wrapper ></Wrapper>
			</Switch>
		);
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { updateUser, currentUser } = this.props;
		this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				let userSnapshot = await getDoc(userRef);
				onSnapshot(userRef, () => {
					const userData = {
						id: userRef.id,
						...userSnapshot.data(),
						currentUser: userAuth,
					};
					updateUser(JSON.parse(JSON.stringify(userData)));
				});
			} else {
				// this.setState({currentUser: userAuth})
				updateUser({ currentUser: userAuth });
			}
			// user = userAuth;
			// console.log(currentUser);
			//TODO: IMPLEMENT A "WELCOME, USER.DISPLAY_NAME , CLICK HERE TO GO TO ..." POPUP MESSAGE ,  WHICH SHOULD HAPPEN ONLY ONCE (WILL NOT HAPPEN HERE IN THIS BLOCK)
			// console.log(currentUser)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: userSelector
})
const mapDispatchToProps = dispatch => {
	return {
		updateUser: (user) => {
			dispatch(updateUser(user))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));

