import React, { useContext } from "react";

// ROUTER
import { Switch, Route, Redirect, useLocation } from "react-router-dom/cjs/react-router-dom.min";

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
// REDUX
import { useSelector } from "react-redux";
import { appSelector } from "../../redux/store";
import AlertPopup from "../popup/alert_popup/alert_popup.component";
import { userContext } from "../../App";
const isEqual = require("lodash.isequal");

export const areEqual = (currentProps, nextProps) => {
	if (isEqual(currentProps, nextProps)) return true;
	return false;
};

const Wrapper = React.memo(
	() => {
		const location = useLocation();
		let app = useSelector(appSelector);
		const user = useContext(userContext);
		// console.log(app, user);
		// console.log(user)
		let displayName = user.currentUser ? user.currentUser.displayName?.split(" ") : null;
		// console.log(displayName)

		// console.log("rendering wrapper ");
		return (
			<div className={`wrapper ${location.pathname === "/auth" ? "auth" : ""}`}>
				<Header />
				<CartModal />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/FourZeroFour" component={F04Page} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/shop/:collection" render={() => <ShopCollection />} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/auth" render={() => (user.currentUser.currentUser ? <Redirect to="/" /> : <AuthPage />)} />
					<Route exact path="/*" render={() => <Redirect to="/FourZeroFour" />} />
				</Switch>
				{app.displayWelcomeMessage && displayName && location.pathname !== "/FourZeroFour" ? (
					<AlertPopup alertClass={`success-popup`} alertMessage={`WELCOME ${Array.isArray(displayName) ? displayName[displayName.length - 1] : displayName}!`} />
				) : null}

				{app.displayPaymentMessage ? <AlertPopup alertClass={`success-popup`} alertMessage={`Transaction Successful!`} /> : null}
				{app.isLoading ? <Loader /> : null}
			</div>
		);
	},
	(prevProps, nextProps) => {
		if (prevProps === nextProps) {
			return true; // props are equal
		}
		return false; // props are not equal -> update the component
	}
);
export default Wrapper;
