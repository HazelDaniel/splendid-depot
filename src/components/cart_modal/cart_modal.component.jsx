import React, { useContext } from "react";

// COMPONENTS
import "./cart_modal.styles.scss";

// MISC

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../redux/store";
import CartModalItem from "../cart_modal_item/cart_modal_item.component";
import { nanoid } from "@reduxjs/toolkit";
import { toggleCartVisibility } from "../../redux/cart/cart.slice";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { cartContext, userContext } from "../../App";



const CartModal = () => {
	const cart = useSelector(cartSelector);
	const { currentUser } = useContext(userContext);
	const { currentUser: user } = currentUser;
	const { clientCartState } = useContext(cartContext);
	// console.log("rendering cart modal.")
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
				{clientCartState.carts.map((cartItem) => (
					<CartModalItem cart={cartItem} key={nanoid()} />
				))}
			</div>
			<button
				className="cart-modal-cta"
				onClick={() => {
					toggleCartVisibility();
					if (user) {
						history.push(`/checkout`);
					} else {
						alert("you have to sign in first")
					}
				}}
			>
				GO TO CHECKOUT
			</button>
		</div>
	);
}

export default CartModal;