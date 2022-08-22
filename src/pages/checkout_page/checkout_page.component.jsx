import React from "react";
import "./checkout_page.styles.scss";



// COMPONENTS
import CheckoutItem from "../../components/checkout_item/checkout_item.component";
import StripeButton from "../../components/stripe_button/stripe_button.component";
// import CartModal from "../../components/cart_modal/cart_modal.component";
//REDUX
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { appSelector, cartSelector } from "../../redux/store";
import { cartPricesTotalSelector } from "../../redux/store";




export const CheckoutPage = ({ cart, subTotal }) => (
	<div className="checkout-wrapper">
		<ul className="checkout-body">
			<li className="checkout-title-div">
				<ul className="checkout-titles">
					<li className="checkout-title">Product</li>
					<li className="checkout-title">Description</li>
					<li className="checkout-title">Quantity</li>
					<li className="checkout-title">Price</li>
					<li className="checkout-title">Remove</li>
				</ul>
			</li>
			{/* {console.log("hello")} */}
			{cart.carts.map((cart) => {
				return <CheckoutItem key={cart.id} cart={cart} />;
			})}
		</ul>
		<div className="checkout-footer">
			<p className="checkout-summary-text">TOTAL: ${subTotal}</p>

			<StripeButton price={subTotal} />
		</div>

		<p className="checkout-text-warning">
			Please use the following details for your test payment info: <br />
			**card number: 5555 5555 5555 4444 **exp: any future date **cvv: 000
		</p>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cart: cartSelector,
	subTotal: cartPricesTotalSelector,
	app: appSelector
})


export default connect(mapStateToProps)(CheckoutPage);