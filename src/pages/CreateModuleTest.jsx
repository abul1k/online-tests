import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Select from "react-select";

import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";

const CreateModuleTest = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const variants = [
    { value: "a", label: "A" },
    { value: "b", label: "B" },
    { value: "c", label: "C" },
  ];

  const [sections, setSections] = useState([
    {
      id: 0,
      forms: {
        selectValue: "",
        inputValue: "",
      },
    },
  ]);

  const handleAddInput = () => {
    const newId = sections.length;
    setSections([
      ...sections,
      {
        id: newId,
        forms: {
          selectValue: "",
          inputValue: "",
        },
      },
    ]);
  };

  const handleDeleteInput = (id) => {
    const updatedsections = sections.filter((section) => section.id !== id);
    setSections(updatedsections);
  };

  return (
    <div className="card">
      <div className="my-5 flex items-start gap-5">
        <div className="w-1/2">
          <div>
            <label htmlFor="moduleName">Select Modul</label>
            <Select options={options} />
          </div>

          {sections.map((section, index) => (
            <div key={index} className="flex items-center gap-5 mt-5">
              <label className="w-2/12">
                Key
                <Select placeholder="" options={variants} />
              </label>
              <label className="w-9/12">
                Answer
                <input type="text" className="form-input" />
              </label>
              <div className="w-1/12 flex justify-between items-center mt-8">
                {index === sections.length - 1 && (
                  <button className="text-primary" onClick={handleAddInput}>
                    <IoIosAddCircleOutline size="20px" />
                  </button>
                )}
                {sections.length !== 1 && (
                  <button
                    className="text-danger"
                    onClick={() => handleDeleteInput(section.id)}
                  >
                    <IoIosRemoveCircleOutline size="20px" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <label htmlFor="testQuestion">Test question</label>
          <JoditEditor
            className="mt-1"
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
        </div>
      </div>

      <div className="flex justify-end mt-10 mb-5">
        <button className="btn-primary">Save</button>
      </div>
    </div>
  );
};

export default CreateModuleTest;
