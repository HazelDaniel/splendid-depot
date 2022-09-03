import React, { useCallback, useContext } from "react";
import "./checkout_page.styles.scss";
import UpdateCartButton from "../../components/update_cart_button/update_cart_button.component";



// COMPONENTS
import CheckoutItem from "../../components/checkout_item/checkout_item.component";
import StripeButton from "../../components/stripe_button/stripe_button.component";
// import CartModal from "../../components/cart_modal/cart_modal.component";

//GLOBAL STATE
import { cartContext } from "../../App";



const cartPricesTotal = (carts) => {
	console.log(carts)
	const total = carts.map((cart) => {
			return +cart.quantity * +cart.price;
		})
		.reduce((prev, next) => {
			return prev + next;
		}, 0);
	return total.toFixed(2);
};

export const CheckoutPage = ({ subTotal }) => {
	const { clientCartState , clientCartDispatch} = useContext(cartContext);
	console.log(clientCartState)
	const computedPricesTotal = useCallback(() => cartPricesTotal(clientCartState.carts), [clientCartState]);
	return (
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
				{clientCartState.carts.map((cart) => {
					return <CheckoutItem key={cart.id} cart={cart} />;
				})}
			</ul>
			<div className="checkout-footer">
				<p className="checkout-summary-text">TOTAL: ${computedPricesTotal()}</p>

				<StripeButton price={computedPricesTotal()} />
				<UpdateCartButton clientCartDispatch={clientCartDispatch} clientCartState={clientCartState} $showDisabled = {true}  />
			</div>

			<p className="checkout-text-warning">
				Please use the following details for your test payment info: <br />
				**card number: 5555 5555 5555 4444 **exp: any future date **cvv: 000
			</p>
		</div>
	);
};




export default (CheckoutPage);