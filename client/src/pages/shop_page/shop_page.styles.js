import styled from "styled-components";
import {makeColFlexStart, makeFullWidthBlock} from "../../components/styles/root/functions.styles";


export const ShopContainerStyled = styled.div`
  margin-top: 6rem;
  ${makeFullWidthBlock};
  padding: 0 3rem 6rem;
  position: relative;

  @media only screen and (max-width: 550px) {
    padding: 0 3rem 4rem;
  }
  ${makeColFlexStart};

`;