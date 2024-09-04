"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/api/adminApi";
import { useDispatch } from "react-redux";
import { loginAdmin } from "@/redux/slice/authSlice";
import { useRouter } from "next/navigation";

interface LoginDetails {
    username: string; // Will be treated as email
    password: string;
}

const schema = Yup.object().shape({
    username: Yup.string()
        .email("Invalid email address") // Validate email format
        .required("Username (email) is required"), // Custom message for the email field
    password: Yup.string().required("Password is required"),
});

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDetails>({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();
    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null); // State for server errors

    const onSubmit: SubmitHandler<LoginDetails> = async (data) => {
        try {
            setServerError(null); // Clear previous errors
            const response = await login(data);
            if (response?.data) {
                dispatch(loginAdmin({ ...response.data }));
                router.replace("/admin");
            }
        } catch (error: any) {
            console.error(error);
            // Set server error message
            setServerError(error.response?.data?.message || "An error occurred while logging in.");
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <form
            method="post"
                onSubmit={
                  handleSubmit(onSubmit)}
                className="w-full max-w-md bg-white shadow-md rounded-md p-8 md:p-16"
            >
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Login
                </h2>

                {/* Server error message */}
                {serverError && (
                    <p className="text-red-500 text-sm text-center mb-4">
                        {serverError}
                    </p>
                )}

                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="username"
                        {...register("username")}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.username
                                ? "border-red-500"
                                : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter your email"
                    />
                    {errors.username && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.password
                                ? "border-red-500"
                                : "border-gray-300"
                        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        placeholder="Enter your password"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
