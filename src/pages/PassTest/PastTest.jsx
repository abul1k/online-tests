import React from "react";

import { FcBookmark } from "react-icons/fc";
import { FaCircle } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import {
  getExactTest,
  getTestsById,
} from "../../features/pastTest/pastTestSlice";
import { useDispatch, useSelector } from "react-redux";

const PastTest = () => {
  const { testList, isFilled } = useSelector(({ pastTest }) => pastTest);
  const dispatch = useDispatch();

  const changeTest = (id, test_id) => {
    dispatch(getExactTest({ id, test_id }));
  };

  useEffect(() => {
    const testID = JSON.parse(localStorage.getItem("testID"));
    dispatch(getTestsById(testID));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-darkLayoutStrm flex">
      <ul className="w-[6vw] h-screen overflow-y-scroll bg-white border-r-2">
        {testList &&
          testList.test_ids &&
          testList.test_ids.map((test, index) => (
            <li
              onClick={() => changeTest(testList.id, test.test_id)}
              key={index}
              className={`${index % 2 === 0 && "bg-gray-300"} 
                h-10 flex items-center justify-center cursor-pointer`}
            >
              <div className="flex relative justify-center items-center w-full">
                <span className="absolute top-2 left-2 text-dark">
                  <FaCircle size="6" />
                </span>
                {test.order_number}
                <span className="absolute top-1 right-2">
                  <FcBookmark className="text-white ml-1" size="14" />
                </span>
              </div>
            </li>
          ))}
      </ul>

      <Header />

      <div className="w-[94vw] mt-20 pl-5 h-[80vh] overflow-y-scroll">
        <div
          dangerouslySetInnerHTML={{
            __html: testList.isFilled ? testList.test_ids[0].test.question : "",
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default PastTest;
