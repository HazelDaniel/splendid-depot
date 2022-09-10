import isEqual from "lodash.isequal";
import React from "react";
import "./alert_popup.styles";
import {AlertPopupStyled} from "./alert_popup.styles";

const AlertPopup = React.memo(({ alertMessage, alertClass }) => {
	return (
		<AlertPopupStyled $alertClass = {alertClass}>
			<p>{alertMessage}</p>
		</AlertPopupStyled>
	);
}, (prev, next) => {
	if (isEqual(prev,next)) return true;
	return false;
});

export default AlertPopup;