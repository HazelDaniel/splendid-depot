import React, { useCallback, useContext, useRef } from "react";


// ROUTER
import { Switch, Route, Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";

// COMPONENTS
import "./wrapper.styles.scss";
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
import {useIsFetching} from "react-query";

const isEqual = require("lodash.isequal");

export const areEqual = (currentProps, nextProps) => {
	if (isEqual(currentProps, nextProps)) return true;
	return false;
};
const handleCartModalToggle = ({ current }) => {
	current.classList.toggle("hidden");
}

const Wrapper = React.memo(
	({location}) => {
		let { appState } = useContext(AppContext);
		const { currentUser } = useContext(userContext);
		const cartModal = useRef(null);
		const isLoading = useIsFetching({predicate: query=>query.state.status === "loading"});

		const toggleCartModal = useCallback(() => handleCartModalToggle(cartModal), []);

		// console.log(user)

		// console.log(app, user);
		// console.log(user)
		let displayName = currentUser.displayName ? currentUser.displayName?.split(" ") : null;
		// console.log(displayName)
		// console.log(
		// 	"wrapper rendering"
		// )

		return (
			<div className={`wrapper ${location.pathname === "/auth" ? "auth" : ""}`}>
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
				{appState.displayWelcomeMessage && displayName && location.pathname !== "/FourZeroFour" ? (
					<AlertPopup alertClass={`success-popup`} alertMessage={`WELCOME ${Array.isArray(displayName) ? displayName[displayName.length - 1] : displayName}!`} />
				) : null}

				{appState.displayPaymentMessage ? <AlertPopup alertClass={`success-popup`} alertMessage={`Transaction Successful!`} /> : null}
				{!!isLoading ? <Loader /> : null}
			</div>
		);
	},
	(prevProps, nextProps) => {
		if (isEqual(prevProps,nextProps)) return true;
		return false; // props are not equal -> update the component
	}
);
export default withRouter(Wrapper);
