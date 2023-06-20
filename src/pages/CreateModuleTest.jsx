import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { getModules } from "../features/modules/moduleSlice";

const CreateModuleTest = () => {
  const { moduleList } = useSelector(({ module }) => module);

  const dispatch = useDispatch();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [formData, setFormData] = useState([{ key: "", answer: "" }]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSelectChange = (selectedOption, index) => {
    const newFormData = [...formData];
    newFormData[index].key = selectedOption.value;
    setFormData(newFormData);
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (event, index) => {
    const newFormData = [...formData];
    newFormData[index].answer = event.target.value;
    setFormData(newFormData);
  };

  const handleAddForm = () => {
    setFormData([...formData, { key: "", answer: "" }]);
  };

  const handleDeleteForm = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  const variants = [
    { value: "a", label: "A" },
    { value: "b", label: "B" },
    { value: "c", label: "C" },
  ];

  const [data, setData] = useState({
    modul_id: null,
    question: "",
    correct_answer: "",
    correct_answer_key: "",
    options: [],
  });

  const saveDatas = () => {
    data.question = content;
    const newFormData = [...formData];
    // newFormData[index] = { key: selectValue, answer: inputValue };
    setFormData(newFormData);
    data.options = formData;
    setSelectedOption("");
    setInputValue("");

    console.log(formData);
    console.log(data);
  };

  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="my-5 flex items-start gap-5">
        <div className="w-1/2">
          <div>
            <label htmlFor="moduleName">Select Modul</label>
            <Select
              options={moduleList}
              getOptionLabel={(modul) => modul.name}
              getOptionValue={(modul) => modul.id}
              onChange={(e) => setData({ ...data, modul_id: e.id })}
            />
          </div>
          {formData.map((section, index) => (
            <div key={index} className="flex items-center gap-5 mt-5">
              <label className="w-2/12">
                Key
                <Select
                  placeholder=""
                  options={variants}
                  value={variants.find(
                    (option) => option.value === data.key
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, index)
                  }
                />
              </label>
              <label className="w-9/12">
                Answer
                <input
                  type="text"
                  className="form-input"
                  value={section.answer}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </label>

              <div className="w-1/12 flex justify-between items-center mt-8">
                {index === formData.length - 1 && (
                  <button className="text-primary" onClick={handleAddForm}>
                    <IoIosAddCircleOutline size="20px" />
                  </button>
                )}
                {formData.length !== 1 && (
                  <button
                    className="text-danger"
                    onClick={() => handleDeleteForm(index)}
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
        <button className="btn-primary" onClick={saveDatas}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateModuleTest;
