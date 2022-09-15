import React, { useCallback, useContext, useEffect } from "react";
import UpdateCartButton from "../../components/update_cart_button/update_cart_button.component";

// COMPONENTS
import CheckoutItem from "../../components/checkout_item/checkout_item.component";
import StripeButton from "../../components/stripe_button/stripe_button.component";

//GLOBAL STATE
import { cartContext, userContext } from "../../App";
import { DB } from "../../firebase/firebase.utils";

import { currentDBcart, __stopCartUpload } from "../../reducers/cart.reducer";
import { doc, updateDoc } from "firebase/firestore";
import {
	CheckoutBodyStyled,
	CheckoutFooterStyled,
	CheckoutTitleDivStyled,
	CheckoutTitlesStyled,
	CheckoutTitleStyled, CheckoutWrapperStyled
} from "./checkout_page.styles";
import {PlaceholderVector} from "../../components/placeholder/placeholder.component";
import {PlaceholderText} from "../../components/placeholder_text/placeholder_text.component";
import {toast} from "react-toastify";

const cartPricesTotal = (carts) => {
	// console.log(carts);
	const total = carts
		.map((cart) => {
			return +cart.quantity * +cart.price;
		})
		.reduce((prev, next) => {
			return prev + next;
		}, 0);
	return total.toFixed(2);
};

export const CheckoutPage = () => {
	const { clientCartState, clientCartDispatch } = useContext(cartContext);
	const { currentUser } = useContext(userContext);
	const computedPricesTotal = useCallback(() => cartPricesTotal(clientCartState.carts), [clientCartState]);

	useEffect(() => {
		if (!clientCartState.shouldCartUpload) return;
		const uploadCartToDB = async () => {
			const { id, currentUser: user, ...otherProps } = currentUser;
			// console.log(id)
			const { carts } = clientCartState;
			const data = {
				...otherProps,
				carts,
			};
			const userRef = doc(DB, "users", id);
			// console.log("UPLOADING CART TO DB ...");

			await updateDoc(userRef, data);
			currentDBcart.carts = carts;
			toast.success("cart updated successfully");
			clientCartDispatch(__stopCartUpload());
		};
		uploadCartToDB();
	}, [clientCartState, currentUser, clientCartDispatch]);

	// console.log(clientCartState);
	return (
		<CheckoutWrapperStyled >
			<CheckoutBodyStyled >
				<CheckoutTitleDivStyled >
					<CheckoutTitlesStyled>
						<CheckoutTitleStyled >Product</CheckoutTitleStyled>
						<CheckoutTitleStyled>Description</CheckoutTitleStyled>
						<CheckoutTitleStyled>Quantity</CheckoutTitleStyled>
						<CheckoutTitleStyled>Price</CheckoutTitleStyled>
						<CheckoutTitleStyled>Remove</CheckoutTitleStyled>
					</CheckoutTitlesStyled>
				</CheckoutTitleDivStyled>
				{clientCartState.carts.length === 0? <PlaceholderText $variant={`L`} message={`no items added yet !`}/>:null}
				{ clientCartState.carts.map((cart) => {
					return <CheckoutItem key={cart.id} cart={cart} />;
				})}
			</CheckoutBodyStyled>
			<CheckoutFooterStyled >
				<p className="checkout-summary-text">TOTAL: ${computedPricesTotal()}</p>

				<StripeButton price={computedPricesTotal()} />
				<UpdateCartButton clientCartDispatch={clientCartDispatch} clientCartState={clientCartState} $showDisabled={clientCartState.shouldCartUpload} />
			</CheckoutFooterStyled>

			<p className="checkout-text-warning">
				Please use the following details for your test payment info: <br />
				**card number: 5555 5555 5555 4444 **exp: any future date **cvv: 000
			</p>
		</CheckoutWrapperStyled>
	);
};

export default CheckoutPage;
