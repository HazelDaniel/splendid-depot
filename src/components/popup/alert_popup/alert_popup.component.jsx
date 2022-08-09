import React from "react";
import "./alert_popup.styles.scss";

const AlertPopup = ({ alertMessage, alertClass }) => {
	return (
		<div className={`${alertClass} alert-popup`}>
			<p className="popup-text">
				{alertMessage}
			</p>
		</div>
	);
}

export default AlertPopup;