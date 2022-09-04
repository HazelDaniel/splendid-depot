
export const checkAndAddITem = (state, item) => {
	const itemExists = Boolean(state.carts.find((cart) => cart.imageUrl === item.imageUrl && cart.price === item.price && cart.name === item.name));

	if (itemExists) {

		return {
			...state,
			carts: state.carts.map(cart=> cart.imageUrl === item.imageUrl && cart.price === item.price && cart.name === item.name? {...cart,quantity: cart.quantity+1}: cart)
		};
	}
	else return {
		...state,
		carts: [...state.carts, {...item,quantity: 1}]
	}
}

export const checkAndRemoveItem = (state, item) => {
	const itemExists = state.carts.find(cart => cart.id === item.id);
	if (itemExists.quantity === 1) return {
		...state,
		carts: state.carts.filter(cart => cart.id !== item.id)
	};
	// console.log('item has more than one occurrences');
	return {
		...state,
		carts: state.carts.map(cart => cart.id === item.id ? { ...cart, quantity: cart.quantity - 1 } : cart)
	};
}

export const clearItem = (state, item) => {
	return {
		...state,
		carts: state.carts.filter((cart) => cart.id !== item.id),
	};
}


