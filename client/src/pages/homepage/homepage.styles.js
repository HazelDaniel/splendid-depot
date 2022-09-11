import styled from "styled-components";
import {makeFlexCenter, makeFullWidthBlock} from "../../components/styles/root/functions.styles";


export const HomePageStyled = styled.div`
  margin-top: 7rem;
  ${makeFullWidthBlock};
  min-height: 75vh;
  height: fit-content;
  ${makeFlexCenter};
  justify-content: center;
`;
