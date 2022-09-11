import React, { useContext } from "react";

// REDUX
import { cartContext } from "../../App";
import { __addToCart } from "../../reducers/cart.reducer";
import {CollectionItemStyled, ItemDetailsDivStyled, ItemImageDivStyled} from "./collection_item.styles";

const isEqual = require("lodash.isequal");

const CollectionItem = React.memo(
	({ $isPreview, ...cartDetails }) => {
		console.log($isPreview)
		const { clientCartDispatch } = useContext(cartContext);
		// console.log(user)
		const { imageUrl, name, price } = cartDetails;
		return (
			<CollectionItemStyled $isPreview={$isPreview}>
				<ItemImageDivStyled >
					<img src={imageUrl} alt="" className="item-image"></img>
				</ItemImageDivStyled>
				<ItemDetailsDivStyled>
					<p className="item-name">{name}</p>
					<p className="item-price-text">${price}</p>
					<button
						className="add-to-cart-cta"
						onClick={() => {
							clientCartDispatch(__addToCart(cartDetails));
						}}
					>
						ADD TO CART
					</button>
				</ItemDetailsDivStyled>
			</CollectionItemStyled>
		);
	},
	(prev, next) => {
		if (isEqual(prev,next)) return true;
		return false;
	}
);

export default CollectionItem;