import React, { useContext } from "react";

// COMPONENTS
import CartModalItem from "../cart_modal_item/cart_modal_item.component";

// ROUTING
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// UTILS
import { nanoid } from "@reduxjs/toolkit";

// GLOBAL STATE
import { cartContext } from "../../App";
import {CartCancelButtonStyled, CartItemsBodyStyled, CartModalCTAStyled, CartModalStyled} from "./cart_modal.styles";
import {PlaceholderText} from "../placeholder_text/placeholder_text.component";
import {cartModalContext} from "../wrapper/wrapper.component";
import {__toggleCartModal} from "../../reducers/cart_modal.reducer";




const CartModal = () => {
	const { clientCartState } = useContext(cartContext);
	const {cartModalState,cartModalStateDispatch} = useContext(cartModalContext);
	// console.log(cartModalState.cartModalToggled,cartModalState);
	const history = useHistory();
	return (
		<CartModalStyled className={cartModalState.cartModalToggled === `off` ? `hidden`:``}>
			<CartCancelButtonStyled >
				<button onClick={()=>{
					cartModalStateDispatch(__toggleCartModal());
				}}>X</button>
			</CartCancelButtonStyled>
			<CartItemsBodyStyled >
				{clientCartState.carts.length === 0? <PlaceholderText $variant={`M`} message={`cart is empty !`}/>:null}
				{clientCartState.carts.map((cartItem) => (
					<CartModalItem cart={cartItem} key={cartItem.id} />
				))}
			</CartItemsBodyStyled>
			<CartModalCTAStyled
				onClick={() => {
					cartModalStateDispatch(__toggleCartModal());
					history.push(`/checkout`);
				}}
			>
				GO TO CHECKOUT
			</CartModalCTAStyled>
		</CartModalStyled>
	);
};

export default CartModal;