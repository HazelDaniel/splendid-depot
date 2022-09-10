import React from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";

import "./shop_collection.styles.scss";

// import { URLDeducedCollectionSelector } from "../../redux/store";
import { WithCollections } from "../../HOCs/with_collections/with_collections.component";
import { URLDeducedCollectionSelector } from "../../reducers/shop.reducer";
import isEqual from "lodash.isequal";
import Redirect from "react-router-dom/es/Redirect";

const ShopCollection = React.memo(
	({ title, routeName, items, match, location, shopSelector }) => {
		const collection = shopSelector(URLDeducedCollectionSelector(match.params.collection));
		console.log("rendering collection");

		if (match.path === `/shop`) {
			// const { title, routeName, location, items } = this.props;
			return (
				<div className="collection-preview-body">
					<div className="collection-title-div">
						<p className="collection-title">
							<Link to={`${location.pathname}/${routeName}`}>{title.toUpperCase()}</Link>
						</p>
					</div>
					{items.slice(0, 4).map(({ id, ...otherProps }) => (
						<CollectionItem key={id} id={id} {...otherProps} />
					))}
				</div>
			);
		}
		// HANDLE 404 ON SHOP COLLECTION
		if (!collection) return <Redirect to={`/FourZeroFour`} />;

		return (
			<div className="collection-body">
				<div className="collection-title-div ctd">
					<p className="collection-title">{collection.title.toUpperCase()}</p>
				</div>
				{collection.items.map(({ id, ...otherProps }) => (
					<CollectionItem key={id} id={id} {...otherProps} />
				))}
			</div>
		);
	},
	(prev, next) => {
		if (isEqual(prev, next)) return true;
		return false;
	}
);
// TODO: REMEMBER TO MEMOIZE

export default WithCollections(withRouter(ShopCollection));
