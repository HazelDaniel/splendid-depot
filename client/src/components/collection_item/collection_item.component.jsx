import React from "react";


//COMPONENTS AND STYLED
import {CollectionItemStyled, ItemDetailsDivStyled, ItemImageDivStyled} from "./collection_item.styles";
import AddToCartButton from "../add_to_cart_button/add_to_cart_button.component";

const isEqual = require("lodash.isequal");

const CollectionItem = React.memo(
	({ $isPreview, ...cartDetails }) => {
		const { imageUrl, name, price } = cartDetails;
		return (
			<CollectionItemStyled $isPreview={$isPreview}>
				<ItemImageDivStyled>
					<img src={imageUrl} alt="" className="item-image"></img>
				</ItemImageDivStyled>
				<ItemDetailsDivStyled>
					<p className="item-name">{name}</p>
					<p className="item-price-text">${price}</p>
					<AddToCartButton item={cartDetails} />
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