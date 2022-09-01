import React from "react";
import "./shop_page.styles.scss";

import ShopCollection from "../../components/shop_collection/shop_collection.component";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

// REDUX
import { collectionsSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch, useSelector } from "react-redux";

// FIREBASE
import { updateCollections } from "../../redux/shop/shop.slice";

const isEqual = require("lodash.isequal");



const ShopPage = React.memo(({ collections }) => {

	return (
		<div className="collection-container">
			{collections.map(({ id, ...otherProps }) => (
				<ShopCollection key={id} {...otherProps} />
			))}
		</div>
	);
}, (prev, next) => {
	if (isEqual(prev.collections, next.collections)) return true;
	return false;
})

const mapStateToProps = createStructuredSelector({
	collections: collectionsSelector,
})

export default connect(mapStateToProps)(ShopPage);
