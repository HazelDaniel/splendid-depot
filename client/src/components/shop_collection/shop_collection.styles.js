import styled, { css } from "styled-components";
import {
	makeAbsoluteBottomDiv,
	makeColFlexStart, makeFullHeightBlock,
	makeFullWidthBlock,
	makeRowFlexCenter
} from "../styles/root/functions.styles";
import { _variables } from "../styles/root/variables.styles";
import { colors } from "../styles/root/variables.styles";

const _previewMediaQuery = css`
  @media only screen and (max-width: 920px) {
    padding: 0 !important;

  }

  .collection-item {
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
`;
const _conditionallyUseMedia = ({$isPreview})=>{
	if($isPreview) return _previewMediaQuery;
};

export const CollectionTitleDivStyled = styled.div`
	${makeFullWidthBlock};
	${makeRowFlexCenter};
	margin-bottom: 4rem;
	height: 5rem;
	margin-top: ${({$isPreview}) => ($isPreview ? "5rem" : "10rem")};

	.collection-title {
		position: relative;
		font-size: 3.5rem;
		color: ${({theme})=>{
          return theme.$homeNavTextColor;
        }};
		a {
			all: inherit;
			cursor: pointer;
		}

		&::after {
			${makeAbsoluteBottomDiv};
			bottom: -30%;
			left: 25%;
			height: 0.4rem;
			width: 50%;
			background-color: ${({$isPreview,theme}) => ($isPreview ?  "none" : theme.$accentColor)};
		}
	}
`;


export const CollectionBodyStyled = styled.div`
	${makeFullWidthBlock};
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

	${makeRowFlexCenter};
	flex-basis: 17rem;

	@media only screen and (max-width: 550px) {
		flex-basis: 22.5rem;
	}

	flex-wrap: wrap;
	height: max-content;
	${_conditionallyUseMedia};
 
`;


