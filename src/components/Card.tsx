import { BookType } from "@/types/stateTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
    author,
    title,
    _id,
    description,
    image,
    publishedDate,
    publisher,
}: BookType) => {
    return (
        <div className="p-5 w-[260px] shadow-lg hover:shadow-xl overflow-hidden flex flex-col justify-between bg-white rounded-lg transition-shadow duration-300 ease-in-out">
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt="Book Cover"
                    className="h-full w-full object-contain"
                />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mt-4 line-clamp-2">
                {title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">By {author}</p>
            <Link href={`/book/${_id}`} className="mt-4">
                <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-md hover:from-purple-600 hover:to-indigo-600 transition-colors duration-300 ease-in-out">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default Card;
