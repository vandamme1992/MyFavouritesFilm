import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from '../../API/api';

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

interface User {
    id: number;
    username: string;
    password: string;
    gender: string;
}


export const registration = createAsyncThunk('auth/register', async (userData: User) => {
    try {
        const response = await SERVER_URL.post('/users', userData);

        if (response) {
            return response.data;
        } else {
            throw new Error('Произошла ошибка при регистрации');
        }
    } catch (error) {
        throw new Error('Произошла ошибка при регистрации');
    }
});


const authSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(registration.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuthenticated = true;
        });
        builder.addCase(registration.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Произошла ошибка';
        });
    },
});

export default authSlice.reducer;