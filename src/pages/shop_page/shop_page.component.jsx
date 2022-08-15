import React from "react";
import "./shop_page.styles.scss";

import ShopCollection from "../../components/shop_collection/shop_collection.component";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

// REDUX
import { collectionsSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// FIREBASE
import { updateCollections } from "../../redux/shop/shop.slice";

const isEqual = require("lodash.isequal");

class ShopPage extends React.Component {
	render() {
		// console.log("rendering shop page")
		const { collections } = this.props;
		return (
			<div className="collection-container">
				{collections.map(({ id, ...otherProps }) => (
					<ShopCollection key={id} {...otherProps} />
				))}
			</div>
		);
	}
	shouldComponentUpdate(nextProps) {
		if (isEqual(this.props, nextProps)) return false;
		return true;
	}

}

const mapStateToProps = createStructuredSelector({
	collections: collectionsSelector,
});
const mapDispatchToProps = dispatch => {
	return {
		updateCollections: (collection) => {
			dispatch(updateCollections(collection));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ShopPage));
