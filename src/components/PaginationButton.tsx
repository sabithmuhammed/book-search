import React from 'react';

const PaginationButton = () => {
  return (
    <div className="w-full h-10 mt-6 flex justify-center items-center gap-3">
      <button className="w-9 h-9 bg-violet-500 text-white rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-violet-600">
        1
      </button>
      <button className="w-9 h-9 bg-violet-100 text-violet-500 rounded-md shadow-md transition-all duration-200 ease-in-out hover:bg-violet-200 hover:text-violet-600">
        2
      </button>
      <button className="w-9 h-9 bg-violet-100 text-violet-500 rounded-md shadow-md transition-all duration-200 ease-in-out hover:bg-violet-200 hover:text-violet-600">
        3
      </button>
      <button className="w-9 h-9 bg-violet-100 text-violet-500 rounded-md shadow-md transition-all duration-200 ease-in-out hover:bg-violet-200 hover:text-violet-600">
        4
      </button>
      <button className="w-9 h-9 bg-violet-100 text-violet-500 rounded-md shadow-md transition-all duration-200 ease-in-out hover:bg-violet-200 hover:text-violet-600">
        5
      </button>
    </div>
  );
};

export default PaginationButton;

