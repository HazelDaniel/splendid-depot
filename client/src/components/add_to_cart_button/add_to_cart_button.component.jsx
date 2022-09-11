import React, {useContext} from "react";
import {cartContext} from "../../App";
import {AddToCartButtonStyled} from "./add_to_cart_button.styles";
import {__addToCart} from "../../reducers/cart.reducer";


const AddToCartButton = ({item})=>{
	const {clientCartDispatch} = useContext(cartContext);
	return <AddToCartButtonStyled
		onClick={() => {
			clientCartDispatch(__addToCart(item));
		}}
	>
		ADD TO CART
	</AddToCartButtonStyled>
}

export default AddToCartButton;