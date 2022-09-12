import {css, default as styled, keyframes} from "styled-components";
import {colors} from "../styles/root/variables.styles";
import {makeFullWidthBlock} from "../styles/root/functions.styles";


const _animationVars = {
	$squarew: "1.5rem",
	$squareh: "1.5rem",
	$squaremargin: ".5rem",
	$loaderw: `${parseFloat("1.5rem") * 3 + parseFloat(".5rem") *2}rem`,
	$loaderh: `${parseFloat("1.5rem") * 3 + parseFloat(".5rem") *2}rem`,
	$delayenter: "0.3s",
	$topenter: "-1rem,"
}

const _enter = keyframes`
  0% {
    opacity: 0;
    top: ${_animationVars.$topenter};
  }

  5% {
    opacity: 1;
    top: 0;
  }

  50.9% {
    opacity: 1;
    top: 0;
  }

  55.9% {
    opacity: 0;
    top: -${_animationVars.$topenter};
  }
`;
const _transition = ($value)=>css`
  -webkit-transition: ${$value};
  -moz-transition: ${$value};
  transition: ${$value};
`;
const _delay = ($delayValue) =>css`
  -webkit-animation-delay: ${$delayValue};
  -moz-animation-delay: ${$delayValue};
  animation-delay: ${$delayValue};
`;

export const LoaderStyled = styled.div`
  background-color: ${({theme})=>{
    return theme.$checkoutModalShadowColor;
  }};
  position: fixed;
  height: 100vh;
  ${makeFullWidthBlock};
  top: 0;

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: - ${_animationVars.$loaderw} / 2;
    margin-top: - ${_animationVars.$loaderh} / 2;
  }

  .square {
    background: ${({theme})=>{
      return theme.$accentColor;
    }};
    width: ${_animationVars.$squarew};
    height: ${_animationVars.$squareh};
    float: left;
    top: ${_animationVars.$topenter};
    margin-right: ${_animationVars.$squaremargin};
    margin-top: ${_animationVars.$squaremargin};
    position: relative;
    opacity: 0;
    -webkit-animation: ${_enter} 6s infinite;
    animation: ${_enter} 6s infinite;
  }

  .enter {
    top: 0;
    opacity: 1;
  }

  .square:nth-child(1) {
    ${_delay((6 * parseFloat(_animationVars.$delayenter)+`s`))};
  }

  .square:nth-child(2) {
    ${_delay((7 * parseFloat(_animationVars.$delayenter)+`s`))};
  }

  .square:nth-child(3) {
    ${_delay((8 * parseFloat(_animationVars.$delayenter)+`s`))};
    background: ${colors.$lightBGColor};
  }

  .square:nth-child(4) {
    ${_delay((3 * parseFloat(_animationVars.$delayenter)+`s`))};
  }

  .square:nth-child(5) {
    ${_delay((4 * parseFloat(_animationVars.$delayenter)+`s`))};
  }

  .square:nth-child(6) {
    ${_delay((5 * parseFloat(_animationVars.$delayenter)+`s`))};
  }


  .square:nth-child(8) {
    ${_delay((1 * parseFloat(_animationVars.$delayenter)+`s`))};
  }

  .square:nth-child(9) {
    ${_delay((2 * parseFloat(_animationVars.$delayenter)+`s`))};
  }

  .clear {
    clear: both;
  }

  .last {
    margin-right: 0;
  }
`;
