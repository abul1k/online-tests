import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getModules } from "../../features/modules/moduleSlice";

// icon
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Module = () => {
  const dispatch = useDispatch();
  const { moduleList } = useSelector(({ module }) => module);

  useEffect(() => {
    dispatch(getModules());
  }, [dispatch]);

  return (
    <div className="card">
      <div className="flex justify-end">
        <Link
          to={ROUTES.CREATEMODULE}
          className="btn-primary mt-3 inline-block"
        >
          Create Modul
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
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unique Name
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
                  {moduleList.map((item) => (
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-center">
                        {item.id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-center">
                        {item.name}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        {item.unique_name}
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

export default Module;
