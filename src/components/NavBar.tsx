import Link from "next/link";
import React from "react";
import { PiBooksDuotone } from "react-icons/pi";
const NavBar = () => {
   
    return (
        <nav className="w-full h-[60px] bg-white flex-shrink-0 sticky top-0 px-3  border-b-black/10 border-2">
            <div className="h-full w-full max-w-[1200px] mx-auto  flex items-center">
              <Link href={"/"} className="flex items-center gap-1 text-violet-500">
              <PiBooksDuotone size={35}/>
              <p className="text-xl font-semibold ">Books</p>
              </Link>
            </div>
        </nav>
    );
};

export default NavBar;
