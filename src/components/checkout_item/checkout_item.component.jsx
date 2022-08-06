import "./checkout_item.styles.scss";

//REDUX
// import { cartSelector } from "../../redux/store";
// import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { addToCart, removeFromCart ,clearFromCart} from "../../redux/cart/cart.slice";

const CheckoutItem = ({cart, removeFromCart,addToCart,clearFromCart}) => {
	return (
		<li className="checkout-content-div">
			<img src={cart.imageUrl} alt=""></img>
			<p className="checkout-description-text">{cart.name}</p>
			<div className="checkout-QTY-cta">
				<button onClick={() => removeFromCart(cart)}>{"<"}</button>
				<span>{cart.quantity}</span>
				<button onClick={() => addToCart(cart)}>{">"}</button>
			</div>
			<p className="checkout-price-text">{cart.price}</p>
			<button className="checkout-remove-icon" onClick={()=>clearFromCart(cart)}>&times;</button>
		</li>
	);
}

// const mapStateToProps = createStructuredSelector({
// 	cart: cartSelector,
// })

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: (item) => {
			dispatch(removeFromCart(item));
		},
		addToCart: (item) => {
			dispatch(addToCart(item));
		},
		clearFromCart: (item) => {
			dispatch(clearFromCart(item));
		}
	}
}
export default connect(null, mapDispatchToProps)(CheckoutItem);