
import React from "react";
import "./shop_page.styles.scss";
import itemImage1 from "../../../src/assets/images/istockphoto-478386093-612x612.jpg";
import itemImage2 from "../../../src/assets/images/istockphoto-1305253946-612x612.jpg";
// import itemImage3 from "../../../src/assets/images/istockphoto-1087614924-612x612.jpg";
// import itemImage4 from "../../../src/assets/images/istockphoto-1333346342-612x612.jpg";
// import itemImage5 from "../../../src/assets/images/istockphoto-958976134-612x612.jpg";
// import itemImage6 from "../../../src/assets/images/istockphoto-1333346342-612x612.jpg";
// import itemImage7 from "../../../src/assets/images/istockphoto-1333346342-612x612.jpg";

import { CollectionPreview } from "../../components/collection_preview/collection_preview.component";

import { COLLECTION_DATA } from "./shop_page.data";

import { withRouter} from "react-router-dom/cjs/react-router-dom.min";
class ShopPage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			collections: COLLECTION_DATA,
		};
	}
	render() {
		
		return (
			<div className="collection-container">
				

				{this.state.collections.map(({ id, ...otherProps }) => (
					<CollectionPreview key={id} {...otherProps} />
				))}
			</div>
		);
	}
}
export default withRouter(ShopPage);
