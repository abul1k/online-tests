import React from "react";

const CreateModule = () => {
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
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="modulUniqueName">Modul unique name</label>
          <input
            id="modulUniqueName"
            type="text"
            className="form-input"
            placeholder="Modul unique name"
          />
        </div>
      </form>

      <div className="flex justify-end mt-10 mb-5">
        <button className="btn-primary">Save</button>
      </div>
    </div>
  );
};

export default CreateModule;
