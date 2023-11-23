import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FAV_KEY} from "../../utils/constans";


interface MockApiState {
    favourites: string[]
}

const initialState:MockApiState = {
    favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]')
}

export const favouritesSlice = createSlice({
name: 'mockApi',
    initialState,
    reducers: {
    addFavourites(state, action: PayloadAction<string>) {
        state.favourites.push(action.payload)
        localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
    },
        removeFavourites(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload);
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
        },
    }

})

export const mockApiAction = favouritesSlice.actions
export const mockApiReducer = favouritesSlice.reducer
