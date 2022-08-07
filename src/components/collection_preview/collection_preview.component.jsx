import React from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { deduceCollectionFromProps } from "./collection_preview.utils";
import "./collection_preview.styles.scss";

const CollectionPreview = (props) => {
	// console.log(props.match.params);
	// console.log(props)

	if (!props.match.params.collection) {
		const { title,routeName, location, items } = props;
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
	switch (props.match.params.collection) {
		case "hats":
			return (() => {
				return deduceCollectionFromProps(collection, 0);
			})();
		case "jackets":
			return (() => {
				return deduceCollectionFromProps(collection, 1);
			})();
		case "sneakers":
			return (() => {
				return deduceCollectionFromProps(collection, 2);
			})();
		case "women":
			return (() => {
				return deduceCollectionFromProps(collection, 3);
			})();
		case "men":
			return (() => {
				return deduceCollectionFromProps(collection, 4);
			})();
		default:
			return (
				<Redirect to="/"></Redirect>
			)
	}
}
export default withRouter(CollectionPreview);