
const checkAndAddITem = (state, item) => {
	const itemExists = Boolean(state.carts.find((cart) => cart.id === item.id));

	console.log(item,state.carts,itemExists);
	if (itemExists) {
		// console.log(itemExists.quantity);
		// console.log(state.carts,state.carts.filter((cart) => cart.id !== itemExists.id));
		console.log("does exist")
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

export default checkAndAddITem;