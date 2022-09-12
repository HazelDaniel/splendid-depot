import {
	CartItemDetailsStyled,
	CartModalItemImageStyled,
	CartModalItemName,
	CartModalItemStyled
} from "./cart_modal_item.styles";
import {memo} from "react";
import isEqual from "lodash.isequal";

const CartModalItem = memo(({ cart }) => {
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
},(prev,next)=>{
	if(isEqual(prev,next)) return true;
	return false;
});

export default CartModalItem;
