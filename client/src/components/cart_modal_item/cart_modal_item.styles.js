import styled from "styled-components";
import {
	makeFullWidthBlock,
	makeFullHeightBlock,
	makeColFlexCenter,
	makeColFlexStart, makeAbsoluteTopLeftDiv, makeRowFlexStart
} from "../styles/root/functions.styles";
import {colors} from "../styles/root/variables.styles";


export const CartModalItemStyled = styled.div`
	${makeFullWidthBlock};
	${makeRowFlexStart};
	overflow: hidden;
	height: 10rem;
	margin-bottom: 2rem;
 
	&:hover {
		background-color: #00000025;
		position: relative;
		
		&::before {
		${makeAbsoluteTopLeftDiv};
		${makeFullHeightBlock};
		  width: .2rem;
		  background-color: #00000025;
		}
	}
`;
export const CartModalItemImageStyled = styled.img`
  height: 100%;
  object-fit: cover;
  aspect-ratio: 2/3;
  margin-right: 3rem;
`;

export const CartItemDetailsStyled = styled.div`
  ${makeFullHeightBlock};
  ${makeColFlexCenter};

  p {
    color: ${({theme})=>{
      return theme.$homeNavTextColor;
    }};
  }
  
  .item-quantity {
    font-size: 1.3rem;
  }
`;

export const CartModalItemName = styled.p`
  font-size: 1.5rem;
  font-weight: bolder;
`;