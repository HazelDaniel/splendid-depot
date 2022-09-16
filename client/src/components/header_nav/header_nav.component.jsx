import {HeaderNavListsStyled, HeaderNavStyled, HeaderNavTextStyled} from "../header/header.styles";
import {__emptyCart} from "../../reducers/cart.reducer";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase/firebase.utils";
import {cartContext, FooterContext, user as userInit, userContext} from "../../App";
import CartIcon from "../../assets/icons/cart_icon/cart_icon.component";
import React, {memo, startTransition, useCallback, useContext, useReducer, useRef} from "react";
import {useHistory} from "react-router-dom";
import {__showContact, makeOneTrue} from "../../reducers/footer.reducer";


const initialNavTabState = {
	shopActive: false,
	contactActive: false,
	authActive: false
}
const navTabReducer = (state,action)=>{
	switch (action.type){
		case "SHOP_ACTIVE":
			return makeOneTrue(state,"shopActive");
		case "CONTACT_ACTIVE":
			return makeOneTrue(state,"contactActive");
		case "AUTH_ACTIVE":
			return makeOneTrue(state,"authActive");
		default:
			return {
				shopActive: false,
				contactActive: false,
				authActive:  false
			}
	}
}
const __shopActive = ()=>({
	type: "SHOP_ACTIVE",
});
const __contactActive = ()=>({
	type: "CONTACT_ACTIVE",
});
const __authActive = ()=>({
	type: "AUTH_ACTIVE",
});
const __hideActive = ()=>({
	type: "HIDE_ACTIVE"
})

const scrollToWindowTop =()=>{
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

export const HeaderNav = ()=>{
	const navPane = useRef(null);
	const history = useHistory();
	const user = useContext(userContext);
	const { clientCartState, clientCartDispatch } = useContext(cartContext);
	const [navState,navStateDispatch] = useReducer(navTabReducer,initialNavTabState);
	const navToAuth  = useCallback((()=>{
		history.push(`/auth`);
		scrollToWindowTop();
		navStateDispatch(__authActive());
	}),[]);
	return (
		<HeaderNavStyled ref={navPane}>
			<HeaderNavListsStyled>
				<HeaderNavTextStyled
					onClick={() => {
						startTransition(()=>
						history.push(`/`));
						scrollToWindowTop();
						navStateDispatch(__hideActive());
					}}
				>HOME</HeaderNavTextStyled>
				<HeaderNavTextStyled
					$isActive={navState.shopActive}
					onClick={() => {
						startTransition(()=>
						history.push(`/shop`));
						scrollToWindowTop();
						navStateDispatch(__shopActive());
					}}
				>
					SHOP
				</HeaderNavTextStyled>
				<ContactLink dispatch={navStateDispatch} state={navState}/>
				{user.currentUser.currentUser ? (
					<HeaderNavTextStyled
						$isActive={navState.authActive}
						onClick={async () => {
							clientCartDispatch(__emptyCart());
							await signOut(auth);
							user.updateCurrentUser(userInit);
							startTransition(()=>
								navToAuth()
							)
						}}
					>
						SIGN OUT
					</HeaderNavTextStyled>
				) : (
					<HeaderNavTextStyled
						$isActive={navState.authActive}
						onClick={() => {
							startTransition(()=>
								navToAuth()
							)
						}}
					>
						SIGN IN
					</HeaderNavTextStyled>
				)}
			</HeaderNavListsStyled>
			<div className="shopping-icon-div">
				<CartIcon/>
				<span>{clientCartState.carts.length}</span>
			</div>
		</HeaderNavStyled>
	)
}

export const ContactLink  = memo(({state,dispatch})=>{
	const {footerStateDispatch,footerRef} = useContext(FooterContext);
	return (
		<HeaderNavTextStyled $isActive={state.contactActive} onClick={()=> {
			footerStateDispatch(__showContact());
			dispatch(__contactActive());
			footerRef.current.scrollIntoView({behavior: "smooth"});
		}}>CONTACT</HeaderNavTextStyled>
	)
});

