import React, { useCallback } from "react";
import "./shop_page.styles.scss";

import ShopCollection from "../../components/shop_collection/shop_collection.component";
import { WithCollections } from "../../HOCs/with_collections/with_collections.component";
import isEqual from "lodash.isequal";




// GLOBAL STATE

const collectionsToArray = (collections) => {
	if (!collections) return [];
	const convertedCollections = Object.entries(collections).map(([key, value]) => value);
	return convertedCollections;
}


const ShopPage = React.memo(({ collections }) => {
	// console.log("shop rendering");
	const convertedCollections = useCallback(() => collectionsToArray(collections), [collections]);
	// console.log(convertedCollections(), "from shop ");	

	return (
		<div className="collection-container">
			{convertedCollections().map(({ id, ...otherProps }) => (
				<ShopCollection key={id} {...otherProps} />
			))}
		</div>
	);
}, (prev, next) => {
	if (isEqual(prev, next)) return true;
	return false;
});



export default WithCollections(ShopPage);
