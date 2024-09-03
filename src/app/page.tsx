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
    useEffect(() => {
        (async () => {
            try {
                const result = await getBooks(search);
                if (result?.data) {
                    setBooks(result.data.books);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [search]);
    return (
        <div className="h-full w-full max-w-[1200px] mx-auto pt-6  px-3">
            <SearchBar />
            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {books.length !== 0 &&
                    books.map((book) => (
                        <div className="flex justify-center" key={book._id}>
                            <Card {...book} />
                        </div>
                    ))}
            </div>
            <PaginationButton />
        </div>
    );
}
