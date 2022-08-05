import React from "react";
import { Switch, Route, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../header/header.component";
import Homepage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop_page/shop_page.component";
import { CheckoutPage } from "../../pages/checkout_page/checkout_page.component";
import { AuthPage } from "../../pages/auth_page/auth_page.component";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { userSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
const Wrapper = (props) => {
	// console.log(props);
	const {location,currentUser } = props;
	return (
		<div className={`wrapper ${location.pathname === "/auth" ? "auth" : ""}`}>
			<Header></Header>
			{/* <Route path="/" component={Header}>
      </Route> */}
			<Switch>
				<Route exact path="/" component={Homepage}></Route>
				<Route exact path="/collections" component={ShopPage}></Route>
				<Route exact path="/checkout" component={CheckoutPage}></Route>
				<Route exact path="/auth" render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}></Route>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: userSelector
})

export default connect(mapStateToProps)(withRouter(Wrapper));