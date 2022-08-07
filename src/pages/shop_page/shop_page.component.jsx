
import React from "react";
import "./shop_page.styles.scss";


import CollectionPreview from "../../components/collection_preview/collection_preview.component";


import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

// REDUX
import { collectionsSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
const  ShopPage = props=> {
	const { collections } = props;
	return (
		<div className="collection-container">

			{collections.map(({ id, ...otherProps }) => (
				<CollectionPreview key={id} {...otherProps} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: collectionsSelector
})

export default connect(mapStateToProps)(withRouter(ShopPage));
