import styled from "styled-components";
import {makeFullWidthBlock} from "../styles/root/functions.styles";
import {colors} from "../styles/root/variables.styles";


export const FormInputStyled = styled.input`
  height: 5rem;
  ${makeFullWidthBlock};

  &:focus {
    &::placeholder {
    @include makeFullWidthBlock();
      all: unset;
      color: ${({theme})=>{
        return theme.$authTextColor;
      }};
      transform: translate(-4%, -60%) scale(.9);
      transition: transform .2s ease-in;
      left: 0;
    }
  }
    color: ${({theme})=>{
        return theme.$darkTextColor
    }}
`;