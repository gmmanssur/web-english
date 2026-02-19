import type { LoginRequest } from "../../Models/Auth/LoginRequest";
import type { LoginResponse } from "../../Models/Auth/LoginResponse";
import type { RegisterRequest } from "../../Models/Auth/RegisterRequest";
import type { RegisterResponse } from "../../Models/Auth/RegisterResponse";
import { api } from "../Api/ApiService";

export async function registerUser(data: RegisterRequest) : Promise<RegisterResponse> {

    try {
        const response = await api.post<RegisterResponse>(
            "/Auth/register",
            data
        );

        return response.data;

    } catch (error: any) {

        if (error.response) {
            throw new Error(error.response.data?.message || "API Error");
        }

        throw new Error("Network Error");
    }
}

export async function loginUser(data: LoginRequest) : Promise<LoginResponse> {

    try {
        const response = await api.post<LoginResponse>(
            "/Auth/login",
            data
        );

        return response.data;

    } catch (error: any) {

        if (error.response) {
            throw new Error(error.response.data?.message || "API Error");
        }

        throw new Error("Network Error");
    }
}