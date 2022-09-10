import {css, default as styled} from "styled-components";
import {colors} from "../styles/root/variables.styles";
import {makeColFlexCenter} from "../styles/root/functions.styles";

const  _styledButton = css`
  height: 60%;
  text-align: center;
  margin: 1rem;
  color: ${colors.$lightBGColor};
  font-weight: 600;
  ${makeColFlexCenter};
  border: .1rem solid ${colors.$blurColor};
  @media only screen and (max-width: 680px) {
    font-size: 1.5rem;
  }
`;

export const CustomButtonStyled = styled.button`
	${_styledButton};
	background-color: ${({$group})=>{
	  switch ($group){
	    case `primary`:
			return `${colors.$darkTextColor}`;
	    case `secondary`:
			return `${colors.$authSecondaryCTAColor}`;
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