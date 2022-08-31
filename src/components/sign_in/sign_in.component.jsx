import React, { useReducer } from "react";
import "./sign_in.styles.scss";

import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { useAuthSignInWithEmailAndPassword, useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { toast } from "react-toastify";
import isEqual from "lodash.isequal";


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
const updateForm = (payload) => ({
	type: "UPDATE_FORM",
	payload
})
const clearForm = () => ({
	type: "CLEAR_FORM"
})


const SignIn = React.memo(() => {
	const [formState, dispatch] = useReducer(SignInReducer, InitialState);
	const { email, password } = formState;
	const { mutate: signInAuthMutate, isLoading: signInAuthIsLoading } = useAuthSignInWithEmailAndPassword(auth, {
		onSuccess: async(data)=> {
			toast.success(`sign in success ${data}`);
		},
		onError:(error)=>{
			toast.error(`couldn't sign you in. reason: ${error.message}`);
		}
	});
	// debugger;
	const { mutate: popupAuthMutate, isLoading: popupAuthIsLoading } = useAuthSignInWithPopup(auth, {
		onError: error => {
			toast.error(`could not open authentication modal. reason: ${error.message}`)
		}
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		dispatch(updateForm({ [name]: value }));
	};
	return (
		<div className="SIPB auth-body">
			<div className="SIPB-heading-div heading-div">
				<p className="title">I already have an account</p>
				<p className="subtitle">sign in with your email and password</p>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					signInAuthMutate({ email, password });
					dispatch(clearForm());
				}}
			>
				<div className="SIPB-inputs-div inputs-div">
					<FormInput handleChange={handleChange} type="email" name="email" placeholder="Email" required value={formState.email} />
					<FormInput handleChange={handleChange} type="password" name="password" placeholder="Password" required value={formState.password} />
				</div>
				<div className="SIPB-cta-div cta-div">
					<CustomButton disabled={signInAuthIsLoading} type="submit" className="cta-primary">
						SIGN IN
					</CustomButton>
					<CustomButton
						className="cta-secondary"
						disabled={popupAuthIsLoading}
						// onClick={}
					>
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