import React, { useContext, useEffect, useRef, useState } from "react";

import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import {HEADER} from "./header.styles";

import { signOut } from "firebase/auth";
import { auth, DB, getCollectionsMap } from "../../firebase/firebase.utils";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/store";
import { cartItemsTotalSelector } from "../../redux/store";
import { collection, onSnapshot } from "firebase/firestore";
import { updateCollections } from "../../redux/shop/shop.slice";
import { renderLoader, unmountLoader } from "../../redux/app/app.slice";
import { userContext } from "../../App";
import { user as userInit } from "../../App";


const detectScrollAndStyle = ({current:element}) => {
	if (!element) return;
	var oldScrollY = window.scrollY;
	window.onscroll = function (e) {
		if (oldScrollY < window.scrollY) {
			// DOWN
			element.style.backgroundColor = `var(--BodyColor)`;
			// element.style.visibility = `hidden`;
		} else {
			// UP
			// element.style.visibility = `visible`;
			element.style.backgroundColor = `transparent`;
		}
		oldScrollY = window.scrollY;
	};
}


const Header = React.memo(() => {
	const user = useContext(userContext);
	const totalSelectedItems = useSelector(cartItemsTotalSelector);
	const history = useHistory();
	const dispatch = useDispatch();
	const headerRef = useRef(null);
	// console.log(user, user.currentUser.currentUser);
	console.log("header rendering ")

	useEffect(() => {
		const collectionRef = collection(DB, "collections");
		const unSubscribeFromSnapshot = onSnapshot(collectionRef, async () => {
			dispatch(renderLoader());
			try {
				const collections = await getCollectionsMap(collectionRef);
				dispatch(updateCollections(collections));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(unmountLoader());
			}
		});

		return () => {
			unSubscribeFromSnapshot();
		}
	}, [dispatch])
	useEffect(() => {
		detectScrollAndStyle(headerRef);
	},[])
	return (
		<HEADER ref={headerRef}>
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
					{user.currentUser.currentUser ? (
						<li
							className="header-nav-text"
							onClick={async () => {
								await signOut(auth);
								user.updateCurrentUser(userInit);
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
					<span>{totalSelectedItems}</span>
				</div>
			</nav>
		</HEADER>
	);
})

export default Header;