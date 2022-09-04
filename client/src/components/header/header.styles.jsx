import styled from "styled-components";
import { makeFlexCenter, makeAbsoluteBottomDiv, makeAbsoluteDiv, makeRowFlexEnd, makeFullHeightBlock, makeRowFlex, makeFullWidthBlock } from "../styles/root/functions.styles";
import { colors } from "../styles/root/variables.styles";
export const HEADER = styled.header`
	${makeFullWidthBlock}
	${makeRowFlex}
	align-items: flex-start;
	justify-content: space-between;
	height: 11rem;
	padding-top: 3rem;
	position: fixed;
	z-index: 2;
	// margin-bottom: 2rem;
	transition: background-color ease-in .7s;

	.logo-div {
		${makeFullHeightBlock}
		margin: 1rem 2rem;

		@media only screen and (max-width: 860px) {
			height: 80%;
		}

		svg {
			height: 60%;
		}
	}

	.header-nav {
		width: 85%;
		${makeFullHeightBlock}
		${makeFlexCenter}
		justify-content: flex-end;
		padding-right: 5rem;

		@media only screen and (max-width: 860px) {
			grid-column: span 12;
			left: 0;
		}

		li,
		svg {
			cursor: pointer;
		}

		.header-nav-texts {
			width: 80%;
			height: inherit;
			${makeRowFlexEnd}
			align-items: center;
			list-style-type: none;
			padding-right: 15rem;

			@media only screen and (max-width: 860px) {
				padding-right: 5rem;
			}

			@media only screen and (max-width: 550px) {
				padding-right: 0;
			}

			.header-nav-text {
				font-size: 2.5rem;
				position: relative;

				@media only screen and (max-width: 860px) {
					font-size: 2rem;
				}

				color: ${colors.$homeNavTextColor};
				margin-right: 4rem;

				@media only screen and (max-width: 450px) {
					margin-right: 2rem;
				}

				&.active {
					&::before {
						${makeAbsoluteBottomDiv}
						width: 1rem;
						height: 1rem;
						border-radius: 50%;
						background-color: ${colors.$accentColor};
						left: 45%;
						bottom: -25%;
					}
				}
			}
		}

		.shopping-icon-div {
			height: 60%;
			justify-self: center;
			position: relative;

			@media only screen and (max-width: 860px) {
				height: 40%;
			}

			svg {
				height: 100%;

				path {
					fill: ${colors.$homeNavTextColor};
				}
			}

			span {
				${makeAbsoluteDiv}
				top: -15%;
				left: 40%;
				font-weight: 700;
				font-size: 1.2rem;

				@media only screen and (max-width: 860px) {
					top: -30%;
				}
			}
		}
	}
`;
