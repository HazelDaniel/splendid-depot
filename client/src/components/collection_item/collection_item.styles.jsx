import styled, { css } from "styled-components";

import { colors } from "../styles/root/variables.styles";
import { makeColFlexStart, makeFullHeightBlock, makeFullWidthBlock } from "../styles/root/functions.styles";


const _baseItemStyled = css`
  transform: translateX(2rem);
  width: 25%;
  min-width: 20rem;

  @media only screen and (max-width: 1082px) {
    min-width: 22rem;
  }

  @media only screen and (max-width: 860px) {
    width: 20%;
  }

  @media only screen and (max-width: 640px) {
    width: 25%;
    min-width: 22rem;
  }

  @media only screen and (max-width: 570px) {
    min-width: 20rem;
  }

  margin: 0 4rem 4rem 0;

  @media only screen and (max-width: 620px) {
    margin: 0 4rem 4rem 0;
  }

  height: 35rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  ${makeColFlexStart};

  &:hover {
    background-color: ${({theme})=>{
      return theme.$lightBGColor;
    }};
    transform: scaleY(1.05) translateX(2rem);
    box-shadow: .2rem .2rem 1rem ${({theme})=>{
      return theme.$checkoutCTAShadowColor;
    }};

    @media only screen and (max-width: 680px) {
      transform: scaleY(1.02) translateX(2rem);
    }

    transition: all .3s ease-in-out;
  }
`;


const _useConditionalMediaQuery = ({$isPreview})=>{
	if($isPreview) return css`
	  height: 40rem;
      transform: translateX(2rem);
      min-width: 25rem;
	  margin: 2rem 2rem 2rem 0;
      @media only screen and (max-width: 1003px) {
        min-width: 25rem;
      }
      @media only screen and (max-width: 550px) {
        max-width: 25rem;
      }
      &:hover {
        background-color: ${({theme})=>{
          return theme.$lightBGColor;
        }};
        transform: scaleY(1.05) translateX(2rem) !important;
        box-shadow: .2rem .2rem 1rem ${({theme})=>{
          return theme.$checkoutCTAShadowColor;
        }};

        @media only screen and (max-width: 680px) {
          transform: scaleY(1.02) translateX(2rem) !important;
        }
        transition: all .3s ease-in-out;
      }

      padding-top: 1rem;
      padding-bottom: 2rem;
      ${makeColFlexStart};
	`;
	return _baseItemStyled;
};



export const CollectionItemStyled = styled.div`
  ${_useConditionalMediaQuery};
`;


export const ItemImageDivStyled = styled.div`
  ${makeFullHeightBlock};
  height: 50%;
  background-color: ${({theme})=>{
    return theme.$lightBGColor;
  }};
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

export const ItemDetailsDivStyled = styled.div`
  height: 50%;
  ${makeFullWidthBlock};
  ${makeColFlexStart};
  padding: 3rem 5rem;

  @media only screen and (max-width: 620px) {
    padding: 1.5rem 5rem;
  }

  p {
    text-align: center;
  }

  .item-name {
    text-transform: uppercase;
    font-size: 2rem;
    color: ${({theme})=>{
      return theme.$homeNavTextColor;
    }};
    padding-bottom: 2rem;

    @media only screen and (max-width: 680px) {
      font-size: 2.2rem;
      padding-bottom: 2.8rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 2rem;
    }
      display: -webkit-box;
      -webkit-line-clamp: 1.5;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 2rem;
  }

  .item-price-text {
    font-size: 1.8rem;
    color: ${({theme})=>{
      return theme.$collectionPriceTextColor;
    }};
    padding-bottom: 3rem;
  }
  
`;