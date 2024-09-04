
import { getBookById } from "@/api/bookApi";
import { BookType } from "@/types/stateTypes";
import React, { useState } from "react";


const BookPage = async({params}: { params: { bookId: string } }) => {

  const response = await getBookById(params.bookId);
  const book:BookType = response.data

  return (
    <div className="w-full h-full flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-6 flex md:flex-row flex-col gap-6">
        <div className="h-[350px] w-[250px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <img
            className="h-full w-full object-contain"
            src={book.image}
            alt="Book Cover"
          />
        </div>
        <div className="flex flex-col text-gray-900 w-full">
          <div className="flex flex-col gap-1 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {book.title}
            </h2>
            <h3 className="text-lg font-medium text-gray-600">{book.author}</h3>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-sm text-gray-500 font-semibold">ISBN</p>
            <p className="pl-2 text-gray-700">{book.isbn}</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-sm text-gray-500 font-semibold">Publication Details</p>
            <p className="pl-2 text-gray-700">{book.publisher}</p>
            <p className="pl-2 text-gray-700">{book.publishedDate}</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-sm text-gray-500 font-semibold">Description</p>
            <p className="pl-2 text-gray-700">
              {book.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;

