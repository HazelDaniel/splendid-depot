import styled, {css, keyframes} from "styled-components";
import {
	makeAbsoluteTopRightDiv,
	makeColFlexStart,
	makeFlexCenter,
	makeFullWidthBlock
} from "../styles/root/functions.styles";
import {colors} from "../styles/root/variables.styles";

export const _gooeyVibrate = keyframes`
  15%,
  40%,
  75%,
  100% {
    transform-origin: center center;
  }

  15% {
    transform: scale(1.1, 1.05);
  }

  40% {
    transform: scale(0.95, 0.95);
  }

  75% {
    transform: scale(1.05, 1);
  }

  100% {
    transform: scale(1, 1);
  }
`;
export const _removeScrollBar = css`
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CartModalStyled = styled.div`
  ${makeAbsoluteTopRightDiv};
  position: fixed;
  overflow: hidden;
  height: 45rem;
  width: 30rem;
  top: 11rem;
  right: 4rem;
  z-index: 2;
  ${makeColFlexStart};
  background-color: ${({theme})=>{
    return theme.$lightBGColor;
  }};
  padding: 1rem;
  border: .1rem solid ${({theme})=>{
    return theme.$cartModalBorderColor;
  }};
  box-shadow: -.5rem .5rem 1rem ${({theme})=>{
    return theme.$checkoutCTAShadowColor;
  }};
  transform: perspective(10cm) rotate(10deg, -10deg);
  animation: ${_gooeyVibrate} 300ms ease-in-out;

`;

export const CartCancelButtonStyled = styled.div`
  ${makeFullWidthBlock};
  ${makeFlexCenter};
  height: 3rem;
  justify-content: flex-end;

  button {
    border: none;
    font-size: 3.5rem;
    width: 3rem;
    font-weight: lighter;
    color: ${({theme})=>{
      return theme.$homeNavTextColor;
    }};
    background-color: transparent;
    cursor: pointer;
  }
`;

export const CartItemsBodyStyled = styled.div`
	max-height: 75%;
	height: 75%;
	${makeFullWidthBlock};
	padding: 1rem;
	overflow-y: auto;
	${_removeScrollBar};
 
`;
export const CartModalCTAStyled = styled.button`
  justify-self: flex-end;
  height: 4rem;
  transform: translateY(50%);
  width: 80%;
  background-color: ${({theme})=>{
    return theme.$authPrimaryCTAColor;
  }};
  border: .1rem solid ${({theme})=>{
    return theme.$cartModalBorderColor;
  }};
  cursor: pointer;
  color: ${({theme})=>{
    return theme.$darkCTABackgroundColor;
  }};

  &:hover {
    color: ${({theme})=>{
      return theme.$authPrimaryCTAColor;
    }};
    background-color: ${({theme})=>{
      return theme.$darkCTABackgroundColor;
    }};
  }
`;