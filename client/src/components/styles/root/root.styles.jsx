import { createGlobalStyle } from "styled-components";

import { _variables } from "./variables.styles";
import { colors } from "./variables.styles";

import { makeAbsoluteBottomDiv, makeColFlexStart, makeFullHeightBlock, makeFullWidthBlock, makeRowFlexCenter } from "./functions.styles";

export const global = createGlobalStyle`
	:root {
		--darkTextColor: #000000;
		--blurColor: #252525b7;
		--lightCTATextColor: #e9e9e9;
		--darkCTABackgroundColor: #000000dc;
		--logoOutlineColor: #191919;
		--homeNavTextColor: #393939;
		--BodyColor: #e5d6cb;

		// HATS PAGE
		--accentColor: #bb9d88;
		--cartModalBorderColor: #5f5f5f;
		--lightBGColor: #ffffff;
		--collectionPriceTextColor: #707070;
		--cartCTAColor: #e0e0e0;

		// CHECKOUT PAGE
		--QTcountColor: #1e1e1e;
		--checkoutCTAIconColor: #e3d4cb;
		--checkoutCTAShadowColor: #6464647e;
		--checkoutModalTitleColor: #171717;
		--checkoutModalIconColor: #70655f;
		--checkoutModalSelectBTNColor: #363535;
		--checkoutModalPlaceholderColor: #a9a9a9;
		--checkoutModalCursorColor: #494646;
		--checkoutModalHeroColor: #e3d4cb;
		--checkoutModalShadowColor: #0a0a0a88;
		--checkoutModalOverlayColor: #000000;

		// AUTH PAGE
		--authMainTitleColor: #373737;
		--authSubtitleColor: #6c6c6c;
		--authTextColor: #808080;
		--authSecondaryCTAColor: #2f77e2;
	}
	${_variables}
	* {
	margin: 0;
	padding: 0;

	&::selection {
		background-color: transparent;
	}
}
*,
*::before,
*::after {
	box-sizing: inherit;
	font-family: openSansCondensed;

}

@mixin removeScrollBar {
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none;
	scrollbar-width: none;
}

html {
	box-sizing: border-box;
	font-size: 10px;
	@include removeScrollBar();
	height: 100%;
	width: 100%;

	@media only screen and (max-width: 860px) {
		font-size: 9px;
	}

	@media only screen and (max-width: 720px) {
		font-size: 8px;
	}

	@media only screen and (max-width: 650px) {
		font-size: 7 px;
	}
}

body {
	width: 100%;
	height: fit-content;
	min-height: 100vh;
}

.hidden {
	display: none !important;
}






.auth {
	background-color: ${colors.$lightBGColor};
}

.collection-container {
	margin-top: 6rem;
	${makeFullWidthBlock}
	padding: 0rem 3rem 6rem;
	position: relative;

	@media only screen and (max-width: 550px) {
		padding: 0rem 3rem 4rem;
	}

	${makeColFlexStart}

	.collection-title-div {
		${makeFullWidthBlock}
		${makeRowFlexCenter}
		margin-bottom: 4rem;
		height: 5rem;
		margin-top: 3rem;

		.collection-title {
			position: relative;
			font-size: 3.5rem;
			color: ${colors.$homeNavTextColor};

			a {
				all: inherit;
				cursor: pointer;
			}

			&::after {
				${makeAbsoluteBottomDiv}
				bottom: -30%;
				left: 25%;
				height: .4rem;
				width: 50%;
				background-color: ${colors.$accentColor};
			}
		}
	}

	.collection-body {
		${makeFullWidthBlock}
		// height: fit-content;
		padding: 0 12rem;
		padding-right: 10rem;

		@media only screen and (max-width: 550px) {
			padding: 0 8rem;
			padding-right: 5rem;
		}

		${makeRowFlexCenter}
		flex-basis: 30rem;

		@media only screen and (max-width: 620px) {
			flex-basis: 35rem;
		}

		@media only screen and (max-width: 550px) {
			flex-basis: 45rem;
		}

		flex-wrap: wrap;
		height: max-content;

		.collection-item {
			width: 35%;

			@media only screen and (max-width: 860px) {
				width: 35%;
			}

			@media only screen and (max-width: 620px) {
				width: 50%;
				// background-color: red;
				// left: 25%;
			}

			@media only screen and (max-width: 550px) {
				width: 100%;
			}

			margin: 0 4rem 2rem 0;

			@media only screen and (max-width: 620px) {
				margin: 0 4rem 4rem 0;
			}

			height: 45rem;
			padding-top: 2rem;
			${makeColFlexStart}

			.item-image-div {
				${makeFullHeightBlock}
				height: 55%;
				background-color: ${colors.$lightBGColor};
				overflow: hidden;

				img {
					width: 100%;
					object-fit: cover;
					aspect-ratio: 1/1;
				}

			}

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
					font-size: 2.8rem;
					color: ${colors.$homeNavTextColor};
					padding-bottom: 3rem;

					@media only screen and (max-width: 680px) {
						font-size: 2.5rem;
						padding-bottom: 2.8rem;
					}

					@media only screen and (max-width: 550px) {
						font-size: 2rem;
					}
				}

				.item-price-text {
					font-size: 2rem;
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

			&:hover {
				background-color: ${colors.$lightBGColor};
				transform: scaleY(1.05);
				box-shadow: .2rem .2rem 1rem ${colors.$checkoutCTAShadowColor};

				@media only screen and (max-width: 680px) {
					transform: scaleY(1.02);
				}

				transition: all .3s ease-in-out;
			}
		}
	}
}

`;
