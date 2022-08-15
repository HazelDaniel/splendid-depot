import React from "react";

import { withRouter,Link } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import {HEADER} from "./header.styles";

import { signOut } from "firebase/auth";
import { auth, DB, getCollectionsMap } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userSelector } from "../../redux/store";
import { cartItemsTotalSelector } from "../../redux/store";
import { collection, onSnapshot } from "firebase/firestore";
import { updateCollections } from "../../redux/shop/shop.slice";
import { renderLoader, unmountLoader } from "../../redux/app/app.slice";


class Header extends React.Component {
	render() {
		console.log("rendering header")
	const { match, history, user, totalSelectedItems } = this.props;
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
	}
	componentDidMount() {
		const { updateCollections ,renderLoader,unmountLoader} = this.props;
		const collectionRef = collection(DB, "collections");
		onSnapshot(collectionRef, async () => {
			renderLoader()
			try {
				const collections = await getCollectionsMap(collectionRef);
				updateCollections(collections);
			} catch (error) {
				console.log(error);
			} finally {
				unmountLoader();
			}
		});
	}

};


const mapStateToProps = createStructuredSelector({
	user: userSelector,
	totalSelectedItems: cartItemsTotalSelector
})
const mapDispatchToProps = dispatch => {
	return {
		updateCollections: (collections) => {
			dispatch(updateCollections(collections));
		},
		renderLoader: (_) => {
			dispatch(renderLoader())
		},
		unmountLoader: (_) => {
			dispatch(unmountLoader())
		},
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));