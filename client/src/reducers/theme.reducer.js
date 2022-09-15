
const themeActionTypes = {
	toggleTheme: "TOGGLE_THEME"
}

const lightTheme = {
	$darkTextColor: "#000000",
	$blurColor: "#252525b7",
	$lightCTATextColor: "#e9e9e9",
	$darkCTABackgroundColor: "#000000dc",
	$logoOutlineColor: "#191919",
	$homeNavTextColor: "#393939",
	$BodyColor: "#e5d6cb",
	// hats page
	$accentColor: "#bb9d88",
	$cartModalBorderColor: "#5f5f5f",
	$lightBGColor: "#ffffff",
	$collectionPriceTextColor: "#707070",
	$cartCTAColor: "#e0e0e0",
	
	// checkout page
	$QTcountColor: "#1e1e1e",
	$checkoutCTAIconColor: "#e3d4cb",
	$checkoutCTAShadowColor: "#6464647e",
	$checkoutModalTitleColor: "#171717",
	$checkoutModalIconColor: "#70655f",
	$checkoutModalSelectBTNColor: "#363535",
	$checkoutModalPlaceholderColor: "#a9a9a9",
	$checkoutModalCursorColor: "#494646",
	$checkoutModalHeroColor: "#e3d4cb",
	$checkoutModalShadowColor: "#0a0a0a88",
	$checkoutModalOverlayColor: "#000000",
	
	// auth page
	$authMainTitleColor: "#373737",
	$authSubtitleColor: "#6c6c6c",
	$authTextColor: "#808080",
	$authSecondaryCTAColor: "#2f77e2",
	$authPrimaryCTAColor: "#ffffff",
	
	//popup messages
	$successPopupBodyColor: "#0FC13E91",
	$successPopupBorderColor: "#07FF87",
	$failurePopupBodyColor: "#C10F0FB3",
	$failurePopupBorderColor: "#FF0707",
	$popupTextColor: "#ffffff",
	// footer
	$footerTextColor: "#191919",
	$footerColor: "#bb9d88"
	
	
};

const darkTheme = {
	$darkTextColor: "#E0CDCD",
	$blurColor: "#252525b7",
	$lightCTATextColor: "#e9e9e9",
	$darkCTABackgroundColor: "#000000dc",
	$logoOutlineColor: "#191919",
	$homeNavTextColor: "#ECECEC",
	$BodyColor: "#282523",
	// hats page
	$accentColor: "#755844",
	$cartModalBorderColor: "#5f5f5f",
	$lightBGColor: "#0C0A0A",
	$collectionPriceTextColor: "#707070",
	$cartCTAColor: "#e0e0e0",
	
	
	// checkout page
	$QTcountColor: "#ffffff",
	$checkoutCTAIconColor: "#E0E0E0",
	$checkoutCTAShadowColor: "#000000",
	
	$checkoutModalTitleColor: "#171717",
	$checkoutModalIconColor: "#70655f",
	$checkoutModalSelectBTNColor: "#363535",
	$checkoutModalPlaceholderColor: "#a9a9a9",
	$checkoutModalCursorColor: "#494646",
	$checkoutModalHeroColor: "#e3d4cb",
	$checkoutModalShadowColor: "#0a0a0a88",
	$checkoutModalOverlayColor: "#000000",
	
	// auth page
	$authMainTitleColor: "#AFAFAF",
	$authSubtitleColor: "#6c6c6c",
	$authTextColor: "#808080",
	$authSecondaryCTAColor: "#2f77e2",
	$authPrimaryCTAColor: "#ffffff",
	
	//popup messages
	$successPopupBodyColor: "#0FC13E91",
	$successPopupBorderColor: "#07FF87",
	$failurePopupBodyColor: "#C10F0FB3",
	$failurePopupBorderColor: "#FF0707",
	$popupTextColor: "#ffffff",
	// footer
	$footerTextColor: "#ffffff",
	$footerColor: "#1C1A1A"
}


export const initialThemeState = {
	theme: lightTheme,
	isLightTheme: true
}

const toggledThemeObject = (state)=>{
	switch (state.isLightTheme){
		case true:
			
			return {
				theme: darkTheme,
				isLightTheme:  false
			}
		case false:
			return {
				theme: lightTheme,
				isLightTheme: true
			}
	}
}


const toggleTheme = (state)=>{
	const newTheme = {
		...state,
		...toggledThemeObject(state),
	}
	sessionStorage.setItem("themes",JSON.stringify(newTheme));
	return newTheme;
}
export const themeReducer = (state = initialThemeState, action)=>{
	switch(action.type){
		case themeActionTypes.toggleTheme:
			return toggleTheme(state);
	}
};

export const __toggleTheme = ()=>{
	return {
		type: themeActionTypes.toggleTheme,
	};
};