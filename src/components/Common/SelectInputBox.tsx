import { Placeholder } from "@aws-amplify/ui-react";
import React from "react";

type Props = {};

const SelectInputBox = ({ label, options, placeholder }: any) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-white dark:text-white">
        {label}
      </label>
      <select
        id="countries"
        className="bg-gray-700 border border-gray-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </>
  );
};

export default SelectInputBox;
