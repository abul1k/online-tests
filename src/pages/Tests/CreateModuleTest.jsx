import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import {
  createTest,
  getModules,
  getTests,
} from "../../features/modules/moduleSlice";
import { useNavigate } from "react-router-dom";

const CreateModuleTest = () => {
  const navigate = useNavigate();

  const { moduleList } = useSelector(({ module }) => module);

  const dispatch = useDispatch();
  const editor = useRef(null);
  const correctAnswerRef = useRef(null);
  const [content, setContent] = useState("");

  // correct answer
  const [correctAnswer, setCorrectAnswer] = useState("");

  const [formData, setFormData] = useState([{ key: "", answer: "" }]);

  const handleSelectChange = (selectedOption, index) => {
    const newFormData = [...formData];
    newFormData[index].key = selectedOption.value;
    setFormData(newFormData);
  };

  const handleInputChange = ({ target: { value } }, index) => {
    const newFormData = [...formData];
    newFormData[index].answer = value;
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

  const uploadImage = ({ target: { files } }) => {
    setData({ ...data, image: files[0] });
  };

  const variants = [
    { value: "a", label: "A" },
    { value: "b", label: "B" },
    { value: "c", label: "C" },
    { value: "d", label: "D" },
    { value: "e", label: "E" },
    { value: "f", label: "F" },
    { value: "g", label: "G" },
    { value: "h", label: "H" },
  ];

  const [data, setData] = useState({
    modul_id: null,
    question: "",
    correct_answer: "",
    correct_answer_key: "",
    options: [],
    image: null,
  });

  const saveDatas = () => {
    const newFormData = [...formData];
    setFormData(newFormData);
    data.options = formData;
    data.question = content;
    data.correct_answer = correctAnswer;

    // form data
    const formDataToSend = new FormData();
    formDataToSend.append("modul_id", data.modul_id);
    formDataToSend.append("question", data.question);
    formDataToSend.append("correct_answer", data.correct_answer);
    formDataToSend.append("correct_answer_key", data.correct_answer_key);
    formDataToSend.append("options", data.options);
    formDataToSend.append("image", data.image);

    dispatch(createTest(formDataToSend)).then(() => {
      dispatch(getTests());
      navigate("/module-test");
    });

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
                  value={variants.find((option) => option.value === data.key)}
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

      <hr />
      <div className="mt-5">
        <h1>Correct answer</h1>
        <div className="mt-10 flex gap-5">
          <div>
            <label className="w-1/12">
              Key
              <Select
                placeholder=""
                options={variants}
                onChange={(e) =>
                  setData({ ...data, correct_answer_key: e.value })
                }
              />
            </label>

            <label htmlFor="fileUpload" className="mt-3 inline-block">
              Image
            </label>
            <input
              id="fileUpload"
              type="file"
              className="form-file-input"
              onChange={uploadImage}
            />
          </div>

          <label className="w-11/12">
            Answer
            <JoditEditor
              ref={correctAnswerRef}
              value={correctAnswer}
              onChange={(newContent) => {
                setCorrectAnswer(newContent);
              }}
            />
          </label>
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
