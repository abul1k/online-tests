import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcBookmark } from "react-icons/fc";
import { FaCircle } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

import {
  getExactTest,
  getTestsById,
  submitTheAnswer,
} from "../../features/pastTest/pastTestSlice";

const PastTest = () => {
  const { testList, exactTest } = useSelector(({ pastTest }) => pastTest);
  const dispatch = useDispatch();

  const [selectedAnswer, setSelectedAnswerAnswer] = useState({
    id: null,
    key: "",
    test_question: "",
  });

  const changeTest = (id, test_id) => {
    dispatch(getExactTest({ id, test_id })).then(() => {
      console.log(exactTest);
    });
  };

  const currentAnswer = (option) => {
    setSelectedAnswerAnswer({
      id: option.id,
      key: option.key,
      test_question: option.test_question,
    });
  };

  const submitOnClick = () => {
    dispatch(
      submitTheAnswer({
        id: selectedAnswer.id,
        answer: selectedAnswer.key,
        test_question_id: selectedAnswer.test_question,
        start_test_id: testList.id,
      })
    );
  };

  useEffect(() => {
    const testID = JSON.parse(localStorage.getItem("testID"));
    const exactTestID = JSON.parse(localStorage.getItem("exactTestID"));

    dispatch(getTestsById(testID));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-darkLayoutStrm flex">
      <ul className="w-[6vw] h-screen overflow-y-scroll bg-white border-r-2">
        {testList.isFilled &&
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

      <div className="w-[94vw] mt-20 p-5 h-[80vh] overflow-y-scroll">
        <div
          dangerouslySetInnerHTML={{
            __html: exactTest.isFilled ? exactTest.question : "",
          }}
        />
        <img
          src={testList.isFilled && testList.test_ids[0].test.image2}
          alt=""
        />

        <div className="border-primary border-2 mt-10 px-5">
          {exactTest.isFilled &&
            exactTest.options.map((option, index) => (
              <label
                className="flex items-center gap-2 cursor-pointer my-5"
                for={option.key}
                key={index}
              >
                <input
                  type="radio"
                  name="keys"
                  id={option.key}
                  value={option.key}
                  onChange={() => currentAnswer(option)}
                />
                <span className="uppercase">{option.key}</span>
                <span>{option.answer}</span>
              </label>
            ))}
        </div>
        <button
          className="btn-primary mt-10 inline-block"
          onClick={() => submitOnClick()}
        >
          Sumit the Answer
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default PastTest;
