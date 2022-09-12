import styled, {css} from "styled-components";
import {
	makeAbsoluteTopDiv,
	makeColFlexCenter,
	makeColFlexStart,
	makeFullSizeBlock, makeFullWidthBlock
} from "../styles/root/functions.styles";
import {colors} from "../styles/root/variables.styles";

const _useConditionalMediaQuery = ({$size})=>{
	if($size === `big`) return css`
      @media only screen and (max-width: 860px) {
        grid-column: 1 / span 12;
      }
	`;
}


export const CategoriesStyled = styled.div`
  width: 85%;
  height: max-content;
  min-height: inherit;
  margin: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(40rem, 1fr);

  @media only screen and (max-width: 860px) {
    min-height: 100vh;
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const CategoryStyled = styled.div`
  position: relative;
  overflow: hidden;
  ${makeColFlexCenter};

  &:nth-of-type(1) {
    grid-column: 1 / span 4;


    @media only screen and (max-width: 860px) {
      grid-column: 1 / span 6;
    }

    @media only screen and (max-width: 550px) {
      grid-column: span 8;
      order: 6;
      left: 25%;
    }

    @media only screen and (max-width: 450px) {
      grid-column: span 12;
      left: 0;
    }
  }

  &:nth-of-type(2) {
    grid-column: 5 / span 4;

    @media only screen and (max-width: 860px) {
      grid-column: span 6;
    }

    @media only screen and (max-width: 550px) {
      grid-column: span 8;
      left: 25%;
    }

    @media only screen and (max-width: 450px) {
      grid-column: span 12;
      left: 0;
    }

  }

  &:nth-of-type(3) {
    grid-column: 9 / span 4;

    @media only screen and (max-width: 860px) {
      order: 5;
      grid-column: 1 / span 6;
    }

    @media only screen and (max-width: 550px) {
      grid-column: span 8;
      left: 25%;
    }

    @media only screen and (max-width: 450px) {
      grid-column: span 12;
      left: 0;
    }
  }

  &:nth-of-type(4) {
    grid-column: 1 / span 6;
  }

  &:nth-of-type(5) {
    grid-column: 7 / span 6;
  }

  ${_useConditionalMediaQuery};

  .cover-image {
	${makeAbsoluteTopDiv};
	${makeFullSizeBlock};
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: center;

    &::before {
	${makeAbsoluteTopDiv};
      top: 50%;
      left: 50%;
      height: 0;
      width: 0;
      // transition: all .2s ease-in-out;
    }

    &:hover {
      transform: scale(1.2);
      transition: all 5s ease-in-out;

      &::before {
        top: 0;
        left: 0;
	  ${makeFullSizeBlock};
        background-color: ${({theme})=>{
			return theme.$checkoutModalShadowColor;
        }};
        transition: all .2s ease-in-out;
      }
    }
  }

  .content {
    position: relative;
    height: 12rem;
    width: 15rem;
    background-color: ${({theme})=>{
      return theme.$blurColor;
    }};
    backdrop-filter: blur(.5rem);
    border: .2rem solid transparent;
    border-radius: .2rem;
    padding: .4rem .2rem;
    ${makeColFlexStart};

    .title {
      font-size: 2rem;
      height: 50%;
	${makeColFlexCenter};
      color: ${({theme})=>{
        return theme.$authPrimaryCTAColor;
      }};
    }

    .content-cta {
    ${makeFullWidthBlock};
	${makeColFlexCenter};
      height: 50%;
      justify-self: flex-end;
      border: none;

      &:hover {
        background-color: ${({theme})=>{
          return theme.$darkCTABackgroundColor;
        }};
        color: ${({theme})=>{
          return theme.$lightCTATextColor;
        }};
        transition: all .2s ease-in;
      }
    }
  }
`;