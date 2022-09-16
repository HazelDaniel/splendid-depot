import React, {createContext, lazy, Suspense, useCallback, useContext, useMemo, useReducer, useRef} from "react";



// ROUTER
import { Switch, Route, withRouter,Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import Redirect from ;

// COMPONENTS AND STYLED
import {WrapperStyled} from "./wrapper.styles";
// import CheckoutPage from "../../pages/checkout_page/checkout_page.component";
import Homepage from "../../pages/homepage/homepage.component";
import CartModal from "../cart_modal/cart_modal.component";
import ShopCollection from "../shop_collection/shop_collection.component";
import F04Page from "../../pages/404_page/F04_page.component";
import Loader from "../loader/loader.component";

import AlertPopup from "../popup/alert_popup/alert_popup.component";
// GLOBAL STATE
import { userContext } from "../../App";
import ThemeController from "../../theme_controller/theme_controller.component";
import {cartModalReducer, initialCartModalState} from "../../reducers/cart_modal.reducer";

//DYNAMIC IMPORTS AND LAZY
// const Homepage = lazy(()=> import("../../pages/homepage/homepage.component"));
const Header = lazy(()=>import("../header/header.component"));
const ShopPage = lazy(()=>import("../../pages/shop_page/shop_page.component"));
const CheckoutPage = lazy(()=>import("../../pages/checkout_page/checkout_page.component"));
const AuthPage = lazy(()=>import("../../pages/auth_page/auth_page.component"));

const isEqual = require("lodash.isequal");

export const areEqual = (currentProps, nextProps) => {
	if (isEqual(currentProps, nextProps)) return true;
	return false;
};

//CONTEXTS
export const cartModalContext = createContext(initialCartModalState);
const CartModalProvider = cartModalContext.Provider;



const Wrapper = React.memo(({location,themeValue}) => {
	const { currentUser } = useContext(userContext);
	const [cartModalState, cartModalStateDispatch] = useReducer(cartModalReducer,initialCartModalState);
	//PROVIDER VALUES
	const cartModalProviderValue = useMemo(() => ({ cartModalState, cartModalStateDispatch}), [cartModalState]);
	
	
	
	let displayName = currentUser.displayName ? currentUser.displayName?.split(" ") : null;
	return (
				<WrapperStyled $bgColor ={location.pathname === `/auth`? `auth-color`: `home-color`}>
					<CartModalProvider value={cartModalProviderValue}>
						<Header />
						<CartModal />
					</CartModalProvider>
					<React.Suspense fallback={<Loader/>}>
					
					<Switch>
							<Route exact path="/" component={Homepage} />
							<Route exact path="/FourZeroFour" component={F04Page} />
							<Route exact path="/shop" component={ShopPage} />
							<Route exact path="/shop/:collection" render={() => <ShopCollection />} />
							<Route exact path="/checkout" component={CheckoutPage} />
							<Route exact path="/auth" render={() => (currentUser.currentUser ? <Redirect to="/" /> : <AuthPage />)} />
							<Route exact path="/*" render={()=><Redirect to="/FourZeroFour"/>}/>
					</Switch>
					</React.Suspense>
					<Loader/>
					<ThemeController themeStore={themeValue}/>
				</WrapperStyled>
	);
},(prev,next)=>{
	if(isEqual(prev,next)) return true;
	return false;
})
export default withRouter(Wrapper);
