import React from "react";
import { deleteTest, getTests } from "../../features/modules/moduleSlice";
import { useDispatch } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

const DeleteModal = ({ isModalOpen, testId, closeModal }) => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deleteTestAction = () => {
    if (isSubmitted) return;
    dispatch(deleteTest(testId)).then(() => {
      dispatch(getTests());
      closeModal();
      setIsSubmitted(false);
    });
    setIsSubmitted(true);
  };

  return (
    <div
      class={
        isModalOpen
          ? "fixed z-10 inset-0 overflow-y-auto"
          : "opacity-0 pointer-events-none"
      }
    >
      <div
        class={
          isModalOpen
            ? "flex items-center justify-center min-h-screen"
            : "hidden"
        }
      >
        <div class="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div class="bg-gray-100 p-4">
            <h3 class="text-lg font-medium text-gray-900">Delete Test</h3>
          </div>
          <div class="p-4">
            <p class="text-gray-700">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div class="bg-gray-100 p-4 flex gap-5 justify-end">
            <button class="btn-secondary" onClick={closeModal}>
              Cancel
            </button>
            {isSubmitted ? (
              <button
                type="button"
                disabled
                className="btn-primary flex gap-3 items-center justify-between"
              >
                <AiOutlineLoading3Quarters className="animate-spin" />
                Processing...
              </button>
            ) : (
              <button
                type="submit"
                className="btn-danger"
                onClick={deleteTestAction}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
