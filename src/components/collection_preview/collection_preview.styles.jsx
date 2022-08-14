import styled, { css } from "styled-components";
import { makeAbsoluteBottomDiv, makeFullWidthBlock, makeRowFlexCenter } from "../styles/root/functions.styles";
import { _variables } from "../styles/root/variables.styles";
import { colors } from "../styles/root/variables.styles";

export const COLLECTION_TITLE_DIV = styled.div`
	${_variables}
	${makeFullWidthBlock}
	${makeRowFlexCenter}
	margin-bottom: 4rem;
	height: 5rem;
	margin-top: ${(props) => (props.$isCurrent ? "10rem" : "5rem")};

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
			height: 0.4rem;
			width: 50%;
			background-color: ${(props) => (props.$isCurrent ? colors.$accentColor : "none")};
		}
	}
`;

export const COLLECTION_BODY = styled.div`
	${makeFullWidthBlock}
	padding: 0 12rem;

	@media only screen and (max-width: 640px) {
		padding: 0 10rem;
	}

	padding-right: 10rem;

	@media only screen and (max-width: 640px) {
		padding: 0 8rem;
		padding-right: 5rem;
	}

	padding-top: 5rem;

	@media only screen and (max-width: 570px) {
		padding: 0 6rem;
		padding-right: 2.5rem;
	}

	${makeRowFlexCenter}
	flex-basis: 17rem;

	@media only screen and (max-width: 550px) {
		flex-basis: 22.5rem;
	}

	flex-wrap: wrap;
	height: max-content;
`;


