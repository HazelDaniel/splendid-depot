import React from "react";

// COMPONENTS
import "./cart_modal.styles.scss";

// MISC


// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartSelector } from "../../redux/store";
import CartModalITem from "../cart_modal_item/cart_modal_item.component";
import { nanoid } from "@reduxjs/toolkit";



const CartModal = ({ cart }) => {
	console.log(cart.carts)
	return (
		<div className={`cart-modal ${cart.cartVisible ? "" : "hidden"}`}>
			<div className="cart-cancel-btn-div">
				<button>X</button>
			</div>
			<div className="cart-items-body">
				{cart.carts.map((cartItem) => (
					<CartModalITem cart ={cartItem} key={nanoid()} />
				))}
			</div>
			<button
				className="cart-modal-cta"
				onClick={() => {
					this.props.history.push(`/checkout`);
				}}
			>
				GO TO CHECKOUT
			</button>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cart: cartSelector
});

export default connect(mapStateToProps)(CartModal);

