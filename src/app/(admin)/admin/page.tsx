import React from "react";
import AdminAuthWrapper from "../AdminAuthWrapper";
import BookTile from "@/components/BookTile";
import SearchBar from "@/components/SearchBar";
import { MdOutlineLibraryAdd } from "react-icons/md";
import Link from "next/link";

const page = () => {
    return (
        <AdminAuthWrapper>
            <div className="h-full w-full max-w-[1200px] mx-auto px-5 mt-4">
                <div className=" flex gap-6">
                    <SearchBar />
                    <button className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-md h-12 px-4 shadow-lg text-white hover:from-green-400 hover:to-green-500 hover:shadow-xl transform transition-all duration-200">
                        <Link href="/admin/addBook">
                        
                        <MdOutlineLibraryAdd size={20} />
                        </Link> 
                    </button>
                </div>
                <div className="">
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                    <BookTile />
                </div>
            </div>
        </AdminAuthWrapper>
    );
};

export default page;
