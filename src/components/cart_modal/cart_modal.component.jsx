import React from "react";

// COMPONENTS
import "./cart_modal.styles.scss";

// MISC

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/store";
import CartModalItem from "../cart_modal_item/cart_modal_item.component";
import { nanoid } from "@reduxjs/toolkit";
import { toggleCartVisibility } from "../../redux/cart/cart.slice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const CartModal = () => {
	const cart = useSelector(cartSelector);
	// console.log(cart)
	const history = useHistory();
	const dispatch = useDispatch();
	// console.log(history)
	return (
		<div className={`cart-modal ${cart.cartVisible ? "" : "hidden"}`}>
			<div className="cart-cancel-btn-div">
				<button
					onClick={() => dispatch(toggleCartVisibility())}
				>
					X
				</button>
			</div>
			<div className="cart-items-body">
				{cart.carts.map((cartItem) => (
					<CartModalItem cart={cartItem} key={nanoid()} />
				))}
			</div>
			<button
				className="cart-modal-cta"
				onClick={() => {
					toggleCartVisibility();
					history.push(`/checkout`);
				}}
			>
				GO TO CHECKOUT
			</button>
		</div>
	);
}

export default CartModal;