import React, { useState } from "react";
import { createModule } from "../features/modules/moduleSlice";
import { useDispatch } from "react-redux";

const CreateModule = () => {
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState("");
  const [moduleUniqueName, setModuleUniqueName] = useState("");

  return (
    <div className="card">
      <form className="my-5 flex items-center gap-10">
        <div className="w-1/2">
          <label htmlFor="moduleName">Modul name</label>
          <input
            id="moduleName"
            type="text"
            className="form-input"
            placeholder="Modul name"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="modulUniqueName">Modul unique name</label>
          <input
            id="modulUniqueName"
            type="text"
            className="form-input"
            placeholder="Modul unique name"
            value={moduleUniqueName}
            onChange={(e) => setModuleUniqueName(e.target.value)}
          />
        </div>
      </form>

      <div className="flex justify-end mt-10 mb-5">
        <button
          className="btn-primary"
          onClick={() =>
            dispatch(
              createModule({ name: moduleName, unique_name: moduleUniqueName })
            )
          }
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateModule;
