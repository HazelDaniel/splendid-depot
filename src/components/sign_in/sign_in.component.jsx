import React from "react";
import "./sign_in.styles.scss";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

import { Auth, updateCurrentUser } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup,signOut, onAuthStateChanged  } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";



class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		}
	}



	signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
		
	}
		handleChange = event => {
			const { name, value } = event.target;
			this.setState((_) => {
			return {
				[name]: value
			}
		}, () => {
			console.log(this.state)
		})
	}
	handleSubmit = event => {
		// console.log("handled");
		event.preventDefault();
		this.setState({
			email: "",
			password: "",

		});
	}

	handleGoogleSignIn = async event=> {
		event.preventDefault();
		try {
			await this.signInWithGoogle();

		} catch (error) {
			console.log(error.message);
		}
		
	}
	////MIGRATE CODEBASE TO APP
	// handleSignOut =async event=> {
	// 	event.preventDefault();
	// 	await signOut(auth);
	// 	console.log("signed out");
	// }
	render() {
		return (
			<div className="SIPB auth-body">
				<div className="SIPB-heading-div heading-div">
					<p className="title">I already have an account</p>
					<p className="subtitle">sign in with your email and password</p>
				</div>

				<form onSubmit={this.handleSubmit}>
					<div className="SIPB-inputs-div inputs-div">
					<FormInput handleChange={this.handleChange}  type="email" name="email" placeholder="Email" required value={ this.state.email}/>
					<FormInput handleChange={this.handleChange}  type="password" name="password" placeholder="Password" required value={ this.state.password}/>
				</div>
				<div className="SIPB-cta-div cta-div">
						<CustomButton type="submit" className="cta-primary" >SIGN IN</CustomButton>
						<CustomButton  className="cta-secondary" onClick={this.handleGoogleSignIn}>SIGN IN WITH GOOGLE</CustomButton>
				</div>
				</form>
			</div>

		)

	}
	////MIGRATE CODEBASE TO APP
	// componentDidMount() {
	// 	onAuthStateChanged(auth, (currentUser) => {
	// 		// user = currentUser;
	// 		this.setState((_) => {
	// 			user = currentUser;
	// 			return { user: currentUser }
	// 		}, () => {
	// 			console.log(currentUser);
	// 		})
	// 	})
	// }
}
export default SignIn;