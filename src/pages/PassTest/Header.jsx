import React from "react";
import { FcBookmark } from "react-icons/fc";

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 w-[94vw] z-10 bg-primary px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1 className="text-white text-center text-sm">
            Question 1 of 40
            <span className="block font-medium">ID: 1844</span>
          </h1>
          <div className="cursor-pointer">
            <FcBookmark className="text-white ml-1" size="22" />
            <p className="text-sm text-white">Mark</p>
          </div>
        </div>
        <div className="flex items-center gap-7"></div>
      </div>
    </nav>
  );
};

export default Header;
