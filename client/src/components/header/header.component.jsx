import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";

import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "../logo/logo.component";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import {HEADER, HeaderNavListsStyled, HeaderNavTextStyled} from "./header.styles";

import { signOut } from "firebase/auth";
import { auth, DB, getCollectionsMap } from "../../firebase/firebase.utils";

import { useDispatch } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { cartContext, ShopContext, userContext } from "../../App";
import { user as userInit } from "../../App";
import { __emptyCart } from "../../reducers/cart.reducer";
import { __renderLoader, __unmountLoader } from "../../reducers/app.reducer";
import { __updateCollections } from "../../reducers/shop.reducer";
import {checkForArraysAndReform, reformUserObject, wait} from "../../utils";
import {useFetchCollections} from "../../hooks/shop/use_fetch_collection";
import {withTheme} from "styled-components";


import {useDatabaseSnapshot, useDatabaseValue} from "@react-query-firebase/database";
import {useTheme} from "styled-components";
import {HeaderNav} from "../header_nav/header_nav.component";


const detectScrollAndStyle = ({current:element},color) => {
	if (!element) return;
	let oldScrollY = window.scrollY;
	element.style.backgroundColor = 'transparent';
	window.onscroll = function (e) {
		if (oldScrollY < window.scrollY) {
			// DOWN
			element.style.backgroundColor = `transparent`;
			
		} else {
			// UP
			element.style.backgroundColor = color;
			
		}
		oldScrollY = window.scrollY;
	};
}


const collectionsRef = collection(DB, "collections");


const Header = React.memo(({toggleCartModal,theme}) => {
	
	// const {themeState} = useContext()
	const { shopDispatch } = useContext(ShopContext);
	const {isLoading,isSuccess,data,isError,error,refetch:reFetchCollections} = useFetchCollections();

	const history = useHistory();
	const headerRef = useRef(null);
	// console.log(user, user.currentUser.currentUser);
	
	useEffect(()=>{
		if(isSuccess) {
			const res = data.data;
			const collections = res.documents.map(entry => entry.fields).map(col=>checkForArraysAndReform((reformUserObject((col)))));
			const convertedCollections = collections.reduce((acc, current) => {
				acc[current.title.toLowerCase()] = current;
				return acc;
			}, {});
			shopDispatch(__updateCollections(convertedCollections));
		}
		if(isError) alert(error.message);

	},[isSuccess,isError]);
	
	useEffect(()=>{
		reFetchCollections();
	},[])
	
	
	
	useEffect(() => {
		detectScrollAndStyle(headerRef,theme.$BodyColor);
	},[theme]);
	return (
		<HEADER ref={headerRef}>
			<div className="logo-div">
					<Logo/>
			</div>
			<HeaderNav toggleCartModal={toggleCartModal}/>
		</HEADER>
	);
})

export default withTheme(Header);