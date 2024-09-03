import Api from "./apiClient";

export const login = (data: { username: string; password: string }) => {
    try {
        const response = Api.post("/auth/login", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
