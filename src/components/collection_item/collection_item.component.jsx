import React from "react";

// REDUX
import {useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.slice";

const isEqual = require("lodash.isequal");

const CollectionItem = React.memo(
	({ ...cartDetails }) => {
		const dispatch = useDispatch();


		const { imageUrl, name, price } = cartDetails;
		return (
			<div className="collection-item">
				<div className="item-image-div">
					<img src={imageUrl} alt="" className="item-image"></img>
				</div>
				<div className="item-details-div">
					<p className="item-name">{name}</p>
					<p className="item-price-text">${price}</p>
					<button
						className="add-to-cart-cta"
						onClick={() => {
							dispatch(addToCart(cartDetails));
						}}
					>
						ADD TO CART
					</button>
				</div>
			</div>
		);
	},
	(prev, next) => {
		if (isEqual(prev,next)) return true;
		return false;
	}
);

export default CollectionItem;