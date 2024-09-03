import { createSlice } from "@reduxjs/toolkit";

interface Admin {
    name: string;
    email: string;
}

// Helper function to safely access localStorage
const getLocalStorageItem = (key: string) => {
    if (typeof window !== "undefined") {
        // Checking if window is defined to ensure this code runs on the client-side
        return localStorage.getItem(key);
    }
    return null;
};

const isAdminStored = getLocalStorageItem("admin");

const initialState: {
    adminInfo: Admin | null;
} = {
    adminInfo: isAdminStored ? JSON.parse(isAdminStored) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAdmin: (state, action) => {
            state.adminInfo = action.payload.userData;
            if (typeof window !== "undefined") {
                // Ensure localStorage is available
                localStorage.setItem("admin", JSON.stringify(action.payload.userData));
                localStorage.setItem("accessToken", action.payload.accessToken);
            }
        },
        logoutAdmin: (state) => {
            state.adminInfo = null;
            if (typeof window !== "undefined") {
                // Ensure localStorage is available
                localStorage.removeItem("admin");
                localStorage.removeItem("accessToken");
            }
        },
    },
});

export const { loginAdmin, logoutAdmin } = authSlice.actions;

export default authSlice.reducer;
