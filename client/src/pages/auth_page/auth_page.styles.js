import styled from "styled-components";
import {
  makeColFlexStart,
  makeFullSizeBlock,
  makeFullWidthBlock, makeRowFlexCenter,
  makeRowFlexStart
} from "../../components/styles/root/functions.styles";
import {colors} from "../../components/styles/root/variables.styles";

export  const AuthWrapperStyled = styled.div`
  position: relative;
  height: fit-content;
  min-height: 80vh;
  font-weight: 500;
  ${makeFullWidthBlock};
  ${makeRowFlexCenter};
  flex-wrap: wrap;
  
  @media only screen and (max-width: 470px) {
    flex-direction: column;
  }
  
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 12rem;
  padding: 3rem;
  
  .SUPB {
    @media only screen and (max-width: 680px) {
      margin-left: 5rem;
    }
    
    @media only screen and (max-width: 470px) {
      ${makeFullWidthBlock};
      margin-left: 0;
    }
    height: 40rem;
    
  }
`;
export const AuthBodyStyled = styled.div`
  
  height: 30rem;
  ${makeColFlexStart};
  width: 45%;
  max-width: 35rem;
  @media only screen and (max-width: 550px) {
    width: 60%;
  }

  margin-left: 15rem;

  @media only screen and (max-width: 860px) {
    margin-left: 10rem;
  }

  @media only screen and (max-width: 680px) {
    margin-left: 7rem;
  }

  @media only screen and (max-width: 530px) {
    margin-left: 0rem;
  }

  @media only screen and (max-width: 470px) {
    ${makeFullWidthBlock};
    margin-left: 0;
    margin-bottom: 8rem;
  }

  

  input {
    outline: none;
    border: unset;
    border-bottom: .1rem solid ${({theme})=>{
      return theme.$authTextColor;
    }};
    background-color:  ${({theme})=>{
      return theme.$lightBGColor;
    }};;
  }
  

  form {
    ${makeFullWidthBlock};
    ${makeColFlexStart};
    height: fit-content;
    //height: 70%;

    .inputs-div {
      ${makeFullSizeBlock};
    }
  }
  .cta-div {
    ${makeFullWidthBlock};
    ${makeRowFlexStart};
    transform: translateY(-20%);
    height: 5rem;
    justify-content: space-between;
    justify-self: flex-end;
    margin-top: 2rem;
    
    
    //background-color: red;
  }
  overflow: hidden;
`;

export const AuthHeadingDivStyled = styled.div`
  ${makeFullWidthBlock};
  ${makeColFlexStart};
  align-items: flex-start;
  height: max-content;
  //min-height: 7rem;
  
  .title {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({theme})=>{
      return theme.$authMainTitleColor;
    }};
  }
  
  .subtitle {
    color: ${({theme})=>{
      return theme.$authSubtitleColor;
    }};
    font-size: 1.1rem;
    font-weight: 500;
    font-family: montserrat;
  }
`;
