import {css, default as styled} from "styled-components";
import {colors} from "../styles/root/variables.styles";
import {makeColFlexCenter} from "../styles/root/functions.styles";

const  _styledButton = css`
  height: 60%;
  text-align: center;
  margin: 1rem;
  color:${({theme})=>{
    return theme.$authPrimaryCTAColor;
  }};
  font-weight: 600;
  ${makeColFlexCenter};
  border: .1rem solid ${({theme})=>{
    return theme.$blurColor;
  }};
  @media only screen and (max-width: 680px) {
    font-size: 1.5rem;
  }
`;

export const CustomButtonStyled = styled.button`
	${_styledButton};
	background-color: ${({$group,theme})=>{
	  switch ($group){
	    case `primary`:
			return `${theme.$darkCTABackgroundColor}`;
	    case `secondary`:
			return `${theme.$authSecondaryCTAColor}`;
	  }
	}};
	width: ${({$group})=>{
	switch ($group){
	  case `primary`:
	    return `8rem`;
	  case `secondary`:
	    return `15rem`;
	}
	}};
`;