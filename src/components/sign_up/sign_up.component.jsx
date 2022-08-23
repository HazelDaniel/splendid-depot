import React, { useReducer } from "react";
import "./sign_up.styles.scss";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import isEqual from "lodash.isequal";


const handleSubmit = async (email,password,confirmPassword,displayName) => {
	if (password !== confirmPassword) {
		alert("passwords do not match!");
		return;
	}
	if (password.length < 6 || confirmPassword.length < 6) {
		alert("them say make you provide correct password, nor collect oh");
	}
	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	// console.log(user)
	const userDocument = await createUserProfileDocument(user, { displayName: displayName });
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
						await handleSubmit(email, password, confirmPassword, displayName);
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



