import React from "react";
import { withRouter } from "react-router-dom";

// COMPONENTS
import "./cart_modal.styles.scss";

// MISC

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartSelector } from "../../redux/store";
import CartModalItem from "../cart_modal_item/cart_modal_item.component";
import { nanoid } from "@reduxjs/toolkit";
import { toggleCartVisibility } from "../../redux/cart/cart.slice";

const CartModal = ({ cart, history ,toggleCartVisibility}) => {
	return (
		<div className={`cart-modal ${cart.cartVisible ? "" : "hidden"}`}>
			<div className="cart-cancel-btn-div">
				<button onClick={()=>{toggleCartVisibility()}}>X</button>
			</div>
			<div className="cart-items-body">
				{cart.carts.map((cartItem) => (
					<CartModalItem cart={cartItem} key={nanoid()} />
				))}
			</div>
			<button
				className="cart-modal-cta"
				onClick={() => {
					toggleCartVisibility()
					history.push(`/checkout`);
				}}
			>
				GO TO CHECKOUT
			</button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cart: cartSelector,
});
const mapDispatchToProps = dispatch => {
	return {
		toggleCartVisibility: () => {
			dispatch(toggleCartVisibility())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CartModal));
