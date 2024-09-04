import React, { SetStateAction } from "react";

type PropType = {
    page: number;
    setPage: React.Dispatch<SetStateAction<number>>;
    pageCount: number;
};

const PaginationButton = ({ page, pageCount, setPage }: PropType) => {
    const pageButtons =new Array(pageCount).fill(null);
    return (
        <div className="w-full h-10 mt-6 flex justify-center items-center gap-3">
            {pageButtons.length !== 0 &&
                pageButtons.map((_, index) =>
                    index + 1 === page ? (
                        <button
                            className="w-9 h-9 bg-violet-500 text-white rounded-md shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-violet-600"
                            key={index}
                            onClick={()=>setPage(index+1)}
                        >
                            {index + 1}
                        </button>
                    ) : (
                        <button
                            className="w-9 h-9 bg-violet-100 text-violet-500 rounded-md shadow-md transition-all duration-200 ease-in-out hover:bg-violet-200 hover:text-violet-600"
                            key={index}
                            onClick={()=>setPage(index+1)}
                        >
                            {index + 1}
                        </button>
                    )
                )}
        </div>
    );
};

export default PaginationButton;
