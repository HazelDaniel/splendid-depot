import React, { useContext } from "react";

// COMPONENTS
import "./cart_modal.styles.scss";
import CartModalItem from "../cart_modal_item/cart_modal_item.component";

// ROUTING
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// UTILS
import { nanoid } from "@reduxjs/toolkit";

// GLOBAL STATE
import { cartContext } from "../../App";




const CartModal = React.forwardRef(({toggleCartModal},ref) => {
	const { clientCartState } = useContext(cartContext);
	// console.log("rendering cart modal.")
	const history = useHistory();
	// console.log(history)
	return (
		<div ref={ref} className={`cart-modal hidden`}>
			<div className="cart-cancel-btn-div">
				<button onClick={toggleCartModal}>X</button>
			</div>
			<div className="cart-items-body">
				{clientCartState.carts.map((cartItem) => (
					<CartModalItem cart={cartItem} key={nanoid()} />
				))}
			</div>
			<button
				className="cart-modal-cta"
				onClick={() => {
					toggleCartModal();
					history.push(`/checkout`);
				}}
			>
				GO TO CHECKOUT
			</button>
		</div>
	);
});

export default CartModal;