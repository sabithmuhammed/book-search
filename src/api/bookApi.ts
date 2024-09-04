import { BookType } from "@/types/stateTypes";
import Api from "./apiClient";

export const login = (data: { email: string; password: string }) => {
    try {
        const response = Api.post("/api/addBook", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getBooks = (query: string,page:number) => {
    try {
        const response = Api.get("/api/books", {
            params: {
                q: query,
                page
            },
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getBookById = (id: string) => {
    try {
        const response = Api.get(`/api/book/${id}`);

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createNewBook = (data: FormData) => {
    try {
        const response = Api.post(`/api/addBook`, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteBook = (id: string) => {
    try {
        const response = Api.delete(`/api/deleteBook/${id}`);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateBook = (id: string, data: FormData) => {
    try {
        const response = Api.patch(`/api/updateBook/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
