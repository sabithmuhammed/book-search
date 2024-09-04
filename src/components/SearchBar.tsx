import React from "react";
import { IoSearchSharp } from "react-icons/io5";

type PropType = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ search, setSearch }: PropType) => {
    return (
        <div className="w-full h-12 flex justify-center md:justify-end mb-7">
            <label className="flex w-full max-w-lg h-full relative">
                <input
                    type="search"
                    className="w-full h-full pl-12 pr-4 py-2 rounded-lg border-2 border-violet-400 focus:border-violet-500 focus:outline-none shadow-sm transition-all duration-300 ease-in-out"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <IoSearchSharp size={20} className="text-violet-500" />
                </div>
            </label>
        </div>
    );
};

export default SearchBar;
