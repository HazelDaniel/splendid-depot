import React, { useReducer } from "react";
import "./sign_in.styles.scss";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import isEqual from "lodash.isequal";


const handleSubmit = async (event,email,password) => {
	event.preventDefault();
	try {
		const authWithEmailAndPassword = await signInWithEmailAndPassword(auth, email, password);
		console.log(authWithEmailAndPassword);
	} catch (error) {
		throw error;
	}
};
const signInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	return signInWithPopup(auth, provider);
}
const handleGoogleSignIn = async (event) => {
		event.preventDefault();
		try {
			console.log(signInWithGoogle());
		} catch (error) {
			throw error;
		}
	};
const InitialState = {
	email: "",
	password: "",
};
const SignInReducer = (state, action) => {
	switch (action.type) {
		case "CLEAR_FORM":
			return {
				...state,
				email: "",
				password: ""
			}
		case "UPDATE_FORM":
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}


const SignIn = React.memo(() => {
	const [formState, dispatch] = useReducer(SignInReducer, InitialState);
	
	const handleChange = (event) => {
		const { name, value } = event.target;
		dispatch({ type: "UPDATE_FORM", payload: { [name]: value } });
	};
	return (
		<div className="SIPB auth-body">
			<div className="SIPB-heading-div heading-div">
				<p className="title">I already have an account</p>
				<p className="subtitle">sign in with your email and password</p>
			</div>

			<form
				onSubmit={() => {
					handleSubmit();
					dispatch({ type: "CLEAR_FORM" });
				}}
			>
				<div className="SIPB-inputs-div inputs-div">
					<FormInput handleChange={handleChange} type="email" name="email" placeholder="Email" required value={formState.email} />
					<FormInput handleChange={handleChange} type="password" name="password" placeholder="Password" required value={formState.password} />
				</div>
				<div className="SIPB-cta-div cta-div">
					<CustomButton type="submit" className="cta-primary">
						SIGN IN
					</CustomButton>
					<CustomButton className="cta-secondary" onClick={handleGoogleSignIn}>
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	);
}, (prev, next) => {
	if (isEqual(prev, next)) return true;
	return false;
});
export default SignIn;