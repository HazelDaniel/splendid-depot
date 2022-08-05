import React from "react";
import "./header.styles.scss";
import { withRouter,Link } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userSelector } from "../../redux/store";

const Header = function ({ match, history, currentUser }) {
	// console.log(currentUser)
	return (<header>
		<div className="logo-div">
			<Link to="/">
				<Logo></Logo>
			</Link>
			
		</div>
		<nav className="header-nav">
			<ul className="header-nav-texts">
				<li className="header-nav-text" onClick={()=>{history.push(`${match.url}collections`)}}>SHOP</li>
				<li className="header-nav-text">CONTACT</li>
				{currentUser ? <li className="header-nav-text" onClick={async () => {
					await signOut(auth);
					history.push(`${match.url}auth`);
				}}>SIGN OUT</li> : <li className="header-nav-text" onClick={() => { history.push(`${match.url}auth`) }}>SIGN IN</li>}
			</ul>
			<div className="shopping-icon-div">
				<CartIcon></CartIcon>
				<span>20983</span>
			
			</div>
		</nav>
		</header>)
}
const mapStateToProps = createStructuredSelector({
	currentUser: userSelector
})
export default connect(mapStateToProps)(withRouter(Header));