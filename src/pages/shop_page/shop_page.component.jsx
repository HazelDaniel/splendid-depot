import React from "react";
import "./shop_page.styles.scss";

import CollectionPreview from "../../components/collection_preview/collection_preview.component";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

// REDUX
import { collectionsSelector } from "../../redux/store";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// FIREBASE
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { DB, getCollectionsMap } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.slice";

class ShopPage extends React.Component {
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
		const {updateCollections} = this.props;
		const collectionRef = collection(DB, "collections");
		onSnapshot(collectionRef, async () => {
			// console.log("snapshot changed");
			const collections = await getCollectionsMap(collectionRef);
			updateCollections(collections);
		});
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
