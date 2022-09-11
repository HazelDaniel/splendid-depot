import isEqual from "lodash.isequal";
import React, {useContext} from "react";
import "./alert_popup.styles";
import {AlertPopupStyled} from "./alert_popup.styles";
import {AppContext} from "../../../App";

const AlertPopup = React.memo(({displayName}) => {
	let { appState } = useContext(AppContext);
	// console.log(appState)
	if(appState.displayWelcomeMessage){
		return (
			<AlertPopupStyled $alertClass = {`success-popup`}>
				<p>{`WELCOME ${Array.isArray(displayName) ? displayName[displayName.length - 1] : displayName}!`}</p>
			</AlertPopupStyled>
		);
	}
	if(appState.displayPaymentMessage){
		return (
			<AlertPopupStyled $alertClass = {`success-popup`}>
				<p>{`Transaction Successful!`}</p>
			</AlertPopupStyled>
		);
	}
}, (prev, next) => {
	if (isEqual(prev,next)) return true;
	return false;
});

export default AlertPopup;