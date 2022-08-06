//REDUCERS
import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";
import shopReducer from "./shop/shop.slice";

// TOOL KITS
import { createSelector } from "@reduxjs/toolkit";
import { Iterable } from "immutable";
import { configureStore, createSerializableStateInvariantMiddleware, isPlain } from "@reduxjs/toolkit";

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) => (Iterable.isIterable(value) ? value.entries() : Object.entries(value));

const serializableMiddleware = createSerializableStateInvariantMiddleware({
	isSerializable,
	getEntries,
});

export const store = configureStore({
	reducer: {
		userReducer,
		cartReducer,
		shopReducer
	},
	middleware: [serializableMiddleware],
});

// SELECTORS AND MEMOIZED
const userSelect = (state) => state.userReducer.currentUser;
export const userSelector = createSelector([userSelect], (currentUser) => currentUser);
const cartSelect = (state) => state.cartReducer;
export const cartSelector = createSelector([cartSelect], (cart) => cart);
const collectionSelect = (state) => state.shopReducer.collections;
export const collectionSelector = createSelector(
	[collectionSelect],
	(collections) => collections
)
