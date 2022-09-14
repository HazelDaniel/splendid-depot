import styled,{css} from "styled-components";
import {
	makeAbsoluteTopDiv, makeColFlexCenter,
	makeColFlexStart, makeFullHeightBlock,
	makeFullWidthBlock,
	makeRowFlex,
	makeRowFlexCenter
} from "../styles/root/functions.styles";


const _useConditionalActiveStyle = ({$isActive})=>{
	if($isActive) return css`
      border: .2rem solid #FFFFFF;
      transform: translateX(8%);
	`;
}

export const FooterStyled = styled.footer`
  ${makeColFlexStart};
  position: relative;
  background-color: ${({theme})=>{
	  return theme.$footerColor;
  }};
  padding: 0 1.5rem;

  &::before {
    ${makeAbsoluteTopDiv};
    width: 95%;
    left: 2.5%;
    right: 2.5%;
    height: 4rem;
    background-color: ${({theme})=>{
      return theme.$BodyColor;
    }};
  }
`;


export const FooterLogoDivStyled = styled.div`
  height: 5rem;
  ${makeFullWidthBlock};
  ${makeColFlexStart};
  align-items: center;
  margin-top: 8rem;

  svg {
    height: 100%;
    margin-right: auto;
    justify-self: flex-start;
    scale: .8;
  }
`;

export const FooterBrandNameStyled = styled.p`
  height: 5rem;
  ${makeFullWidthBlock};
  ${makeRowFlex};
  align-items: center;
  text-align: start;
  font-size: 2.5rem;
  font-family: Autography;
  font-weight: 600;
  color: #FFFFFF;
  padding-left: .3rem;
`;

export const FooterBottomDivStyled = styled.div`
  ${makeFullWidthBlock};
  ${makeRowFlexCenter};
  margin: 2rem 0;
  border: .2rem solid #FFFFFF;
  height: max-content;
  min-height: 30rem;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 2rem;
`;

export const FooterTabsDivStyled = styled.div`
  width: max-content;
  min-width: 15rem;
  margin: 4rem 3rem 0 0;
  height: 80%;
`;

export const FooterTabListsStyled = styled.ul`
  list-style-type: none;
  ${makeColFlexCenter};
  ${makeFullHeightBlock};
  width: inherit;
`;

export const FooterTabStyled = styled.li`
  background-color: ${({theme})=>{
    return theme.$logoOutlineColor;
  }};
  width: 20rem;
  height: 3rem;
  box-shadow: .1rem .2rem .3rem ${({theme})=>{
    return theme.$logoOutlineColor;
  }};
  font-size: 1.5rem;
  text-transform: lowercase;
  color: #FFFFFF;
  margin-bottom: 1rem;
  ${makeColFlexCenter};
  transition: transform .5s ease-out;
  ${_useConditionalActiveStyle};
  cursor: pointer;
`;

export const FooterDisplayDivStyled = styled.div`
  ${makeColFlexStart};
  width: 70%;
  padding-top: 2rem;

  p {
    ${makeFullWidthBlock};
    font-family: montserrat;
    color: ${({theme})=>{
      return theme.$footerTextColor;
    }};
  }
`;

export const FooterDisplayTitleStyled = styled.p`
  height: 4rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  font-weight: bolder;
`;

export const FooterDisplayTextStyled = styled.p`
  font-size: 1.2rem;
  padding: 0 2rem;
  text-align: center;
`;

export const FooterCopyrightStyled = styled.p`
  font-size: 1.5rem;
  text-align: center;
  ${makeFullWidthBlock};
  color: ${({theme})=>{
    return theme.$footerTextColor;
  }};
`;

