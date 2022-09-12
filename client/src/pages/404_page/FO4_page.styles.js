import styled from "styled-components";
import {
	makeColFlexCenter,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeRowFlexCenter
} from "../../components/styles/root/functions.styles";
import {colors} from "../../components/styles/root/variables.styles";


export const FO4WrapperStyled = styled.div`
  ${makeFullSizeBlock};
  position: fixed;
  overflow: hidden;
  height: 100vh;
  top: 0;
  ${makeColFlexCenter};

  .F04-div {
    height: 50%;
    ${makeFullWidthBlock};
    ${makeRowFlexCenter};
    overflow: hidden;

    svg {
      height: 100%;
      transform: scale(2);
    }
  }

  .F04-message {
    ${makeFullWidthBlock};
    text-align: center;
    height: max-content;
    font-size: 2rem;
    font-weight: 900;
    color: ${({theme})=>{
      return theme.$accentColor;
    }};

  }
`;