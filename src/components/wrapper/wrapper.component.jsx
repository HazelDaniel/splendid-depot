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
import CollectionPreview from "../collection_preview/collection_preview.component";
import F04Page from "../../pages/404_page/F04_page.component";

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { appSelector, userSelector } from "../../redux/store";
import { collectionsSelector } from "../../redux/store";
import AlertPopup from "../popup/alert_popup/alert_popup.component";





class Wrapper extends React.Component {

	render(){
		const { location, app ,currentUser} = this.props;
		let displayName = currentUser?.providerData[0].displayName.split(" ");
		// console.log(app)
				return (() => {
			return (
				<div className={`wrapper ${location.pathname === "/auth" ? "auth" : ""}`}>
					<Header/>
					<CartModal />
			
					{/* <Route path="/" component={Header}>
				</Route> */}
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/FourZeroFour" component={F04Page} />
						<Route exact path="/shop" component={ShopPage} />
						<Route exact path="/shop/:collection" render={() => <CollectionPreview />} />
						<Route exact path="/checkout" component={CheckoutPage} />
						<Route exact path="/auth" render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)} />
						<Route exact path="/*" render={() => <Redirect to="/FourZeroFour" />} />
					</Switch>
						<Route exact path="/" render={()=>app.app.displayWelcomeMessage && displayName ? <AlertPopup alertClass={`success-popup`} alertMessage={`WELCOME ${displayName[displayName.length - 1]}!` } />: null} />
				</div>
			);
			})();

	}


};


const mapStateToProps = createStructuredSelector({
	currentUser: userSelector,
	collections: collectionsSelector,
	app: appSelector
})

export default connect(mapStateToProps)(withRouter(Wrapper));