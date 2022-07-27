import React from "react";
import { CollectionItem } from "../collection_item/collection_item.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const CollectionPreview = (props) => {
	// console.log(props);
	const { title, routeName, items } = props;

	return (
		<div className="collection-body">
			<div className="collection-title-div">
				<p className="collection-title"><Link to="/">{title.toUpperCase() }</Link></p>
				</div>
			{items.slice(0, 4).map(({id, ...otherProps}) => (
				<CollectionItem key={id} {...otherProps}></CollectionItem>
			))}
				</div>
);
}