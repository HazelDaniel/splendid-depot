import React from "react";

import { withRouter,Link } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import {HEADER} from "./header.styles";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userSelector } from "../../redux/store";
import { cartItemsTotalSelector } from "../../redux/store";

const Header = function ({ match, history, user, totalSelectedItems }) {
	// console.log(currentUser)
	return (
		<HEADER>
			<div className="logo-div">
				<Link to="/">
					<Logo></Logo>
				</Link>
			</div>
			<nav className="header-nav">
				<ul className="header-nav-texts">
					<li
						className="header-nav-text"
						onClick={() => {
							history.push(`/shop`);
						}}
					>
						SHOP
					</li>
					<li className="header-nav-text">CONTACT</li>
					{user.currentUser ? (
						<li
							className="header-nav-text"
							onClick={async () => {
								await signOut(auth);
								history.push(`/auth`);
							}}
						>
							SIGN OUT
						</li>
					) : (
						<li
							className="header-nav-text"
								onClick={() => {
								console.log(user)
								history.push(`/auth`);
							}}
						>
							SIGN IN
						</li>
					)}
				</ul>
				<div className="shopping-icon-div">
					<CartIcon></CartIcon>
					<span>{ totalSelectedItems}</span>
				</div>
			</nav>
		</HEADER>
	);
};
const mapStateToProps = createStructuredSelector({
	user: userSelector,
	totalSelectedItems: cartItemsTotalSelector
})
export default connect(mapStateToProps)(withRouter(Header));