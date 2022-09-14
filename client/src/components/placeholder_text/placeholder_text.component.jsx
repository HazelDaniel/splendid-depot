import {PlaceholderTextStyled} from "./placeholder_text.styles";


export const PlaceholderText = ({message,$variant})=>{
	return (
		<PlaceholderTextStyled $variant={$variant}>{message.toUpperCase()}</PlaceholderTextStyled>
	)
}