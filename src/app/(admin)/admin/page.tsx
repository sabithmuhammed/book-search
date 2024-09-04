"use client";
import React, { useEffect, useState } from "react";
import AdminAuthWrapper from "../AdminAuthWrapper";
import BookTile from "@/components/BookTile";
import SearchBar from "@/components/SearchBar";
import { MdOutlineLibraryAdd } from "react-icons/md";
import Link from "next/link";
import { getBooks } from "@/api/bookApi";
import { BookType } from "@/types/stateTypes";
import PaginationButton from "@/components/PaginationButton";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutAdmin } from "@/redux/slice/authSlice";

const page = () => {
    const [books, setBooks] = useState<BookType[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(0);

    useEffect(() => {
        (async () => {
            try {
                const result = await getBooks(search, page);
                if (result?.data) {
                    setBooks(result.data.books);
                    setPageCount(Math.ceil(result.data.totalBooks / 4));
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [search, page]);

    useEffect(() => {
        setPage(1);
    }, [search]);

    const updateBooks = (id: string) => {
        const updated = books.filter((book) => book._id !== id);
        setBooks(updated);
        const totalPage = updated.length / 4;
        setPage(totalPage);
    };
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <AdminAuthWrapper>
            <div className="h-full w-full max-w-[1200px] mx-auto px-5 mt-4">
                <div className=" flex gap-6">
                    <SearchBar search={search} setSearch={setSearch} />
                    <Link
                        href="/admin/addBook"
                        className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-md h-12 px-4 shadow-lg text-white hover:from-green-400 hover:to-green-500 hover:shadow-xl transform transition-all duration-200"
                    >
                        <MdOutlineLibraryAdd size={20} />
                    </Link>
                    <button
                        onClick={() => {
                            dispatch(logoutAdmin());
                            router.replace("/");
                        }}
                        className="flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 rounded-md h-12 px-4 shadow-lg text-white hover:from-green-400 hover:to-green-500 hover:shadow-xl transform transition-all duration-200"
                    >
                        <IoLogOutOutline size={20} />
                    </button>
                </div>
                <div className="">
                    {books.length !== 0
                        ? books.map((book) => (
                              <BookTile
                                  {...book}
                                  key={book._id}
                                  updateBooks={updateBooks}
                              />
                          ))
                        : "No books available"}
                </div>

                <PaginationButton
                    page={page}
                    setPage={setPage}
                    pageCount={pageCount}
                />
            </div>
        </AdminAuthWrapper>
    );
};

export default page;
