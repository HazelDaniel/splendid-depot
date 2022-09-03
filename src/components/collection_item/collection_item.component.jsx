import React, { useContext } from "react";

// REDUX
import { cartContext, userContext } from "../../App";
import { __addToCart } from "../../App.utils";

const isEqual = require("lodash.isequal");

const CollectionItem = React.memo(
	({ ...cartDetails }) => {
		const { clientCartDispatch } = useContext(cartContext);
		const { currentUser } = useContext(userContext);
		const { currentUser: user } = currentUser;
		// console.log(user)
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
							if (!!user) {
								clientCartDispatch(__addToCart(cartDetails));
							} else {
								// TODO: IMPLEMENT A TOAST FOR THIS FUNCTIONALITY
								alert("you have to sign in first ")
							}
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