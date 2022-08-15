import React from "react";

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartSelector } from "../../redux/store";
import { addToCart } from "../../redux/cart/cart.slice";
// import { nanoid } from "@reduxjs/toolkit";

const CollectionItem = ({ addToCart, cart, ...cartDetails }) => {

	// console.log(cartDetails)z
	const { imageUrl, name, price } = cartDetails;

	console.log("rendering shop collection item");
	return (
		<div className="collection-item">
			<div className="item-image-div">
				<img src={imageUrl} alt="" className="item-image"></img>
			</div>
			<div className="item-details-div">
				<p className="item-name">{name}</p>
				<p className="item-price-text">{price}</p>
				<button
					className="add-to-cart-cta"
					onClick={() => {
						addToCart(cartDetails);
					}}
				>
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cart: cartSelector,
});

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) => {
			dispatch(addToCart(item));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
