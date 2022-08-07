import React from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link, withRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";


import "./collection_preview.styles.scss";

import { connect } from "react-redux";
import { URLDeducedCollectionSelector } from "../../redux/store";


const CollectionPreview = (props) => {


	if (props.match.path === `/shop`) {
		const { title, routeName, location, items } = props;
		// console.log(title, location, routeName)
		// console.log(`${location.pathname}${routeName}`)
		return (
			<div className="collection-body">
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
	const { collection } = props;

	// HANDLE 404 ON SHOP COLLECTION
	if (!collection) return (
		<Redirect to={`/`}/>
	)
	const { title, items } = collection;
	return (
		<div className="collection-body">
			<div className="collection-title-div">
				<p className="collection-title">{title.toUpperCase()}</p>
			</div>
			{items.map(({ id, ...otherProps }) => (
				<CollectionItem key={id} id={id} {...otherProps} />
			))}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		collection: (() => {
			const collectionCheck = URLDeducedCollectionSelector(ownProps.match.params.collection)(state);
			const collectionExists = Boolean(collectionCheck);
			if (!collectionExists) return null;
			return collectionCheck;
		})(),
	};
};

export default (withRouter(connect(mapStateToProps)(CollectionPreview)));
