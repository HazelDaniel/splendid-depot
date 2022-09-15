
import { useContext } from "react";
import { userContext } from "../../App";
import {  __uploadCart } from "../../reducers/cart.reducer";
import {CheckoutCTAButtonStyled} from "./update_cart_button.styles";
import {toast} from "react-toastify";

export const UpdateCartButton = ({ clientCartDispatch, clientCartState, $showDisabled }) => {
	const { currentUser: {currentUser} } = useContext(userContext);
	return (
		<CheckoutCTAButtonStyled $use="update" disabled={$showDisabled} $showDisabled ={$showDisabled} onClick={() => {
			if (!!currentUser) {
					clientCartDispatch(__uploadCart(clientCartState));
			} else {
				toast.error("could not update the cart , you have to sign in first!")
			}
		}}
		>Update Cart</CheckoutCTAButtonStyled>
	)
}
export default UpdateCartButton;