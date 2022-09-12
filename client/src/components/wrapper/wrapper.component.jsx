import React, {useCallback, useContext, useMemo, useReducer, useRef} from "react";


// ROUTER
import { Switch, Route, Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

// COMPONENTS
import {WrapperStyled} from "./wrapper.styles";
import Header from "../header/header.component";
import Homepage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop_page/shop_page.component";
import CheckoutPage from "../../pages/checkout_page/checkout_page.component";
import { AuthPage } from "../../pages/auth_page/auth_page.component";
import CartModal from "../cart_modal/cart_modal.component";
import ShopCollection from "../shop_collection/shop_collection.component";
import F04Page from "../../pages/404_page/F04_page.component";
import Loader from "../loader/loader.component";

import AlertPopup from "../popup/alert_popup/alert_popup.component";
// GLOBAL STATE
import { AppContext, userContext } from "../../App";
import {ThemeProvider} from "styled-components";
import {useIsFetching} from "react-query";
import {initialThemeState, themeReducer} from "../../reducers/theme.reducer";




const isEqual = require("lodash.isequal");

export const areEqual = (currentProps, nextProps) => {
	if (isEqual(currentProps, nextProps)) return true;
	return false;
};
const handleCartModalToggle = ({ current }) => {
	current.classList.toggle("hidden");
}

const Wrapper = React.memo(({location}) => {
	const { currentUser } = useContext(userContext);
	const cartModal = useRef(null);
	const [themeState,themeStateDispatch] = useReducer(themeReducer,initialThemeState);
	
	const themeValue = useMemo(()=>{
		return {
			themeState
		}
	},[themeState]);
	
	console.log("wrapper rendering")
	const toggleCartModal = useCallback(() => handleCartModalToggle(cartModal), []);
	let displayName = currentUser.displayName ? currentUser.displayName?.split(" ") : null;
	return (
		<ThemeProvider theme={themeValue.themeState.theme}>
			<WrapperStyled $bgColor ={location.pathname === `/auth`? `auth-color`: `home-color`}>
				<Header toggleCartModal={toggleCartModal} />
				<CartModal ref={cartModal} toggleCartModal={toggleCartModal} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/FourZeroFour" component={F04Page} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/shop/:collection" render={() => <ShopCollection />} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/auth" render={() => (currentUser.currentUser ? <Redirect to="/" /> : <AuthPage />)} />
					<Route exact path="/*" render={() => <Redirect to="/FourZeroFour" />} />
				</Switch>
				
				<AlertPopup displayName={displayName} />;
				<Loader/>
			</WrapperStyled>
		</ThemeProvider>
	);
},(prev,next)=>{
	if(isEqual(prev,next)) return true;
	return false;
})
export default withRouter(Wrapper);
