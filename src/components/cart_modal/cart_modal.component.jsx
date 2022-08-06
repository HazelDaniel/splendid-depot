import React from "react";

// COMPONENTS
import "./cart_modal.styles.scss";

// MISC


// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { cartSelector } from "../../redux/store";

const publicUrl = window.location.origin;

const CartModal = ({ cart }) => {
	console.log(cart)
	return (
		<div className={`cart-modal ${cart.cartVisible? "" : 'hidden'}`}>
			<div className="cart-cancel-btn-div">
				<button>X</button>
			</div>
			<div className="cart-items-body">
				<div className="cart-item">
					<img src={`${publicUrl}/images/istockphoto-478386093-612x612.jpg`} alt=""></img>
					<div className="cart-item-details">
						<p className="item-name">Hugo Hats</p>
						<p className="item-quantity"> 1 x $100</p>
					</div>
				</div>
				<div className="cart-item">
					<img src={`${publicUrl}/images/istockphoto-1305253946-612x612.jpg`} alt=""></img>
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
	);
}

const mapStateToProps = createStructuredSelector({
	cart: cartSelector
});

export default connect(mapStateToProps)(CartModal);

