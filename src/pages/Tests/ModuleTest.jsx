import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTests } from "../../features/modules/moduleSlice";

// icon
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const ModuleTest = () => {
  const dispatch = useDispatch();
  const { testList } = useSelector(({ module }) => module);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="flex justify-end">
        <Link
          to={ROUTES.CREATEMODULETEST}
          className="btn-primary mt-3 inline-block"
        >
          Create Module Test
        </Link>
      </div>
      <div class="flex flex-col mt-3">
        <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Modul
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quetion
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Correct Answer Key
                    </th>

                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {testList.map((item) => (
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-center">
                        {item.id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-center">
                        {item.modul_name}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        <span
                          className="max-w-[200px] inline-block overflow-hidden"
                          dangerouslySetInnerHTML={{ __html: item.question }}
                        ></span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {item.correct_answer_key}
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button className="btn-warning btn-sm">
                          <AiFillEdit />
                        </button>

                        <button className="btn-danger btn-sm ml-3">
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleTest;
