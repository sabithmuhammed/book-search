import React from "react";

const BookPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-6 flex md:flex-row flex-col gap-6">
        <div className="h-[350px] w-[250px] flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <img
            className="h-full w-full object-contain"
            src="https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF1000,1000_QL80_.jpg"
            alt="Book Cover"
          />
        </div>
        <div className="flex flex-col text-gray-900 w-full">
          <div className="flex flex-col gap-1 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Harry Potter: The Sorcerer's Stone
            </h2>
            <h3 className="text-lg font-medium text-gray-600">by J.K. Rowling</h3>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-sm text-gray-500 font-semibold">ISBN</p>
            <p className="pl-2 text-gray-700">978-0439708180</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-sm text-gray-500 font-semibold">Publication Details</p>
            <p className="pl-2 text-gray-700">Scholastic Inc.</p>
            <p className="pl-2 text-gray-700">September 1, 1998</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-sm text-gray-500 font-semibold">Description</p>
            <p className="pl-2 text-gray-700">
              Harry Potter has never even heard of Hogwarts when the letters
              start dropping on the doormat at number four, Privet Drive.
              Addressed in green ink on yellowish parchment with a purple seal,
              they are swiftly confiscated by his grisly aunt and uncle. Then,
              on Harry's eleventh birthday, a great beetle-eyed giant of a man
              called Rubeus Hagrid bursts in with some astonishing news: Harry
              Potter is a wizard, and he has a place at Hogwarts School of
              Witchcraft and Wizardry. An incredible adventure is about to begin!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;

