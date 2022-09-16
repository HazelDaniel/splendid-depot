import React, { useCallback, useContext, useReducer } from "react";

import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { useAuthSignInWithEmailAndPassword } from "@react-query-firebase/auth";
import { toast } from "react-toastify";
import isEqual from "lodash.isequal";
import { manualSignInContext, userContext } from "../../App";
import { createUserDetails } from "../../utils";
import {AuthBodyStyled, AuthHeadingDivStyled} from "../../pages/auth_page/auth_page.styles";
import {CustomButtonStyled} from "../custom_button/custom_button.styles";

const handleGoogleSignIn = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const googleAuthResult = await signInWithRedirect(auth, provider);
		return googleAuthResult.user;
	} catch (error) {
		throw error;
	}
}


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
				password: "",
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
const updateForm = (payload) => ({
	type: "UPDATE_FORM",
	payload,
});
const clearForm = () => ({
	type: "CLEAR_FORM",
});

const SignIn = React.memo(
	() => {
		const [formState, dispatch] = useReducer(SignInReducer, InitialState);
		const { email, password } = formState;
		const { currentUser, updateCurrentUser } = useContext(userContext);
		const { manualSignedIn, manualSignIn } = useContext(manualSignInContext);
		const loginManually = useCallback(() => manualSignIn({
			manualSignedIn: manualSignedIn + 1,
		}), [manualSignIn, manualSignedIn]);
		// const loginAndShowState = useCallback(() => (async () => {
		// 	loginManually();

		// })(), [loginManually])
		
		const { mutate: signInAuthMutate, isLoading: signInAuthIsLoading } = useAuthSignInWithEmailAndPassword(auth, {
			onSuccess: async ({user}) => {
				// NOTE: WE ARE LOGGING IN MANUALLY BECAUSE WE DO NOT WANT TO CREATE USER DATA FOR THE USER ON SIGN IN WITH E&P. IT ALREADY EXISTS SO WE ARE ONLY READING IT
				loginManually();
			},
			onError: (error) => {
				toast.error(`couldn't sign you in. reason: ${error.message}`,{
					position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 3000,
					toastId: " sign in error"
				});
			},
		});
		const handleChange = (event) => {
			const { name, value } = event.target;
			dispatch(updateForm({ [name]: value }));
		};
		return (
			<AuthBodyStyled >
				<AuthHeadingDivStyled className="SIPB-heading-div heading-div">
					<p className="title">I already have an account</p>
					<p className="subtitle">sign in with your email and password</p>
				</AuthHeadingDivStyled>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						signInAuthMutate({ email, password });
						dispatch(clearForm());
					}}
				>
					<div className="inputs-div">
						<FormInput handleChange={handleChange} type="email" name="email" placeholder="Email" required value={formState.email} autoComplete={`on`}/>
						<FormInput handleChange={handleChange} type="password" name="password" placeholder="Password" required value={formState.password} />
					</div>
					<div className="cta-div">
						<CustomButtonStyled disabled={signInAuthIsLoading} type="submit" $group='primary'>
							SIGN IN
						</CustomButtonStyled>
						<CustomButtonStyled $group= 'secondary'  onClick={async (e) => {
							e.preventDefault();
							try {
								const googleAuthResult = await handleGoogleSignIn();
								if (!!googleAuthResult.emailVerified) {
									const { displayName } = googleAuthResult;
									await createUserDetails(googleAuthResult, [currentUser, updateCurrentUser], { displayName });
									loginManually();
								}
							} catch(error) {
								toast.error("could not sign you in ! try again",{
									position: toast.POSITION.BOTTOM_RIGHT,
									autoClose: 3000,
									toastId: "google sign in error"
								})
							}
						}}>
							SIGN IN WITH GOOGLE
						</CustomButtonStyled>
					</div>
				</form>
			</AuthBodyStyled>
		);
	},
	(prev, next) => {
		if (isEqual(prev, next)) return true;
		return false;
	}
);
export default SignIn;
