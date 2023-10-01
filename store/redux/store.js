import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favoritesSlice";

const store = configureStore({
	reducer: {
		favoriteMeals: favoritesReducer,
	},
});

export default store;
