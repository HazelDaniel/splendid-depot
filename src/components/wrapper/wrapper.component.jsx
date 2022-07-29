import React from "react";
import { Switch, Route, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../header/header.component";
import Homepage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop_page/shop_page.component";
import { CheckoutPage } from "../../pages/checkout_page/checkout_page.component";
import {AuthPage} from "../../pages/auth_page/auth_page.component";
const Wrapper = (props) => {
	// console.log(props);
	const { match, history, location,currentUser } = props;
	return (
		<div className={`wrapper ${location.pathname === "/auth"?"auth":""}`}>
			<Header currentUser={currentUser}></Header>
			{/* <Route path="/" component={Header}>
      </Route> */}
			<Switch>
				<Route exact path="/" component={Homepage}></Route>
				<Route exact path="/collections" component={ShopPage}></Route>
				<Route exact path="/checkout" component={CheckoutPage}></Route>
				<Route exact path="/auth" component={AuthPage}></Route>
			</Switch>
		</div>
	);
};
export default withRouter(Wrapper);