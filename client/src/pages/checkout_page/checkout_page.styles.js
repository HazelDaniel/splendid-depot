import {colors} from "../../components/styles/root/variables.styles";
import {default as styled} from "styled-components";
import {css} from "styled-components";
import {
  makeAbsoluteBottomLeftDiv,
  makeAbsoluteDiv,
  makeColFlexStart, makeFullHeightBlock,
  makeFullSizeBlock,
  makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart
} from "../../components/styles/root/functions.styles";
import {default as CheckoutItem} from "../../components/checkout_item/checkout_item.component";

export const _checkoutDiv = css`
  border-bottom: .2rem solid ${({theme})=>{
      return theme.$authTextColor;
  }};
  padding: 1rem 0;
  overflow: hidden;
  
  img {
    height: 80%;
    object-fit: cover;
    aspect-ratio: 2/3;
    margin-right: 3rem;
    ${makeAbsoluteDiv};
    left: 8%;
  
    @media only screen and (max-width: 860px) {
      left: 6%;
    }
  
    @media only screen and (max-width: 620px) {
      left: 4%;
    }
  
    @media only screen and (max-width: 550px) {
      left: 2%;
    }
  }
`;

export const _cta = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CheckoutWrapperStyled = styled.div`
  margin-top: 10rem;
  @media only screen and (max-width: 550px) {
    margin-top: 15rem;
  }
  
  margin-right: 10%;
  @media only screen and (max-width: 450px) {
    margin-right: 8%;
  }
  @media only screen and (max-width: 400px) {
    margin-right: 0%;
  }
  
  padding: 3rem;
  width: 60%;
  @media only screen and (max-width: 860px) {
    width: 65%;
  }
  @media only screen and (max-width: 620px) {
    width: 70%;
  }
  @media only screen and (max-width: 550px) {
    width: 85%;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
  
  position: relative;
  height: fit-content;
  min-height: 60vh;
  font-weight: 500;
  ${makeColFlexStart};
  
  
  @media only screen and (max-width: 550px) {
    padding: 0 3rem 4rem;
  }
  
  
  .checkout-text-warning {
    color: #de1414;
    ${makeFullWidthBlock};
    text-align: center;
    font-size: 1.8rem;
    padding-top: 20%;
  }
`;

export const CheckoutFooterStyled = styled.div`
    position: relative;
    margin-top: 3rem;
    height: 8rem;
  ${makeFullWidthBlock};
  ${makeColFlexStart};
    align-items: flex-end;

    .checkout-summary-text {
      ${makeFullWidthBlock};
      text-align: end;
      font-size: 2.5rem;
      font-family: montserrat;
      font-weight: 200;
      color: ${({theme})=>{
          return theme.$homeNavTextColor;
      }};
      padding-right: 4rem;
    }

    .cart-update-btn {
      ${makeAbsoluteBottomLeftDiv};
      border: unset;
      background-color: ${({theme})=>{
          return theme.$accentColor;
      }};
      color: ${({theme})=>{
          return theme.$lightBGColor;
      }};
      font-size: 1rem;
      text-transform: capitalize;
      font-weight: 600;
      font-family: montserrat;
      width: 10rem;
      height: 3rem;
      ${makeRowFlexCenter};
      overflow: hidden;
      margin-top: 2rem;
      cursor: pointer;
      filter: blur(.5rem);
      left: 10%;
    }
`;

export const CheckoutBodyStyled = styled.ul`
  width: 100% !important;
  height: fit-content !important;
  ${makeColFlexStart};
  list-style-type: none;
  
  .checkout-div {
    ${_checkoutDiv};
  }
  
`;

export const CheckoutTitlesStyled = styled.ul`
  list-style-type: none;
  ${makeFullHeightBlock};
  ${makeRowFlexStart};
  justify-content: space-evenly;
  flex-basis: 8rem;
`;
export const CheckoutTitleStyled = styled.li`
  font-size: 2rem;
  color: ${({theme})=>{
      return theme.$homeNavTextColor;
  }};
`;
export const CheckoutTitleDivStyled = styled.li`
  ${makeFullWidthBlock}
  ${_checkoutDiv};
  height: 5rem;
`;


