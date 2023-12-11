export interface User {
    gender?: string
    id?: number
    username: string
    password: string
}

export interface AuthResponse {
    token: string;
    user: User;
}