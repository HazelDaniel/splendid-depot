//REDUCERS
import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";
import shopReducer from "./shop/shop.slice";

// TOOL KITS
import { configureStore, createReducer, createSelector } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";


// STORAGE AND PERSISTENCE
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
	key: "cart",
	storage,
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const rootReducer = combineReducers({
	userReducer,
	cartReducer: persistedCartReducer,
	shopReducer,
});
const rootPersistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],

};
const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedRootReducer,
});

// SELECTORS AND MEMOIZED
const userSelect = (state) => state.userReducer.currentUser;
export const userSelector = createSelector([userSelect], (currentUser) => currentUser);
const cartSelect = (state) => state.cartReducer;
export const cartSelector = createSelector([cartSelect], (cart) => cart);
const collectionsSelect = (state) => Object.values(state.shopReducer.collections);
export const collectionsSelector = createSelector([collectionsSelect], (collections) => collections);
const URLDeducedCollectionSelect = (parameter) => (state) => state.shopReducer.collections[parameter];
export const URLDeducedCollectionSelector = createSelector(
	[URLDeducedCollectionSelect],
	collection => collection
)
const cartItemsTotalSelect = (state) => {
	return state.cartReducer.carts
		.map((cart) => {
			return cart.quantity;
		})
		.reduce((prev, next) => {
			return prev + next;
		}, 0);
};

export const cartItemsTotalSelector = createSelector([cartItemsTotalSelect], (totalQuantity) => totalQuantity);

const cartPricesTotalSelect = (state) => {
	const total = state.cartReducer.carts
		.map((cart) => {
			return +cart.quantity * +cart.price.slice(1);
		})
		.reduce((prev, next) => {
			return (prev + next);
		}, 0)
	return total.toFixed(2);
};

export const cartPricesTotalSelector = createSelector([cartPricesTotalSelect], (totalPrice) => totalPrice);

export const persistedStore = persistStore(store);