import styled from "styled-components";
import {makeFullWidthBlock} from "../styles/root/functions.styles";

export const PlaceholderTextStyled = styled.p`
	font-size: ${({$variant})=>{
      switch($variant){
        case `S`:
          return `2rem`;
        case `M`:
          return `3rem`;
        case `L`:
          return `5rem`;
        case `XL`:
          return `6rem`;
      }
	}};
  ${makeFullWidthBlock};
  justify-self: center;
  text-align: center;
  height: max-content;
  padding: 2rem;
  color: ${({theme})=>{
    return theme.$accentColor;
  }};
  margin: 15% 0;
`;