import isEqual from "lodash.isequal";
const cartActionTypes = {
	addToCart: "ADD_TO_CART",
	removeFromCart: "REMOVE_FROM_CART",
	clearFromCart: "CLEAR_FROM_CART",
	uploadCart: "UPLOAD_CART",
	emptyCart: "EMPTY_CART",
	syncCart: "SYNC_CART"
}
const checkAndAddITem = (state, item) => {
	const itemExists = !!state.carts.find((cart) => cart.id === item.id);
	if (itemExists) {
		return {
			...state,
			carts: state.carts.map((cart) => (cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart)),
		};
	} else {
		return {
			...state,
			carts: [...state.carts, { ...item, quantity: 1 }],
		};
	}
};
const checkAndRemoveItem = (state, item) => {
	const identicalItem = state.carts.find((cart) => cart.id === item.id);
	if (identicalItem.quantity === 1)
		return {
			...state,
			carts: state.carts.filter((cart) => cart.id !== item.id),
		};
	return {
		...state,
		carts: state.carts.map((cart) => (cart.id === item.id ? { ...cart, quantity: cart.quantity - 1 } : cart)),
	};
};
const clearFromCart = (state, item) => {
	return {
		...state,
		carts: state.carts.filter((cart) => cart.id !== item.id),
	};
};
const emptyCart = (state) => {
	return {
		...state,
		carts: [],
	};
};

const syncCart = (state, dbCart) => {
	console.log(dbCart)
	return {
		...state,
		carts: dbCart.carts,
	};
}

export const currentDBcart = {
	carts: [],
};
const uploadCart = (updatedClientCartState) => {
	if (isEqual(currentDBcart.carts, updatedClientCartState.carts)) throw new Error("cart is already up to date");
	console.log("UPLOADING CART TO DB",currentDBcart);
	currentDBcart.carts = updatedClientCartState.carts;
	return {
		...updatedClientCartState,
		shouldCartUpload: true,
	};
};
export const clientCartInitial = {
	carts: [],
	shouldCartUpload: false,
};

export const clientCartReducer = (state, action) => {
	switch (action.type) {
		case cartActionTypes.addToCart:
			return checkAndAddITem(state, action.payload);
		case cartActionTypes.removeFromCart:
			return checkAndRemoveItem(state, action.payload);
		case cartActionTypes.clearFromCart:
			return clearFromCart(state, action.payload);
		case cartActionTypes.uploadCart:
			return uploadCart(state);
		case cartActionTypes.emptyCart:
			return emptyCart(state);
		case cartActionTypes.syncCart:
			console.log(action.payload)
			return syncCart(state, action.payload);
		default:
			return state;
	}
};

export const __addToCart = (payload) => {
	return {
		type: cartActionTypes.addToCart,
		payload
	}
};
export const __removeFromCart = (payload) => {
	return {
		type: cartActionTypes.removeFromCart,
		payload
	}
};
export const __clearFromCart = (payload) => {
	return {
		type: cartActionTypes.clearFromCart,
		payload
	}
};
export const __uploadCart = (payload) => {
	return {
		type: cartActionTypes.uploadCart,
		payload
	}
}
export const __syncCart = (payload) => {
	return {
		type: cartActionTypes.syncCart,
		payload
	}
}
export const __emptyCart = () => {
	return {
		type: cartActionTypes.emptyCart,
	}
}