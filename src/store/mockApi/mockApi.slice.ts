import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {ServerResponse} from "../../models/models";





export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const response = await axios.get<ServerResponse[], any>('https://646e657a9c677e23218b9dbd.mockapi.io/filmApi');
    return response.data;
});

const filmSlice = createSlice({
    name: 'films',
    initialState: {
        films: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
            });
    },
});

export default filmSlice.reducer;
