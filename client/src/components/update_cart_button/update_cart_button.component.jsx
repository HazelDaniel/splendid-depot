
import { useContext } from "react";
import { userContext } from "../../App";
import {  __uploadCart } from "../../reducers/cart.reducer";
import {CheckoutCTAButtonStyled} from "./update_cart_button.styles";

export const UpdateCartButton = ({ clientCartDispatch, clientCartState, $showDisabled }) => {
	const { currentUser: {currentUser} } = useContext(userContext);
	return (
		<CheckoutCTAButtonStyled $use="update" disabled={$showDisabled} $showDisabled ={$showDisabled} onClick={() => {
			if (!!currentUser) {
				clientCartDispatch(__uploadCart(clientCartState));
			} else {
				alert("could not update cart , you were not signed in")
			}
		}}
		>Update Cart</CheckoutCTAButtonStyled>
	)
}
export default UpdateCartButton;