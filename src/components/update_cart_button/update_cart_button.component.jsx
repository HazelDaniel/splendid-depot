
import { __uploadCart } from "../../App.utils";
import { UpdateCartButtonStyled } from "./update_cart_button.styles";

export const UpdateCartButton = ({clientCartDispatch,clientCartState,$showDisabled}) => {
	return (
		<UpdateCartButtonStyled disabled={$showDisabled} $showDisabled ={$showDisabled} onClick={() => {
					clientCartDispatch(__uploadCart(clientCartState));
		}}
		>UPDATE CART</UpdateCartButtonStyled>
	)
}
export default UpdateCartButton;