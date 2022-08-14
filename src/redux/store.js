//REDUCERS
import userReducer from "./user/user.slice";
import cartReducer from "./cart/cart.slice";
import shopReducer from "./shop/shop.slice";
import appReducer from "./app/app.slice";

// TOOL KITS
import { configureStore, createReducer, createSelector } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";


// STORAGE AND PERSISTENCE
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";


const cartPersistConfig = {
	key: "cart",
	storage,
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);



const rootReducer = combineReducers({
	userReducer,
	cartReducer: persistedCartReducer,
	shopReducer,
	appReducer
});
const rootPersistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],

};
const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedRootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

// SELECTORS AND MEMOIZED

const userSelect = (state) => state.userReducer;
export const userSelector = createSelector(
	[userSelect],
	(user) => {
		return user
	}
)
const cartSelect = (state) => state.cartReducer;
export const cartSelector = createSelector([cartSelect], (cart) => cart);
const collectionsSelect = (state) => Object.values(state.shopReducer.collections);
export const collectionsSelector = createSelector([collectionsSelect], (collections) => collections);
// export const collectionListSelector = createSelector(
// 	[collectionsSelect],
// 	collection => Object.entries(collection).map(ent => ent[1])
// )
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

const appSelect = (state) => state.appReducer;

export const appSelector = createSelector(
	[appSelect,cartSelect,collectionsSelect,URLDeducedCollectionSelect,cartItemsTotalSelect,cartPricesTotalSelect],
	(app,cart,collections,urlDeducedCollection,cartItemsTotal,cartPricesTotal) => {
		return {
			app,
			cart,
			collections,
			cartItemsTotal,
			cartPricesTotal,
			urlDeducedCollection,
		}
	}
)


export const persistedStore = persistStore(store);