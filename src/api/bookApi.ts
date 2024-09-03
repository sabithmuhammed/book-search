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

export const getBooks = (query: string) => {
    try {
        const response = Api.get("/api/books", {
            params: {
                q: query,
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

export const getBookById = (id: string) => {
    try {
        const response = Api.get(`/api/book/${id}`);
        
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
