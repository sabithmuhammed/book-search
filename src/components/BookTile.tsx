import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuFileEdit } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

const BookTile = () => {
    return (
        <div className="w-full min-h-[120px] bg-gradient-to-r from-white to-gray-50 rounded-lg my-4 shadow-lg flex max-md:flex-col justify-between px-6 py-5 items-center transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-800">
                    Book Title Here
                </h2>
                <p className="text-gray-500">By Author Name</p>
                <p className="text-sm text-gray-400">
                    Short description or genre - 1979
                </p>
            </div>

            <div className="flex gap-4 items-center">
                <button className="group p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                    <LuEye
                        size={22}
                        className="text-gray-600 group-hover:text-gray-800"
                    />
                </button>
                <button className="group p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200">
                    <LuFileEdit
                        size={22}
                        className="text-gray-600 group-hover:text-gray-800"
                    />
                </button>
                <button className="group p-2 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-200">
                    <RiDeleteBin5Line
                        size={22}
                        className="text-red-500 group-hover:text-red-700"
                    />
                </button>
            </div>
        </div>
    );
};

export default BookTile;

