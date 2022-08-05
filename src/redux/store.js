// import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import { createSelector } from "@reduxjs/toolkit";
import { Iterable } from "immutable";
import { configureStore, createSerializableStateInvariantMiddleware, isPlain } from "@reduxjs/toolkit";

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value) => (Iterable.isIterable(value) || isPlain(value))

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})


export const store = configureStore({
	reducer: {
		userReducer,
	},
	middleware: [serializableMiddleware],
});
const userSelect = (state) => state.userReducer.currentUser;
export const userSelector = createSelector(
	[userSelect],
	(currentUser) => currentUser
)

