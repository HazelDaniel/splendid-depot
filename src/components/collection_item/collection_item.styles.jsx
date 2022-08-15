import styled, { css } from "styled-components";

import { colors } from "../styles/root/variables.styles";
import { makeColFlexStart, makeFullHeightBlock, makeFullWidthBlock } from "../styles/root/functions.styles";

export const COLLECTION_PREVIEW_ITEM = css`
		@media only screen and (max-width: 1003px) {
			min-width: 25rem;
		}
		@media only screen and (max-width: 550px) {
				max-width: 25rem;
			}
		&:hover {
				background-color: $lightBGColor;
				transform: scaleY(1.05) translateX(2rem) !important;
				box-shadow: .2rem .2rem 1rem $checkoutCTAShadowColor;

				@media only screen and (max-width: 680px) {
					transform: scaleY(1.02) translateX(2rem) !important;
				}

				transition: all .3s ease-in-out;
		}
	}
`;

export const COLLECTION_ITEM = styled.div`
	transform: translateX(2rem);
	width: 25%;
	min-width: 20rem;

	@media only screen and (max-width: 1082px) {
		min-width: 22rem;
	}

	@media only screen and (max-width: 860px) {
		width: 20%;
	}

	@media only screen and (max-width: 640px) {
		width: 25%;
		min-width: 22rem;
	}

	@media only screen and (max-width: 570px) {
		min-width: 20rem;
	}

	margin: 0 4rem 4rem 0;

	@media only screen and (max-width: 620px) {
		margin: 0 4rem 4rem 0;
	}

	height: 35rem;
	padding-top: 1rem;
	padding-bottom: 2rem;
	${makeColFlexStart}

	&:hover {
		background-color: ${colors.$lightBGColor};
		transform: scaleY(1.05) translateX(2rem);
		box-shadow: 0.2rem 0.2rem 1rem ${colors.$checkoutCTAShadowColor};

		@media only screen and (max-width: 680px) {
			transform: scaleY(1.02) translateX(2rem);
		}

		transition: all 0.3s ease-in-out;
	}
`;

export const ITEM_IMAGE_DIV = styled.div`
		${makeFullHeightBlock}
		height: 50%;
		background-color: ${colors.$lightBGColor};
		overflow: hidden;

		img {
			width: 100%;
			object-fit: cover;
			aspect-ratio: 1/1;
		}
`;

export const ITEMS_DETAILS_DIV = styled.div`
	.item-details-div {
		height: 50%;
		${makeFullWidthBlock}
		${makeColFlexStart}
		padding: 3rem 5rem;

		@media only screen and (max-width: 620px) {
			padding: 1.5rem 5rem;
		}

		p {
			text-align: center;
		}

		.item-name {
			text-transform: uppercase;
			font-size: 2rem;
			color: ${colors.$homeNavTextColor};
			padding-bottom: 2rem;

			@media only screen and (max-width: 680px) {
				font-size: 2.2rem;
				padding-bottom: 2.8rem;
			}

			@media only screen and (max-width: 550px) {
				font-size: 2rem;
			}
		}

		.item-price-text {
			font-size: 1.8rem;
			color: ${colors.$collectionPriceTextColor};
			padding-bottom: 3rem;
		}

		.add-to-cart-cta {
			border: none;
			height: 3.5rem;
			min-height: 3rem;
			width: 10rem;
			background-color: ${colors.$accentColor};
			font-weight: bolder;
			color: ${colors.$lightCTATextColor};
		}
	}
`;