import axios from "axios";
import {SERVER_URL} from "../API/api";
import {AuthResponse} from "../types/userTypes";

export const login = async (username: string, password: string): Promise<AuthResponse> => {
    const response = await axios.post(`${SERVER_URL}/login`, { username, password });
    return response.data;
};