import React from "react";
import "./checkout_page.styles.scss";

import { publicUrl } from "../../utils";

const { CardIcon } = "../../assets/icons/card_icon/card_icon.component";

const itemImage1 = `${publicUrl}images/istockphoto-478386093-612x612.jpg`;
const itemImage2 = `${publicUrl}images/istockphoto-1305253946-612x612.jpg`;

export const CheckoutPage = (props) => (
	<div className="checkout-wrapper">
		<div className="cart-modal">
			<div className="cart-cancel-btn-div">
				<button>X</button>
			</div>
			<div className="cart-items-body">
				<div className="cart-item">
					<img src={itemImage1} alt=""></img>
					<div className="cart-item-details">
						<p className="item-name">Hugo Hats</p>
						<p className="item-quantity"> 1 x $100</p>
					</div>
				</div>
				<div className="cart-item">
					<img src={itemImage2} alt=""></img>
					<div className="cart-item-details">
						<p className="item-name">Bobby Jackets</p>
						<p className="item-quantity"> 1 x $180</p>
					</div>
				</div>
			</div>
			<button className="cart-modal-cta">GO TO CHECKOUT</button>
		</div>
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
			<li className="checkout-content-div">
				<img src={itemImage1} alt=""></img>
				<p className="checkout-description-text">Hugo Hats</p>
				<div className="checkout-QTY-cta">
					<button>{"<"}</button>
					<span>1</span>
					<button>{">"}</button>
				</div>
				<p className="checkout-price-text">$100</p>
				<button className="checkout-remove-icon">&times;</button>
			</li>
			<li className="checkout-content-div">
				<img src={itemImage2} alt=""></img>
				<p className="checkout-description-text">Bobby Jeans</p>
				<div className="checkout-QTY-cta">
					<button>{`<`}</button>
					<span>1</span>
					<button>{`>`}</button>
				</div>
				<p className="checkout-price-text">$180</p>
				<button className="checkout-remove-icon">&times;</button>
			</li>
		</ul>
		<div className="checkout-footer">
			<p className="checkout-summary-text">TOTAL: $159</p>
			<button className="checkout-cta-btn">
				PAY WITH
				<CardIcon></CardIcon>
			</button>
		</div>

	</div>
);