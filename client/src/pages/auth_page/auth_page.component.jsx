import React from "react";
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign_up/sign_up.component";
import "./auth_page.styles.scss"
export const AuthPage = function () {
	return (
		<div className="auth-page-wrapper">
			<SignIn/>
			<SignUp/>
		</div>
	);
}