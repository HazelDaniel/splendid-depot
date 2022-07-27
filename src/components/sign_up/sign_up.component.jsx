import React from "react";
import "./sign_up.styles.scss";
import { FormInput } from "../form_input/form_input.component";
import { CustomButton } from "../custom_button/custom_button.component";

class SignUp extends React.Component{
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		}
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
		console.log("handled");
		event.preventDefault();
		this.setState({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	}
	render() {
		return (
			<div className="SUPB auth-body">
				<div className="heading-div">
					<p className="title">I already have an account</p>
					<p className="subtitle">sign in with your email and password</p>
				</div>

				<form onSubmit={this.handleSubmit}>
					<div className="inputs-div">
						<FormInput handleChange={this.handleChange} type="text" name="displayName" placeholder="Display Name" required value={ this.state.displayName} />
					<FormInput handleChange={this.handleChange}  type="email" name="email" placeholder="Email" required value={ this.state.email}/>
					<FormInput handleChange={this.handleChange}  type="password" name="password" placeholder="Password" required value={ this.state.password}/>
					<FormInput handleChange={this.handleChange}  type="password" name="confirmPassword" placeholder="Confirm password" required value={ this.state.confirmPassword}/>
				</div>
				<div className="cta-div">
					<CustomButton type="submit" className="cta-primary" >
						SIGN UP
					</CustomButton>
				</div>
				</form>
			</div>
		)
	}
}
export default SignUp;