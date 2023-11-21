import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {ServerResponse} from "../../models/models";

export const fetchLoginUser = createAsyncThunk('userLogin', async () => {
    const response = await axios.get<ServerResponse[], any>('http://localhost:3001/profile');
    return response.data;
});

const loginUser = createSlice({
    name: 'login',
    initialState: {
        username: '',
        password: '',
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
            });
    },
});

export default loginUser.reducer;
