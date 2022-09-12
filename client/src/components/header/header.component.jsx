import React, { useContext, useEffect, useRef, useState } from "react";

import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import {HEADER} from "./header.styles";

import { signOut } from "firebase/auth";
import { auth, DB, getCollectionsMap } from "../../firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { updateCollections } from "../../redux/shop/shop.slice";
import { AppContext, cartContext, ShopContext, userContext } from "../../App";
import { user as userInit } from "../../App";
import { __emptyCart } from "../../reducers/cart.reducer";
import { __renderLoader, __unmountLoader } from "../../reducers/app.reducer";
import { __updateCollections } from "../../reducers/shop.reducer";
import {checkForArraysAndReform, reformUserObject, wait} from "../../utils";
import {useFetchCollections} from "../../hooks/shop/use_fetch_collection";
import {withTheme} from "styled-components";


import {useDatabaseSnapshot, useDatabaseValue} from "@react-query-firebase/database";
import {useTheme} from "styled-components";


const detectScrollAndStyle = ({current:element},color) => {
	if (!element) return;
	var oldScrollY = window.scrollY;
	window.onscroll = function (e) {
		if (oldScrollY < window.scrollY) {
			// DOWN
			element.style.backgroundColor = color;
			// element.style.visibility = `hidden`;
		} else {
			// UP
			// element.style.visibility = `visible`;
			element.style.backgroundColor = `transparent`;
		}
		oldScrollY = window.scrollY;
	};
}


const collectionsRef = collection(DB, "collections");


const Header = React.memo(({toggleCartModal,theme}) => {
	const user = useContext(userContext);
	const { clientCartState, clientCartDispatch } = useContext(cartContext);
	// const {themeState} = useContext()
	const { shopDispatch } = useContext(ShopContext);
	const {isLoading,isSuccess,data,isError,error} = useFetchCollections();

	const history = useHistory();
	const headerRef = useRef(null);
	// console.log(user, user.currentUser.currentUser);
	
	useEffect(()=>{
		if(isSuccess) {
			const res = data.data;
			console.log(res)
			const collections = res.documents.map(entry => entry.fields).map(col=>checkForArraysAndReform((reformUserObject((col)))));
			const convertedCollections = collections.reduce((acc, current) => {
				acc[current.title.toLowerCase()] = current;
				return acc;
			}, {});
			shopDispatch(__updateCollections(convertedCollections));
		}
		if(isError) alert(error.message);

	},[isSuccess,isError])
	
	
	
	useEffect(() => {
		detectScrollAndStyle(headerRef,theme.$BodyColor);
	},[]);
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
								clientCartDispatch(__emptyCart());
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
					<CartIcon toggleCartModal={toggleCartModal}/>
					<span>{clientCartState.carts.length}</span>
				</div>
			</nav>
		</HEADER>
	);
})

export default withTheme(Header);