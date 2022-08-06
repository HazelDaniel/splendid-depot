import React from "react";
import "./checkout_page.styles.scss";

import { publicUrl } from "../../utils";


import { CardIcon } from "../../assets/icons/card_icon/card_icon.component";
import CheckoutItem from "../../components/checkout_item/checkout_item.component";
// import CartModal from "../../components/cart_modal/cart_modal.component";
//REDUX
import { cartSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
// import { cartItemsTotalSelector } from "../../redux/store";




export const CheckoutPage = ({ cart }) => (
	<div className="checkout-wrapper">
		<ul className="checkout-body">
			<li className="checkout-title-div">
				<ul className="checkout-titles">
					<li className="checkout-title">Product</li>
					<li className="checkout-title">Description</li>
					<li className="checkout-title">Quantity</li>
					<li className="checkout-title">Price</li>
					<li className="checkout-title">Remove</li>
				</ul>
			</li>
			{cart.carts.map((cart) => {
				return <CheckoutItem key={cart.id} cart={cart} />;
			})}
		</ul>
		<div className="checkout-footer">
			<p className="checkout-summary-text">TOTAL: $159</p>
			<button className="checkout-cta-btn">
				PAY WITH
				<CardIcon />
			</button>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cart: cartSelector,
})

export default connect(mapStateToProps)(CheckoutPage);