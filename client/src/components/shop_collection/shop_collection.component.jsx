import React, {useContext, useMemo} from "react";
import CollectionItem from "../collection_item/collection_item.component";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";

// import "./shop_collection.styles.scss";

// import { URLDeducedCollectionSelector } from "../../redux/store";
import { WithCollections } from "../../HOCs/with_collections/with_collections.component";
import { URLDeducedCollectionSelector } from "../../reducers/shop.reducer";
import isEqual from "lodash.isequal";
import Redirect from "react-router-dom/es/Redirect";
import {CollectionBodyStyled, CollectionTitleDivStyled} from "./shop_collection.styles";
import {cartContext} from "../../App";

const ShopCollection = React.memo(
	({ title, routeName, items, match, location, shopSelector }) => {
		const collection = shopSelector(URLDeducedCollectionSelector(match.params.collection));
		

		if (match.path === `/shop`) {
			// const { title, routeName, location, items } = this.props;
			return (
				<CollectionBodyStyled $ispreview={true}>
					<CollectionTitleDivStyled $isPreview={true}>
						<p className="collection-title">
							<Link to={`${location.pathname}/${routeName}`}>{title.toUpperCase()}</Link>
						</p>
					</CollectionTitleDivStyled>
					{items.slice(0, 4).map(({ id, ...otherProps }) => (
						<CollectionItem $isPreview={true} key={id} id={id} {...otherProps} />
					))}
				</CollectionBodyStyled>
			);
		}
		// HANDLE 404 ON SHOP COLLECTION
		if (!collection) return;

		return (
			<CollectionBodyStyled $isPreview={false}>
				<CollectionTitleDivStyled isPreview={false}>
					<p className="collection-title">{collection.title.toUpperCase()}</p>
				</CollectionTitleDivStyled>
				{collection.items.map(({ id, ...otherProps }) => (
					<CollectionItem  $isPreview={false} key={id} id={id} {...otherProps} />
				))}
			</CollectionBodyStyled>
		);
	},
	(prev, next) => {
		if (isEqual(prev, next)) return true;
		return false;
	}
);
// TODO: REMEMBER TO MEMOIZE

export default WithCollections(withRouter(ShopCollection));
