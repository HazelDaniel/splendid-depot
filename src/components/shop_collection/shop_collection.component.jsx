import React from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link, withRouter, Redirect, useRouteMatch, useLocation } from "react-router-dom/cjs/react-router-dom.min";

import "./shop_collection.styles.scss";

import { connect } from "react-redux";
import { URLDeducedCollectionSelector } from "../../redux/store";

const ShopCollection = React.memo(
	({ title, routeName, items, collection, match}) => {
		// const match = useRouteMatch();
		const location = useLocation();
		// console.log("shop collection");
		if (match.path === `/shop`) {
			// const { title, routeName, location, items } = this.props;
			return (
				<div className="collection-preview-body">
					<div className="collection-title-div">
						<p className="collection-title">
							<Link to={`${location.pathname}${routeName}`}>{title.toUpperCase()}</Link>
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
		if (prev.routeName === next.routeName) return true;
		return false;
	}
);
// TODO: REMEMBER TO MEMOIZE
const mapStateToProps = (state, ownProps) => {
	// console.log(ownProps)
	return {
		collection: (() => {
			const collectionCheck = URLDeducedCollectionSelector(ownProps.match.params.collection)(state);
			const collectionExists = Boolean(collectionCheck);
			if (!collectionExists) return null;
			return collectionCheck;
		})(),
		// app: appSelector
	};
};
export default withRouter(connect(mapStateToProps)(ShopCollection));