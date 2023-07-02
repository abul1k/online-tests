import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../Routes/constants";
import { useDispatch, useSelector } from "react-redux";
import { startTest } from "../features/pastTest/pastTestSlice";
import { useEffect } from "react";
import { getModules } from "../features/modules/moduleSlice";

const CreateCustomTest = () => {
  const navigate = useNavigate();

  const { moduleList } = useSelector(({ module }) => module);
  const dispatch = useDispatch();

  const [isTutor, setIsTutor] = useState(true);
  const [isTimer, setIsTimer] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const isChecked = event.target.checked;

    setCheckedItems({
      ...checkedItems,
      [name]: isChecked,
    });
  };

  const pastTest = () => {
    const selectedModules = Object.keys(checkedItems).filter(
      (key) => checkedItems[key]
    );

    dispatch(
      startTest({ modul_ids: selectedModules, timer: isTimer, tutor: isTutor })
    ).then(() => {
      navigate(ROUTES.TEST);
    });
  };

  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);

  return (
    <div className="card">
      <h1 className="text-xl">Test Mode</h1>

      <div className="flex items-center gap-10 mt-10 mb-5">
        <div className="flex items-center gap-3">
          <span>Tutor:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isTutor}
              onChange={() => setIsTutor(!isTutor)}
              className="sr-only peer"
            />
            <div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
          rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            ></div>
          </label>
        </div>
        <div className="flex items-center gap-3">
          <span>Timer:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={() => setIsTimer(!isTimer)}
              className="sr-only peer"
            />
            <div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
          rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
            ></div>
          </label>
        </div>
      </div>
      <hr />

      <div className="flex flex-wrap mt-10 mb-5">
        {moduleList.map((item) => (
          <div className="w-1/2" key={item.id}>
            <label className="mb-2 block cursor-pointer">
              <input
                type="checkbox"
                name={item.id}
                checked={checkedItems[item.id] || false}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">{item.name}</span>
            </label>
          </div>
        ))}
      </div>
      <hr />
      <button className="btn-primary mt-10" onClick={pastTest}>
        Start Test
      </button>
    </div>
  );
};

export default CreateCustomTest;
