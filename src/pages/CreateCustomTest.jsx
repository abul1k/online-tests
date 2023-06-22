
import React, { useState } from "react";

const CreateCustomTest = () => {
  const [isTutor, setIsTutor] = useState(true);
  const [isTimer, setIsTimer] = useState(false);

  const [checkedItems, setCheckedItems] = useState({});

  const systems = [
    {
      label: "Atomic Structure 1",
      value: "atomicStructure1",
    },
    {
      label: "Atomic Structure 2",
      value: "atomicStructure2",
    },
    {
      label: "Atomic Structure 3",
      value: "atomicStructure3",
    },
    {
      label: "Atomic Structure 4",
      value: "atomicStructure4",
    },
    {
      label: "Atomic Structure 5",
      value: "atomicStructure5",
    },
    {
      label: "Atomic Structure 6",
      value: "atomicStructure6",
    },
    {
      label: "Atomic Structure 7",
      value: "atomicStructure7",
    },
    {
      label: "Atomic Structure 8",
      value: "atomicStructure8",
    },
    {
      label: "Atomic Structure 9",
      value: "atomicStructure9",
    },
    {
      label: "Atomic Structure 10",
      value: "atomicStructure10",
    },
  ];

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

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
        {systems.map((checkbox) => (
          <div className="w-1/2" key={checkbox.value}>
            <label className="mb-2 block">
              <input
                type="checkbox"
                name={checkbox.value}
                checked={checkedItems[checkbox.value] || false}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2">{checkbox.label}</span>
            </label>
          </div>
        ))}
      </div>
      <hr />
      <button
        className="btn-primary mt-10"
        onClick={() => console.log(checkedItems, isTutor, isTimer)}
      >
        Start Test
      </button>
    </div>
  );
};

export default CreateCustomTest;
