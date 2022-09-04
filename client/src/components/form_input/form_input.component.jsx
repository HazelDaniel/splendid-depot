import "./form_input.styles.scss";

export const FormInput = ({ handleChange, ...otherProps }) => {
	return (
		<input className="form-input" {...otherProps} onChange={handleChange} />
	)
};
