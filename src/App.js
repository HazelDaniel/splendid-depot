import { React ,Component} from "react";
import './App.scss';
import Wrapper from "./components/wrapper/wrapper.component";
import { ModalOverlay } from "./components/overlays/checkout_modal_overlay/checkout_modal_overlay.component";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { updateCurrentUser, signOut, onAuthStateChanged } from "firebase/auth";
import { auth , createUserProfileDocument} from "./firebase/firebase.utils";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { getDoc, onSnapshot } from "firebase/firestore";

export let user = null;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}
	render() {
		return (
			<Switch>
				<Route exact path="/checkout/">
					<Wrapper currentUser={user}></Wrapper>
					<ModalOverlay></ModalOverlay>
				</Route>
				{/* <Route path="/" component={Wrapper}>
				</Route> */}
				<Wrapper currentUser={user}></Wrapper>
			</Switch>
		);
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				const userSnapshot = await getDoc(userRef);
				// console.log(userSnapshot.data());
				onSnapshot(userRef, () => {
					this.setState(
						(_) => {
							return {
								id: userRef.id,
								...userSnapshot.data(),
								currentUser: userAuth,
							};
						},
						() => {
							//TODO: IMPLEMENT A "WELCOME, USER.DISPLAY_NAME , CLICK HERE TO GO TO ..." POPUP MESSAGE ,  WHICH SHOULD HAPPEN ONLY ONCE (WILL NOT HAPPEN HERE IN THIS BLOCK)
						}
					);
				});
				
			} else {
				this.setState({currentUser: userAuth})
			}
			user = userAuth;
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
}


export default withRouter(App);
