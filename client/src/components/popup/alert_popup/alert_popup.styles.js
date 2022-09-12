import {default as styled,keyframes} from "styled-components";
import {colors} from "../../styles/root/variables.styles";
import {makeAbsoluteBottomLeftDiv, makeColFlexCenter} from "../../styles/root/functions.styles";

const alertPopup = keyframes`
  0% {
    visibility: visible;
  }

  100% {
    visibility: hidden;
  }
`;
const popupUnderline = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;



export const AlertPopupStyled = styled.div`
	position: fixed;
	left: 3rem;
	top: 70%;
	width: 25rem;
	height: 4rem;
	animation-name: ${alertPopup};
	animation-duration: 2s;
	animation-play-state: running;
	animation-fill-mode: forwards;
	animation-timing-function: ease-out;
	background-color:  ${({$alertClass})=>{
	switch ($alertClass){
	  case `success-popup`:
	    return `#0fc13f23`;
	  case `failure-popup`:
	    return `#c10f0f28`;
	  default:
	    return `white`
	}
	}};
	border: .1rem solid ${({$alertClass})=>{
	switch ($alertClass){
	  case `success-popup`:
	    return `#07FF87`;
	  case `failure-popup`:
	    return `#FF0707`;
	  default:
	    return `white`
	}
	}};
	box-shadow: 0 1rem 2rem #64646467, inset 0 .5rem 1rem #ffeaea4f;
	border-top-left-radius: 3rem;
	${makeColFlexCenter};
	visibility: visible;
	
	p {
	  color: ${({theme})=>{
        return theme.$lightBGColor;
      }};
	  text-transform: uppercase;
	  font-size: 1.6rem;
	  font-weight: 700;
	}
	
	&::after {
	  ${makeAbsoluteBottomLeftDiv};
	  width: 100%;
	  height: .1rem;
	  bottom: -1rem;
	  animation-name: ${popupUnderline};
	  animation-duration: inherit;
	  animation-timing-function: inherit;
	  background-color: ${({$alertClass})=>{
        switch ($alertClass){
          case `success-popup`:
            return `green`;
          case `failure-popup`:
            return `red`;
          default:
            return `white`
        }
	  }};
	}
`;


