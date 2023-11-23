import {configureStore} from "@reduxjs/toolkit";
import filmApiSlice from "./mockApi/mockApi.slice";
import {mockApiReducer} from "./mockApi/favourites.slice";
import authSlice from "./auth/authSlice";



export const store =  configureStore({
    reducer: {
        films: filmApiSlice,
        favouriteFilms: mockApiReducer,
        auth: authSlice,

    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
