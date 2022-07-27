import React from "react";
import "./header.styles.scss";
import { withRouter,Link } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import { CartIcon } from "../../assets/icons/cart_icon/cart_icon.component";

const Header = function (props) {
	return (<header>
		<div className="logo-div">
			<Link to="/">
				<Logo></Logo>
			</Link>
			
		</div>
		<nav className="header-nav">
			<ul className="header-nav-texts">
				<li className="header-nav-text" onClick={()=>{props.history.push(`${props.match.url}collections`)}}>SHOP</li>
				<li className="header-nav-text">CONTACT</li>
				<li className="header-nav-text" onClick={()=>{props.history.push(`${props.match.url}auth`)}}>SIGN IN</li>
			</ul>
			<div className="shopping-icon-div">
				<CartIcon></CartIcon>
				<span>20983</span>
			
			</div>
		</nav>
		</header>)
}
export default withRouter(Header);