
import React from "react";
import "./shop_page.styles.scss";


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
