"use client";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuFileEdit } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { BookType } from "@/types/stateTypes";
import Link from "next/link";
import DeleteModal from "./DeleteModal";
import { deleteBook, updateBook } from "@/api/bookApi";

const BookTile = ({
    _id,
    author,
    description,
    image,
    isbn,
    publishedDate,
    publisher,
    title,
    updateBooks,
}: BookType & { updateBooks: (id: string) => void }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleDeleteConfirm = async () => {
        try {
            const response = await deleteBook(_id);
            if (response?.data) {
                updateBooks(_id);
            }
            closeModal();
        } catch (error) {}
    };
    return (
        <div className="w-full min-h-[120px] bg-gradient-to-r from-white to-gray-50 rounded-lg my-4 shadow-lg flex max-md:flex-col justify-between px-6 py-5 items-center transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-500">{author}</p>
                <p className="text-sm text-gray-400">
                    {publisher} - {publishedDate}
                </p>
            </div>

            <div className="flex gap-4 items-center">
                <Link
                    href={`/book/${_id}`}
                    className="group p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                >
                    <LuEye
                        size={22}
                        className="text-gray-600 group-hover:text-gray-800"
                    />
                </Link>
                <Link
                    href={`/admin/editBook/${_id}`}
                    className="group p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                >
                    <LuFileEdit
                        size={22}
                        className="text-gray-600 group-hover:text-gray-800"
                    />
                </Link>
                <button
                    className="group p-2 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-200"
                    onClick={openModal}
                >
                    <RiDeleteBin5Line
                        size={22}
                        className="text-red-500 group-hover:text-red-700"
                    />
                </button>
            </div>
            <DeleteModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleDeleteConfirm}
                message="Are you sure you want to delete this book? This action cannot be undone."
            />
        </div>
    );
};

export default BookTile;
