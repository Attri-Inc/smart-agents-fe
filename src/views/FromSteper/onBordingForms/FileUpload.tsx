import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setErrorMessage("");
    }
  };

  return (
    <div className="flex items-center">
      <label className="cursor-pointer px-4 py-3 rounded-full flex justify-center gap-4 bg-gray-800 text-indigo-600 font-medium">
        <FiUpload className="w-6 h-6 text-indigo-600" />
        {selectedFile ? selectedFile.name : " Upload Bookmarks"}

        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
      </label>
      {errorMessage && <p className="ml-3 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FileUpload;
