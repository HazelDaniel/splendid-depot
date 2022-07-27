import React from "react";

export const CollectionItem = ({ imageUrl, name, price }) => {
	return (
		<div className="collection-item">
			<div className="item-image-div">
				<img src={imageUrl} alt="" className="item-image"></img>
			</div>
			<div className="item-details-div">
				<p className="item-name">{name}</p>
				<p className="item-price-text">{price}</p>
				<button className="add-to-cart-cta">ADD TO CART</button>
			</div>
		</div>
	);
}