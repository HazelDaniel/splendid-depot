import React, { useCallback, useReducer } from "react";
import "./sign_up.styles.scss";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import isEqual from "lodash.isequal";
import { toast } from "react-toastify";
import { useAuthCreateUserWithEmailAndPassword } from "@react-query-firebase/auth";

const validateFromClient = (password, confirmPassword) => {
	if (password !== confirmPassword) {
		toast.error("password credentials do not match !");
		return false;
	}
	if (password.length < 6) {
		toast.error("password too short, use longer keys");
		return false;
	}
	return true;
};

const InitialState = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpReducer = (state, action) => {
	switch (action.type) {
		case "CLEAR_FORM":
			return {
				...state,
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			};
		case "UPDATE_FORM":
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

const SignUp = React.memo(
	() => {
		const [formState, dispatch] = useReducer(SignUpReducer, InitialState);
		const { email, password, confirmPassword, displayName } = formState;
		const { mutate: signUpAuthMutate } = useAuthCreateUserWithEmailAndPassword(auth, {
			onSuccess: async data => {
				toast.success(`success ${data}`);
				// await createUserProfileDocument(signUpAuthData, { displayName: displayName });
				//TODO: remember to dispatch a sign in action to store
			},
			onError: error => {
				toast.error(`couldn't sign you up. reason: ${error.message}`);
			}
		});
		const handleChange = (event) => {
			const { name, value } = event.target;
			dispatch({ type: "UPDATE_FORM", payload: { [name]: value } });
		};
		return (
			<div className="SUPB auth-body">
				<div className="heading-div">
					<p className="title">I already have an account</p>
					<p className="subtitle">sign in with your email and password</p>
				</div>

				<form
					onSubmit={async (e) => {
						e.preventDefault();
						const isClientValidated = validateFromClient(password, confirmPassword);
						if (!isClientValidated) return;
						signUpAuthMutate({ email, password });
						dispatch({ type: "CLEAR_FORM" });
					}}
				>
					<div className="inputs-div">
						<FormInput handleChange={handleChange} type="text" name="displayName" placeholder="Display Name" required value={formState.displayName} />
						<FormInput handleChange={handleChange} type="email" name="email" placeholder="Email" required value={formState.email} />
						<FormInput handleChange={handleChange} type="password" name="password" placeholder="Password" required value={formState.password} />
						<FormInput handleChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm password" required value={formState.confirmPassword} />
					</div>
					<div className="cta-div">
						<CustomButton type="submit" className="cta-primary">
							SIGN UP
						</CustomButton>
					</div>
				</form>
			</div>
		);
	},
	(prev, next) => {
		if (isEqual(prev, next)) return true;
		return false;
	}
);

export default SignUp;
