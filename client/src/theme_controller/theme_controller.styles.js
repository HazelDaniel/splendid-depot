import styled from "styled-components";
import {makeAbsoluteTopDiv} from "../components/styles/root/functions.styles";

export const ThemeControllerStyled = styled.div`
  width: 5rem;
  height: 2.5rem;
  position: fixed;
  top: 50%;
  left: 2rem;
  border-radius: 4rem;
  z-index: 4;
  outline: .2rem solid ${({theme})=> {
    return theme.$cartModalBorderColor
  }};
    box-shadow: inset .2rem .3rem .6rem ${({theme})=> {
        return theme.$blurColor
    }};
    backdrop-filter: blur(2rem);
`;
export const ThemeControllerSwitchStyled = styled.span`
  ${makeAbsoluteTopDiv};
  right: 0;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  scale: .9;
  transition: all .5s ease-out;
  background-color: ${({theme})=> {
    return theme.$accentColor
  }};
    border: .1rem solid ${({theme})=> {
        return theme.$BodyColor
    }};
`;