
import React from "react";
import "./shop_page.styles.scss";


import CollectionPreview from "../../components/collection_preview/collection_preview.component";


import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

// REDUX
import { collectionsSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";


class  ShopPage extends React.Component {
	render() {
		const { collections } = this.props;
		return (
			<div className="collection-container">
				{collections.map(({ id, ...otherProps }) => (
					<CollectionPreview key={id} {...otherProps} />
				))}
			</div>
		);
	}
	componentDidMount() {
		console.log("shop page mounted");
	}
}

const mapStateToProps = createStructuredSelector({
	collections: collectionsSelector
})

export default connect(mapStateToProps)(withRouter(ShopPage));