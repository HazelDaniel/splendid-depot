import styled from "styled-components";
import { colors } from "../styles/root/variables.styles";
import { makeAbsoluteBottomLeftDiv, makeRowFlexCenter } from "../styles/root/functions.styles";

export const UpdateCartButtonStyled = styled.button`
	${makeAbsoluteBottomLeftDiv}
	border: unset;
	background-color: ${colors.$accentColor};
	color: ${colors.$lightBGColor};
	font-size: 1rem;
	text-transform: capitalize;
	font-weight: 600;
	font-family: montserrat;
	width: 10rem;
	height: 3rem;
	${makeRowFlexCenter}
	overflow: hidden;
	margin-top: 2rem;
	cursor: pointer;
	filter: ${({ $showDisabled }) => {
		// prettier-ignore
		console.log($showDisabled);
		return $showDisabled ? `blur(0.5rem)` : `none`;
	}};
	left: 10%;
`;
