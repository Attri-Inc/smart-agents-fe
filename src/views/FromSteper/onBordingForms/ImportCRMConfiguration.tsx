import { useState } from "react";
import SelectOption from "./SelectOption";
import { FaTimes } from "react-icons/fa";
import Upload from "../../../components/icons/Upload";
import Checkbox from "../../../components/Common/CheckBox";

const people: any[] = [{ name: "Copper CRM" }];

const ImportCRMConfiguration = () => {
  const [selectedCRM, setSelectedCRM] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [autoImport, setAutoImport] = useState<boolean>(true);

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    setSelectedFile([...selectedFile, ...files]);
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setAutoImport(isChecked);
  };

  return (
    <div>
      <div className="text-white border-b border-gray-700 pb-4">
        <h1 className="text-lg font-semibold">Import CRM Data</h1>
        <p className="text-sm pt-4">Please provide path for the files</p>
      </div>
      <div className="pt-4">
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          Select CRM
        </label>
        <div className="mb-4">
          <SelectOption
            options={people}
            selected={selectedCRM}
            setSelected={setSelectedCRM}
            placeholder="choose one"
            rounded="rounded-lg"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Checkbox
            label="Option 2"
            checked={autoImport}
            onChange={handleCheckboxChange}
          />
          {/* <input
            id="terms"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-4 h-4 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          /> */}
          <p className="text-gray-50 text-sm font-medium">Auto Import</p>
        </div>
        <div className="w-full container mx-auto py-10">
          <div className="relative rounded-sm border border-gray-700">
            <h2 className="absolute flex top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className=" bg-authBackgoundColor text-gray-50 px-2 text-sm font-medium">
                OR
              </span>
            </h2>
          </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          Upload CSV (Recommended)
        </label>
        {selectedFile.length > 0 ? (
          <div className="flex flex-wrap">
            {selectedFile.map((file: any) => (
              <button
                onClick={() => {}}
                className={`py-1 px-1 cursor-pointer text-sm uppercase bg-gray-800 text-gray-400 text-inter flex items-center gap-2 justify-between font-medium my-2 rounded-sm
                 hover:bg-black hover:text-white`}
                key={file.name}
              >
                {file.name} <FaTimes className="close-icon" />
              </button>
            ))}
          </div>
        ) : (
          <label className="w-full flex items-center justify-center h-32 bg-lightBlue rounded-2xl">
            <div className="cursor-pointer px-4 py-3 rounded-full flex justify-center items-center gap-4 bg-gray-800 text-indigo-600 font-medium">
              <Upload />
              {selectedFile && selectedFile.name}

              <input
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
                disabled={autoImport}
              />
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default ImportCRMConfiguration;
