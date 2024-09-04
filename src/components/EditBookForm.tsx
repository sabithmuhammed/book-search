"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { createNewBook, getBookById, updateBook } from "@/api/bookApi";

// Define form input types
type FormValues = {
    image: FileList; // Correct type for image
    name: string;
    author: string;
    isbn: string;
    publication: string;
    year: string;
    description: string;
};

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
    image: Yup.mixed().test(
        "fileType",
        "Uploaded file must be an image",
        (value) => {
            // If value is not provided, it's valid (optional)
            if (!value || (value as FileList).length === 0) {
                return true;
            }
            // If a value is provided, check if it's an image
            return (value as FileList)[0].type.startsWith("image/");
        }
    ),
    name: Yup.string()
        .required("Book name is required")
        .min(2, "Name must be at least 2 characters"),
    author: Yup.string().required("Author name is required"),
    isbn: Yup.string()
        .required("ISBN is required")
        .matches(/^[0-9-]+$/, "ISBN must only contain numbers and dashes"),
    publication: Yup.string().required("Publication is required"),
    year: Yup.string()
        .required("Year is required")
        .matches(/^(19|20)\d{2}$/, "Year must be a valid year"),
    description: Yup.string()
        .required("Description is required")
        .min(10, "Description must be at least 10 characters"),
});

const EditBookForm = ({ bookId }: { bookId: string }) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(validationSchema) as any, // Cast to any to handle mixed type issue
    });

    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const response = await getBookById(bookId);
            if (response?.data) {
                const book = response.data;

                // Set initial values using setValue
                setValue("name", book.title);
                setValue("author", book.author);
                setValue("isbn", book.isbn);
                setValue("publication", book.publisher);
                setValue("year", book.publishedDate);
                setValue("description", book.description);
            }
        })();
    }, [bookId, setValue]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            setServerError(null);

            const formData = new FormData();
            formData.append("author", data.author);
            formData.append("description", data.description);
            formData.append("isbn", data.isbn);
            formData.append("publishedDate", data.year);
            formData.append("publisher", data.publication);
            formData.append("title", data.name);
            if (data.image[0]) {
                formData.append("image", data.image[0]);
            }

            const response = await updateBook(bookId, formData);
            if (response?.data) {
                router.replace("/admin");
            }
        } catch (error: any) {
            console.error(error);
            // Set server error message
            setServerError(
                error.response?.data?.message ||
                    "An error occurred while adding book."
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg"
        >
            {/* Book Image */}
            {serverError && (
                <p className="text-red-500 text-sm text-center mb-4">
                    {serverError}
                </p>
            )}
            <div className="mb-4">
                <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                >
                    Book Image
                </label>
                <input
                    type="file"
                    {...register("image")}
                    id="image"
                    accept="image/*"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                />
                {errors.image && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.image.message}
                    </p>
                )}
            </div>

            {/* Name of the Book */}
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Name of the Book
                </label>
                <input
                    type="text"
                    {...register("name")}
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Author */}
            <div className="mb-4">
                <label
                    htmlFor="author"
                    className="block text-sm font-medium text-gray-700"
                >
                    Author
                </label>
                <input
                    type="text"
                    {...register("author")}
                    id="author"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.author && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.author.message}
                    </p>
                )}
            </div>

            {/* ISBN */}
            <div className="mb-4">
                <label
                    htmlFor="isbn"
                    className="block text-sm font-medium text-gray-700"
                >
                    ISBN
                </label>
                <input
                    type="text"
                    {...register("isbn")}
                    id="isbn"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.isbn && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.isbn.message}
                    </p>
                )}
            </div>

            {/* Publication */}
            <div className="mb-4">
                <label
                    htmlFor="publication"
                    className="block text-sm font-medium text-gray-700"
                >
                    Publication
                </label>
                <input
                    type="text"
                    {...register("publication")}
                    id="publication"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.publication && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.publication.message}
                    </p>
                )}
            </div>

            {/* Year */}
            <div className="mb-4">
                <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                >
                    Year
                </label>
                <input
                    type="text"
                    {...register("year")}
                    id="year"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.year && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.year.message}
                    </p>
                )}
            </div>

            {/* Description */}
            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    {...register("description")}
                    id="description"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </form>
    );
};

export default EditBookForm;
