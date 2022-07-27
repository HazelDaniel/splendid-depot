
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
				<div className="cart-modal">
					<div className="cart-cancel-btn-div">
						<button>X</button>
					</div>
					<div className="cart-items-body">
						<div className="cart-item">
							<img src={itemImage1} alt=""></img>
							<div className="cart-item-details">
								<p className="item-name">Hugo Hats</p>
								<p className="item-quantity"> 1 x $100</p>
							</div>
						</div>
						<div className="cart-item">
							<img src={itemImage2} alt=""></img>
							<div className="cart-item-details">
								<p className="item-name">Bobby Jackets</p>
								<p className="item-quantity"> 1 x $180</p>
							</div>
						</div>
					</div>
					<button
						className="cart-modal-cta"
						onClick={() => {
							this.props.history.push(`/checkout`);
						}}
					>
						GO TO CHECKOUT
					</button>
				</div>
				
				{this.state.collections.map(({id, ...otherProps}) => < CollectionPreview key={id} {...otherProps}  />)}
			</div>
		);
	}
}
export default withRouter(ShopPage);
