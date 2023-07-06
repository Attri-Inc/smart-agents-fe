import React, { useState } from "react";
import { randomId } from "../../../utils/helper";
import { FaPlus } from "react-icons/fa";
import FileUpload from "./FileUpload";

type Props = {};

const FavouriteWebsites = (props: Props) => {
  const [organizationWebsites, setOrganizationWebsite] = useState<any[]>([]);

  const handleAddOrganizationWebsite = () => {
    setOrganizationWebsite((prev: any) => [...prev, { id: randomId(5) }]);
  };
  const handleRemoveOrganizationWebsite = (id: string) => {
    setOrganizationWebsite(() => {
      return organizationWebsites.filter((website: any) => website.id != id);
    });
  };
  return (
    <div>
      <div className="text-white border-b border-gray-700 pb-4">
        <h1 className="text-lg font-semibold">Favourite Websites</h1>
        <p className="text-sm pt-2">
          Provide your favourite list of websites that you frequently keep tab
          on
        </p>
      </div>
      <div className="pt-4 border-b border-gray-700">
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          Website Link
        </label>
        <div className="flex mb-2">
          <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-700 border border-r-0 border-gray-700 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            http://
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-r-lg bg-gray-800 border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-700 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="URL"
          />
        </div>
        {organizationWebsites.map((url: any) => (
          <div className="flex mb-2">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-700 border border-r-0 border-gray-700 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              http://
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-800 border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-700 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="URL"
            />
          </div>
        ))}
        <button
          onClick={handleAddOrganizationWebsite}
          className="text-indigo-600 flex pt-1 pb-4 items-center text-sm font-medium text-inter hover:text-indigo-800"
        >
          <span>
            <FaPlus className="mr-2" />
          </span>{" "}
          Add URL
        </button>
      </div>
      <div className="pt-4">
        <FileUpload />
      </div>
    </div>
  );
};

export default FavouriteWebsites;
