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




const CartModal = React.forwardRef(({toggleCartModal},ref) => {
	const { clientCartState } = useContext(cartContext);
	// console.log("rendering cart modal.")
	const history = useHistory();
	// console.log(history)
	return (
		<CartModalStyled ref={ref} className="cart-modal hidden">
			<CartCancelButtonStyled >
				<button onClick={toggleCartModal}>X</button>
			</CartCancelButtonStyled>
			<CartItemsBodyStyled >
				{clientCartState.carts.length === 0? <PlaceholderText $variant={`M`} message={`cart is empty !`}/>:null}
				{clientCartState.carts.map((cartItem) => (
					<CartModalItem cart={cartItem} key={cartItem.id} />
				))}
			</CartItemsBodyStyled>
			<CartModalCTAStyled
				onClick={() => {
					toggleCartModal();
					history.push(`/checkout`);
				}}
			>
				GO TO CHECKOUT
			</CartModalCTAStyled>
		</CartModalStyled>
	);
});

export default CartModal;