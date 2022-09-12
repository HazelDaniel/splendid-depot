import {default as styled} from "styled-components";
import {
	makeAbsoluteDiv,
	makeFullWidthBlock,
	makeRowFlexCenter,
	makeRowFlexStart
} from "../styles/root/functions.styles";
import {_checkoutDiv,_cta} from "../../pages/checkout_page/checkout_page.styles";


export const CheckoutItemStyled = styled.li`
  ${_checkoutDiv};
  height: 15rem;
  ${makeFullWidthBlock};
  ${makeRowFlexStart};
  justify-content: space-around;
  font-size: 1.5rem;
  position: relative;

  .cta {
    ${_cta};
  }

  .checkout-QTY-cta {
    width: 7rem;
    ${makeRowFlexCenter};
    display: inline-flex;
    justify-content: space-evenly;
    font-size: 1.2rem;
    ${makeAbsoluteDiv};
    left: 48%;
    color: ${({theme})=>{
		return theme.$QTcountColor;
    }};

    span {
      height: 100%;
    }

    button {
      display: inline;
      height: 100%;
      ${_cta};
      font-size: 2rem;
      font-weight: 600;
      color: ${({theme})=>{
        return theme.$QTcountColor;
      }};

    }

  }

  p {

    width: 8rem;
    color: ${({theme})=>{
      return theme.$QTcountColor;
    }};
  }

  .checkout-description-text {
    ${makeAbsoluteDiv};
    left: 30%;
  }

  .checkout-price-text {
    ${makeAbsoluteDiv};
    left: 68%;

  }

  .checkout-remove-icon {
    ${makeAbsoluteDiv};
    ${_cta};
    right: 14%;
    font-size: 3rem;
    filter: drop-shadow(.1rem .1rem .2rem black);


  }
`;