import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";




const FAV_KEY = 'rfk'

interface MockApiState {
    favourites: string[]
}


const initialState:MockApiState = {
    favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]')
}


export const mockApiSlice = createSlice({
name: 'mockApi',
    initialState,
    reducers: {
    addFavorites(state, action: PayloadAction<string>) {
        state.favourites.push(action.payload)
        localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
    },
        removeFavorites(state, action: PayloadAction<string>) {
            state.favourites.filter(f=> f !== action.payload)
            localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites))
        },

    }

})

export const mockApiAction = mockApiSlice.actions
export const mockApiReducer = mockApiSlice.reducer
