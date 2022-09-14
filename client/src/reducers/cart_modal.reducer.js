

const cartModalActionTypes = {
	toggleCartModal: "TOGGLE_CART_MODAL",
};

export const initialCartModalState = {
	cartModalToggled: `off`,
};

const toggledCartObject = (state)=>{
	switch (state.cartModalToggled){
		case `on`:
			return {
				cartModalToggled: `off`
			}
		case `off`:
			return {
				cartModalToggled: `on`
			}
	}
};

const toggleCartModal = (state)=>{
	return toggledCartObject(state);
};

export const cartModalReducer = (state = initialCartModalState, action)=>{
	switch (action.type){
		case cartModalActionTypes.toggleCartModal:
			return toggleCartModal(state);
	}
}

export const __toggleCartModal = ()=>{
	return {
		type: cartModalActionTypes.toggleCartModal,
	}
}