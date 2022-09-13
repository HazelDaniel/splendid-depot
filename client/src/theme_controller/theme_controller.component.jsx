import {ThemeControllerStyled, ThemeControllerSwitchStyled} from "./theme_controller.styles";
import {useRef} from "react";
import {__toggleTheme} from "../reducers/theme.reducer";


export const ThemeController = ({themeStore}) =>{
	const toggler = useRef(null);
	return (
		<ThemeControllerStyled onClick={()=> {
			themeStore.themeStateDispatch(__toggleTheme());
			if(themeStore.themeState.isLightTheme){
				toggler.current.style.left = `0`;
				toggler.current.style.right = ``;
			}else{
				toggler.current.style.right = `0`;
				toggler.current.style.left = ``;
			}
		}}>
			<ThemeControllerSwitchStyled ref={toggler}/>
		</ThemeControllerStyled>
	)
}

export default ThemeController;