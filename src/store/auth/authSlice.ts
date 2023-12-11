import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { LOGIN_KEY} from "../../utils/constans";


export interface AuthState {
    login: string | null
}


const initialState: AuthState = {
    login: JSON.parse(localStorage.getItem(LOGIN_KEY) ?? 'false')
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{user:string}>) => {

            state.login = action.payload.user
            localStorage.setItem(LOGIN_KEY, JSON.stringify(action.payload.user))
        },
        logoutUser: (state) => {
            localStorage.removeItem(LOGIN_KEY);
        },
    }
});

export const authSelector = (state: { auth: AuthState }) => state.auth.login;
export const authAction = authSlice.actions
export default authSlice.reducer;