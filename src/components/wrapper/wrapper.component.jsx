import React from "react";

// ROUTER
import { Switch, Route, withRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";

// COMPONENTS
import "./wrapper.styles.scss";
import Header from "../header/header.component";
import Homepage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop_page/shop_page.component";
import { CheckoutPage } from "../../pages/checkout_page/checkout_page.component";
import { AuthPage } from "../../pages/auth_page/auth_page.component";
import CartModal from "../cart_modal/cart_modal.component";

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userSelector } from "../../redux/store";
// import { cartSelector } from "../../redux/store";




const Wrapper = (props) => {
	// console.log(props);
	const { location, currentUser } = props;
	return (
		<div className={`wrapper ${location.pathname === "/auth" ? "auth" : ""}`}>
			<Header></Header>
			<CartModal />

			{/* <Route path="/" component={Header}>
      </Route> */}
			<Switch>
				<Route exact path="/" component={Homepage}/>
				<Route exact path="/shop" component={ShopPage}/>
				<Route exact path="/shop/hats" component={Homepage}/>
				<Route exact path="/checkout" component={CheckoutPage}/>
				<Route exact path="/auth" render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}></Route>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: userSelector,
	// cart: cartSelector
})

export default connect(mapStateToProps)(withRouter(Wrapper));