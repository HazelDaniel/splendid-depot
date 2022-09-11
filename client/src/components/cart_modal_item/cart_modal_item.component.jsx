import {
	CartItemDetailsStyled,
	CartModalItemImageStyled,
	CartModalItemName,
	CartModalItemStyled
} from "./cart_modal_item.styles";

const CartModalItem = ({ cart }) => {
	// console.log(cart)
	return (
		<CartModalItemStyled >
			<CartModalItemImageStyled src={cart.imageUrl} alt=""/>
			<CartItemDetailsStyled >
				<CartModalItemName >{cart.name.toUpperCase()}</CartModalItemName>
				<p className="item-quantity">
					{cart.quantity} x ${cart.price}
				</p>
			</CartItemDetailsStyled>
		</CartModalItemStyled>
	);
};

export default CartModalItem;
