import React from "react";

import { FcBookmark } from "react-icons/fc";
import { FaCircle } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

const counts = [];

for (let i = 1; i <= 40; i++) {
  counts.push(i);
}

const PastTest = () => {
  return (
    <div className="min-h-screen bg-darkLayoutStrm flex">
      <ul className="w-[6vw] h-screen overflow-y-scroll bg-white border-r-2">
        {counts &&
          counts.map((count, index) => (
            <li
              key={index}
              className={`${index % 2 === 0 && "bg-gray-300"} 
                h-10 flex items-center justify-center cursor-pointer`}
            >
              <div className="flex relative justify-center items-center w-full">
                <span className="absolute top-2 left-2 text-dark">
                  <FaCircle size="6" />
                </span>
                {count}
                <span className="absolute top-1 right-2">
                  <FcBookmark className="text-white ml-1" size="14" />
                </span>
              </div>
            </li>
          ))}
      </ul>

      <Header />

      <div className="w-[94vw] mt-20 pl-5 h-[80vh] overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quis,
        unde laudantium aut nostrum dolores perspiciatis similique laborum quam
        repellat quae ut reiciendis deleniti inventore dolor temporibus, autem
        quasi numquam?
      </div>

      <Footer />
    </div>
  );
};

export default PastTest;
