import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";

// UTILS
import { showAndHide } from "../../utils";


// REDUX
import { connect } from "react-redux";
import { renderPaymentPopup,unmountPaymentPopup } from "../../redux/app/app.slice";

import axios from "axios";
import { AppContext } from "../../App";
import { __renderPaymentPopup } from "../../reducers/app.reducer";
import {CheckoutCTAButtonStyled} from "../update_cart_button/update_cart_button.styles";
import {toast} from "react-toastify";






const StripeButton = ({ price }) => {
	const { appDispatch } = useContext(AppContext);
	const priceForStripe = price * 100;
	const publishableKey = `pk_test_51LUFcYATwSVQxsAFogaEa5bjZBTkmvXqlxGR1RxqCyoGT9bP3JrZB2R3pjGTrbD2v2VaJUut15U6BjsmNsJIx6pN00TkTQ6muu`;
	const onToken = token => {
		const endpoint = process.env.PORT ? process.env.PORT + "/payment" : "http://localhost:5555/payment";
		axios({
			url: `${endpoint}`,
			method: "post",
			data: {
				amount: priceForStripe,
				token
			},
			headers: {
				"Accept-Encoding": "br"
			}
		}).then(res => {
			return res.data;
		}).then(res => {
			// console.log(res);
			toast.success("payment successful",{
				position: toast.POSITION.TOP_LEFT
			})
		}).catch(err => {
			toast.error(err.message);
		})

		return token;
	}
	return (

			<StripeCheckout
				className='stripeCheckout'
			name="Splendid Depot Ltd."
			billingAddress
			shippingAddress
			image={`https://raw.githubusercontent.com/HazelDaniel/splendid-depot/21dbbaf9247ac49f5f5731dd243db3d0a06bedae/public/logo/logo.svg`}
			description={`Your total is: $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		>
			<CheckoutCTAButtonStyled $use="payment" className="checkout-cta-btn">
				Pay Now
				<span>
					<svg width="23px" height="14.374878px" viewBox="0 0 23 14.374878" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<path d="M0 0.374756L23 0.374756L23 14.3748L0 14.3748L0 0.374756Z" id="path_1" />
			<clipPath id="mask_1">
				<use xlinkHref="#path_1" />
			</clipPath>
		</defs>
		<g id="svg">
			<path
				d="M14.375 7.18746C14.375 5.59965 13.0879 4.31248 11.5001 4.31248C9.91225 4.31248 8.62508 5.59965 8.62508 7.18746C8.62508 8.77527 9.91225 10.0624 11.5001 10.0624C13.0879 10.0624 14.375 8.77527 14.375 7.18746ZM1.43761 0L21.5625 0C22.3564 0 23 0.643587 23 1.43749L23 12.9374C23 13.7313 22.3564 14.3749 21.5625 14.3749L1.43761 14.3749C0.643709 14.3749 0.00012207 13.7313 0.00012207 12.9374L0.00012207 1.43749C0.00012207 0.643588 0.643709 0 1.43761 0ZM1.43761 4.31248L1.43761 10.0624C3.02542 10.0624 4.3126 11.3496 4.3126 12.9374L18.6875 12.9374C18.6875 11.3496 19.9747 10.0624 21.5625 10.0624L21.5625 4.31248C19.9747 4.31248 18.6875 3.0253 18.6875 1.43749L4.3126 1.43749C4.3126 3.0253 3.02542 4.31248 1.43761 4.31248Z"
				id="Union"
				fill="#E3D4CB"
				fillRule="evenodd"
				stroke="none"
			/>
			<path d="M0 0.374756L23 0.374756L23 14.3748L0 14.3748L0 0.374756Z" id="Background" fill="#FFFFFF" fillOpacity="0" fillRule="evenodd" stroke="none" />
		</g>
	</svg>
				</span>
			</CheckoutCTAButtonStyled>
			</StripeCheckout>

	)
}



export default StripeButton;