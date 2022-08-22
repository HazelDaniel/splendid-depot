import "./checkout_item.styles.scss";

//REDUX
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart ,clearFromCart} from "../../redux/cart/cart.slice";

const CheckoutItem = ({cart}) => {
	const dispatch = useDispatch();
	return (
		<li className="checkout-content-div">
			<img src={cart.imageUrl} alt=""></img>
			<p className="checkout-description-text">{cart.name}</p>
			<div className="checkout-QTY-cta">
				<button onClick={() => dispatch(removeFromCart(cart))}>{"<"}</button>
				<span>{cart.quantity}</span>
				<button onClick={() => dispatch(addToCart(cart))}>{">"}</button>
			</div>
			<p className="checkout-price-text">{cart.price}</p>
			<button className="checkout-remove-icon" onClick={() => dispatch(clearFromCart(cart))}>
				&times;
			</button>
		</li>
	);
}

export default CheckoutItem;