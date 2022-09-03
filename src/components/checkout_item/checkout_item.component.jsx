import "./checkout_item.styles.scss";

//REDUX
import { useContext } from "react";
import { cartContext } from "../../App";
import { __addToCart, __clearFromCart, __removeFromCart } from "../../App.utils";

const CheckoutItem = ({cart}) => {
	const { clientCartDispatch } = useContext(cartContext);
	return (
		<li className="checkout-content-div">
			<img src={cart.imageUrl} alt=""></img>
			<p className="checkout-description-text">{cart.name}</p>
			<div className="checkout-QTY-cta">
				<button onClick={() => clientCartDispatch(__removeFromCart(cart))}>{"<"}</button>
				<span>{cart.quantity}</span>
				<button onClick={() => clientCartDispatch(__addToCart(cart))}>{">"}</button>
			</div>
			<p className="checkout-price-text">${cart.price}</p>
			<button className="checkout-remove-icon" onClick={() => clientCartDispatch(__clearFromCart(cart))}>
				&times;
			</button>
		</li>
	);
}

export default CheckoutItem;