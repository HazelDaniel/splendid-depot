import styled,{css} from "styled-components";
import { makeFlexCenter, makeAbsoluteBottomDiv, makeAbsoluteDiv, makeRowFlexEnd, makeFullHeightBlock, makeRowFlex, makeFullWidthBlock } from "../styles/root/functions.styles";

const _useConditionalActiveStyles = ({$isActive})=>{
	if($isActive) {
		return css`
          &::before {
            ${makeAbsoluteBottomDiv};
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: ${({theme})=>{
              return theme.$accentColor;
            }};
            left: 35%;
            bottom: -1rem;
          }
		`;
	}
}
export const HEADER = styled.header`
	${makeFullWidthBlock}
	${makeRowFlex}
	align-items: flex-start;
	justify-content: space-between;
	height: 11rem;
	padding-top: 3rem;
	position: fixed;
	z-index: 2;
  top: 0;
	// margin-bottom: 2rem;
	transition: background-color ease-in .7s;

	.logo-div {
		${makeFullHeightBlock};
		margin: 1rem 2rem;

		@media only screen and (max-width: 860px) {
			height: 80%;
		}

		svg {
			height: 60%;
		}
	}
 
`;

export const HeaderNavStyled = styled.nav`
	width: 85%;
	${makeFullHeightBlock}
	${makeFlexCenter}
	justify-content: flex-end;
	padding-right: 5rem;
	
	@media only screen and (max-width: 860px) {
		grid-column: span 12;
		left: 0;
	}
	
	li,
	svg {
		cursor: pointer;
	}
 
	
	.shopping-icon-div {
		height: 60%;
		justify-self: center;
		position: relative;
	
		@media only screen and (max-width: 860px) {
			height: 40%;
		}
	
		svg {
			height: 100%;
	
			path {
				fill:${({theme})=>{
					return theme.$homeNavTextColor;
				}};
			}
		}
	
		span {
			${makeAbsoluteDiv};
			top: -15%;
			left: 40%;
			font-weight: 700;
			font-size: 1.2rem;
			color: ${({theme})=>{
				return theme.$homeNavTextColor;
			}};
	
			@media only screen and (max-width: 860px) {
				top: -30%;
			}
		}
}
`;

export const HeaderNavListsStyled = styled.ul`
  width: 80%;
  height: inherit;
  ${makeRowFlexEnd};
  align-items: center;
  list-style-type: none;
  padding-right: 15rem;

  @media only screen and (max-width: 860px) {
    padding-right: 5rem;
  }

  @media only screen and (max-width: 550px) {
    padding-right: 0;
  }
  
`;

export const HeaderNavTextStyled = styled.li`
  font-size: 2.5rem;
  position: relative;

  @media only screen and (max-width: 860px) {
    font-size: 2rem;
  }

  color:${({theme})=>{
    return theme.$homeNavTextColor;
  }};
  margin-right: 4rem;

  @media only screen and (max-width: 450px) {
    margin-right: 2rem;
  }

  ${_useConditionalActiveStyles};
`;
