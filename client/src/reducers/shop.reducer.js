// APP REDUCER
const shopActionTypes = {
	updateCollections: "UPDATE_COLLECTIONS",
};

export const initialShopState = {
	collections: null,
};
// REDUCER HELPERS
const updateCollections = (state, collections) => {
	return {
		...state,
		collections,
	};
};
// REDUCER
export const shopReducer = (state = initialShopState, action) => {
	switch (action.type) {
		case shopActionTypes.updateCollections:
			return updateCollections(state,action.payload);
		default:
			return state;
	}
};

// ACTIONS
export const __updateCollections = (payload) => {
	return {
		type: shopActionTypes.updateCollections,
		payload,
	};
};


// SELECTORS

export const URLDeducedCollectionSelector = (parameter) => (state) => state.collections ? state.collections[parameter] : null;