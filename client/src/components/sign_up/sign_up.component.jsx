import React, { useCallback, useContext, useReducer } from "react";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import isEqual from "lodash.isequal";
import { toast } from "react-toastify";
import { useAuthCreateUserWithEmailAndPassword } from "@react-query-firebase/auth";
import { manualSignInContext, user, userContext } from "../../App";
import { updateUser } from "../../redux/user/user.slice";
import { createUserDetails } from "../../utils";
import {CustomButtonStyled} from "../custom_button/custom_button.styles";
import {AuthBodyStyled, AuthHeadingDivStyled} from "../../pages/auth_page/auth_page.styles";

// const handleSignUp = async (email, password,displayName)=>{
// 	try {
// 		const userAuth = await createUserWithEmailAndPassword(auth, email, password);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

const validateFromClient = (password, confirmPassword) => {
	if (password !== confirmPassword) {
		toast.error("password credentials do not match !",{
			position: toast.POSITION.BOTTOM_LEFT,
			autoClose: 3000,
			toastId: " unmatched credential error"
		});
		return false;
	}
	if (password.length < 6) {
		toast.error("password too short, use longer keys",{
			position: toast.POSITION.BOTTOM_LEFT,
			autoClose: 3000,
			toastId: " short credential error"
		});
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
		const { currentUser, updateCurrentUser } = useContext(userContext);
		const { manualSignedIn, manualSignIn } = useContext(manualSignInContext);
		const loginManually = useCallback(
			() =>
				manualSignIn({
					manualSignedIn: manualSignedIn + 1,
				}),
			[manualSignIn, manualSignedIn]
		);
		const { mutate: signUpAuthMutate } = useAuthCreateUserWithEmailAndPassword(auth, {
			onSuccess: async ({user}) => {
				// console.log(` sign up success ${user}`);
				await createUserDetails(user, [currentUser, updateCurrentUser], { displayName });
				loginManually();
			},
			onError: error => {
				toast.error(`couldn't sign you up. reason: ${error.message}`,{
					position: toast.POSITION.BOTTOM_LEFT,
					autoClose: 3000,
					toastId: " sign up error"
				});
			}
		});
		const handleChange = (event) => {
			const { name, value } = event.target;
			dispatch({ type: "UPDATE_FORM", payload: { [name]: value } });
		};
		return (
			<AuthBodyStyled className="SUPB">
				<AuthHeadingDivStyled className="heading-div">
					<p className="title">I already have an account</p>
					<p className="subtitle">sign in with your email and password</p>
				</AuthHeadingDivStyled>

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
						<FormInput handleChange={handleChange} type="text" name="displayName" placeholder="Display Name" required value={formState.displayName} autoComplete={`on`}/>
						<FormInput handleChange={handleChange} type="email" name="email" placeholder="Email" required value={formState.email} autoComplete={`on`}/>
						<FormInput handleChange={handleChange} type="password" name="password" placeholder="Password" required value={formState.password} />
						<FormInput handleChange={handleChange} type="password" name="confirmPassword" placeholder="Confirm password" required value={formState.confirmPassword} />
					</div>
					<div className="cta-div">
						<CustomButtonStyled type="submit" $group='primary'>
							SIGN UP
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

export default SignUp;
