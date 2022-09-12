import styled from "styled-components";
import { colors } from "../styles/root/variables.styles";
import { makeAbsoluteBottomLeftDiv, makeRowFlexCenter } from "../styles/root/functions.styles";

export const CheckoutCTAButtonStyled = styled.button`
	${makeAbsoluteBottomLeftDiv};
	position: ${({$use})=>{
	  switch($use){
	    case `update`:
			return `absolute`;
	    case `payment`:
			return `initial`;
	  }
	}};
  border: ${({$use,theme})=>{
    switch($use){
      case `update`:
        return `.1rem solid ${theme.$checkoutModalHeroColor}`;
      case `payment`:
        return `none`;
    }
  }};
	bottom: ${({$use})=>{
	switch($use){
	  case `update`:
	    return `0`;
	  case `payment`:
	    return ``;
	}
	}};
	left: ${({$use})=>{
	switch($use){
	  case `update`:
	    return `10%`;
	  case `payment`:
	    return ``;
	}
	}};
	//border: unset;
	background-color: ${({theme})=>{
      return theme.$accentColor;
    }};
	color: ${({theme})=>{
      return theme.$authPrimaryCTAColor;
    }};
	font-size: 1.2rem;
	text-transform: capitalize;
	font-weight: 700;
	font-family: montserrat;
	width: 10rem;
	height: 3rem;
	${makeRowFlexCenter};
	overflow: hidden;
	margin-top: 2rem;
	cursor: pointer;
	filter: ${({ $showDisabled }) => {
	// prettier-ignore
	return $showDisabled ? `blur(0.5rem)` : `none`;
	}};
	box-shadow: ${({$use,theme})=>{
	switch($use){
	  case `update`:
	    return `none`;
	  case `payment`:
	    return `.1rem .2rem .4rem ${theme.$checkoutCTAShadowColor}`;
	}
	}};
	&.checkout-cta-btn{
		span {
		  height: 50%;
		  margin-left: .5rem;
		  transform: scaleY(.9);
		
		  svg {
		    height: 100%;
		  }
		}
	}
`;
