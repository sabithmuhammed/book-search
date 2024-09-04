"use client";
import { getBooks } from "@/api/bookApi";
import Card from "@/components/Card";
import PaginationButton from "@/components/PaginationButton";
import SearchBar from "@/components/SearchBar";
import { BookType } from "@/types/stateTypes";
import { useEffect, useState } from "react";

export default function Home() {
    const [books, setBooks] = useState<BookType[]>([]);
    const [search, setSearch] = useState("");
    const [page,setPage] = useState<number>(1);
    const [pageCount,setPageCount] = useState<number>(0);
    useEffect(() => {
        (async () => {
            try {
                const result = await getBooks(search,page);
                if (result?.data) {
                    setBooks(result.data.books);
                    setPageCount(Math.ceil(result.data.totalBooks/4));
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [search,page]);
    return (
        <div className="h-full w-full max-w-[1200px] mx-auto pt-6  px-3">
            <SearchBar search={search} setSearch={setSearch}/>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {books.length !== 0 ?
                    books.map((book) => (
                        <div className="flex justify-center" key={book._id}>
                            <Card {...book} />
                        </div>
                    )):"No books available"}
            </div>
            <PaginationButton page={page} setPage={setPage} pageCount={pageCount} />
        </div>
    );
}
