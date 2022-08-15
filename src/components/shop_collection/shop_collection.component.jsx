import React from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link, withRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";


import "./shop_collection.styles.scss";

import { connect } from "react-redux";
import { cartSelector, URLDeducedCollectionSelector } from "../../redux/store";

const isEqual = require("lodash.isequal");



class ShopCollection extends React.Component {

	render() {
		console.log("rendering shop collection");
		if (this.props.match.path === `/shop`) {
			const { title, routeName, location, items } = this.props;
			return (
				<div className="collection-preview-body">
					<div className="collection-title-div">
						<p className="collection-title">
							<Link to={`${location.pathname}${routeName}`}>{title.toUpperCase()}</Link>
						</p>
					</div>
					{items.slice(0, 4).map(({ id, ...otherProps }) => (
						<CollectionItem key={id} id={id} {...otherProps}></CollectionItem>
					))}
				</div>
			);
		}
		const { collection } = this.props;
		// HANDLE 404 ON SHOP COLLECTION
		if (!collection) return <Redirect to={`/FourZeroFour`} />;
		const { title, items } = collection;
		return (
			<div className="collection-body">
				<div className="collection-title-div ctd">
					<p className="collection-title">{title.toUpperCase()}</p>
				</div>
				{items.map(({ id, ...otherProps }) => (
					<CollectionItem key={id} id={id} {...otherProps} />
				))}
			</div>
		);
	}
	shouldComponentUpdate(nextProps) {
		if (isEqual(this.props, nextProps)) return false;
		return true;
	}
};


const mapStateToProps = (state, ownProps) => {
	return {
		collection: (() => {
			// console.log(ownProps.match.params)
			const collectionCheck = URLDeducedCollectionSelector(ownProps.match.params.collection)(state);
			const collectionExists = Boolean(collectionCheck);
			if (!collectionExists) return null;
			return collectionCheck;
		})(),
		// app: appSelector
	};
};

export default withRouter(connect(mapStateToProps)(ShopCollection));
