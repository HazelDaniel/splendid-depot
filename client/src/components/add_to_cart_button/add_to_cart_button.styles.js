import styled from "styled-components";
import {colors} from "../styles/root/variables.styles";

export const AddToCartButtonStyled = styled.button`
  border: none;
  height: 3.5rem;
  min-height: 3rem;
  width: 10rem;
  background-color: ${colors.$accentColor};
  font-weight: bolder;
  color: ${colors.$lightCTATextColor};
`;