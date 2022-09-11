import React from "react";
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign_up/sign_up.component";
import {AuthWrapperStyled} from "./auth_page.styles";
export const AuthPage = function () {
	return (
		<AuthWrapperStyled>
			<SignIn/>
			<SignUp/>
		</AuthWrapperStyled>
	);
}
export default  AuthPage;