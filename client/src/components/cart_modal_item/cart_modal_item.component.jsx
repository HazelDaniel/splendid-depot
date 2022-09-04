import "./cart_modal_item.styles.scss";

const CartModalItem = ({ cart }) => {
	// console.log(cart)
	return (
		<div className="cart-item">
			<img src={cart.imageUrl} alt=""/>
			<div className="cart-item-details">
				<p className="item-name">{cart.name.toUpperCase()}</p>
				<p className="item-quantity">
					{cart.quantity} x ${cart.price}
				</p>
			</div>
		</div>
	);
};

export default CartModalItem;
