import { createSlice } from "@reduxjs/toolkit";

const initialIdsState = {
	ids: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: initialIdsState,
	reducers: {
		addFavorite: (state, action) => {
			state.ids.push(action.payload.id);
		},
		removeFavorite: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
//favoritesReducer
export default favoritesSlice.reducer;
