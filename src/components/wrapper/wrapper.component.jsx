import React from "react";

// ROUTER
import { Switch, Route, withRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";

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
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { appSelector, userSelector } from "../../redux/store";
import { collectionsSelector } from "../../redux/store";
import AlertPopup from "../popup/alert_popup/alert_popup.component";
const isEqual = require("lodash.isequal");


class Wrapper extends React.Component {
	render() {
		const { location, app, user } = this.props;
		let displayName = user.currentUser ? user.displayName.split(" ") : null;
		return (() => {
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
						<Route exact path="/auth" render={() => (user.currentUser ? <Redirect to="/" /> : <AuthPage />)} />
						<Route exact path="/*" render={() => <Redirect to="/FourZeroFour" />} />
					</Switch>
					{app.app.displayWelcomeMessage && displayName && location.pathname !== "/FourZeroFour" ? (
						<AlertPopup alertClass={`success-popup`} alertMessage={`WELCOME ${Array.isArray(displayName) ? displayName[displayName.length - 1] : displayName}!`} />
					) : null}

					{app.app.displayPaymentMessage ? <AlertPopup alertClass={`success-popup`} alertMessage={`Transaction Successful!`} /> : null}

					{app.app.isLoading ? <Loader /> : null}
				</div>
			);
		})();
	}
	// componentDidMount() {
	// 	console.log("mounted");
	// }
	shouldComponentUpdate(nextProps) {
		if (isEqual(this.props.app.app, nextProps.app.app) && isEqual(this.props.user, nextProps.user) && isEqual(this.props.collections, nextProps.collections)) {
			let willRender = false;
			if (this.props.location.pathname !== nextProps.location.pathname) {
				willRender = true;
			}
			return willRender;
		}
		return true;
	}
}

const mapStateToProps = createStructuredSelector({
	user: userSelector,
	collections: collectionsSelector,
	app: appSelector,
});

export default connect(mapStateToProps)(withRouter(Wrapper));
