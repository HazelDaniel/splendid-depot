import {FormInputStyled} from "./form_input.styles";


export const FormInput = ({ handleChange, ...otherProps }) => {
	return (
		<FormInputStyled {...otherProps} onChange={handleChange} />
	)
};
