
export const checkAndAddITem = (state, item) => {
	const itemExists = Boolean(state.carts.find((cart) => cart.id === item.id));

	// console.log(item,state.carts,itemExists);
	if (itemExists) {
		// console.log(itemExists.quantity);
		// console.log(state.carts,state.carts.filter((cart) => cart.id !== itemExists.id));
		// console.log("does exist")
		return {
			...state,
			carts: state.carts.map(cart=>cart.id === item.id? {...cart,quantity: cart.quantity+1}: cart)
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
	console.log('item has more than one occurrences');
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


