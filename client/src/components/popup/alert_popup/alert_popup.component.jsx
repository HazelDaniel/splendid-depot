import isEqual from "lodash.isequal";
import React from "react";
import "./alert_popup.styles.scss";

const AlertPopup = React.memo(({ alertMessage, alertClass }) => {
	return (
		<div className={`${alertClass} alert-popup`}>
			<p className="popup-text">{alertMessage}</p>
		</div>
	);
}, (prev, next) => {
	if (isEqual(prev,next)) return true;
	return false;
});

export default AlertPopup;