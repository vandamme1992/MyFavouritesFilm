import axios from 'axios';

export const SERVER_URL = axios.create({
    baseURL: 'http://localhost:3001',
});