import {default as styled} from "styled-components";
import {colors} from "../styles/root/variables.styles";
import {makeColFlexStart} from "../styles/root/functions.styles";


export const WrapperStyled = styled.div`
	padding: 0 3rem 6rem 3rem;
	background-color: ${({$bgColor,theme})=>{
		switch ($bgColor){
		  case `home-color`:
			  return `${theme.$BodyColor}`;
		  case `auth-color`:
			  return `${theme.$lightBGColor}`;
		}
	}};
	width: 100%;
	min-height: 100vh;
	height: inherit;
	${makeColFlexStart};
	overflow: hidden;
	
	@media only screen and (max-width: 550px) {
	  padding: 2rem 3rem 6rem 3rem;
	}
`;