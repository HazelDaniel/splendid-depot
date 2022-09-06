// APP REDUCER
const appActionTypes = {
	renderLoader: "RENDER_LOADER",
	unmountLoader: "UNMOUNT_LOADER",
	renderWelcome: "RENDER_WELCOME",
	unmountWelcome: "UNMOUNT_WELCOME",
	renderPaymentPopup: "RENDER_PAYMENT_POPUP",
	unmountPaymentPopup: "UNMOUNT_PAYMENT_POPUP",
};

export const initialAppState = {
	isLoading: true,
	displayWelcomeMessage: false,
	displayPaymentMessage: false,
};

const renderLoader = (state) => {
	return {
		...state,
		isLoading: true,
	};
};
const unmountLoader = (state) => {
	return {
		...state,
		isLoading: false,
	};
};
const renderWelcome = (state) => {
	return {
		...state,
		displayWelcomeMessage: true,
	};
};
const unmountWelcome = (state) => {
	return {
		...state,
		displayWelcomeMessage: false,
	};
};

const renderPaymentPopup = (state, status) => {
	return {
		...state,
		displayPaymentMessage: true,
		paymentStatus: status,
	};
};
const unmountPaymentPopup = (state, status) => {
	return {
		...state,
		displayPaymentMessage: false,
		paymentStatus: status,
	};
};


export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case appActionTypes.renderLoader:
			return renderLoader(state);
		case appActionTypes.unmountLoader:
			return unmountLoader(state);
		case appActionTypes.renderWelcome:
			return renderWelcome(state);
		case appActionTypes.unmountWelcome:
			return unmountWelcome(state);
		case appActionTypes.renderPaymentPopup:
			return renderPaymentPopup(state,action.payload);
		case appActionTypes.unmountPaymentPopup:
			return unmountPaymentPopup(state, action.payload);
		default:
			return state;
	}
};


export const __renderLoader = () => {
	return {
		type: appActionTypes.renderLoader,
	};
};
export const __unmountLoader = () => {
	return {
		type: appActionTypes.unmountLoader,
	};
};
export const __renderWelcome = () => {
	return {
		type: appActionTypes.renderWelcome,
	};
};
export const __unmountWelcome = () => {
	return {
		type: appActionTypes.unmountWelcome,
	};
};
export const __renderPaymentPopup = (payload) => {
	return {
		type: appActionTypes.renderPaymentPopup,
		payload,
	};
};

export const __unmountPaymentPopup = () => {
	return {
		type: appActionTypes.unmountPaymentPopup,
	};
};