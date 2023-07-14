import { FaPlus } from "react-icons/fa";

const DriveConfiguration = ({ driveLink, setDriveLink }: any) => {
  const handleAddInput = () => {
    setDriveLink([...driveLink, ""]);
  };

  // Function to handle updating an input text value
  const handleInputChange = (index: number, value: string) => {
    const newList = [...driveLink];
    newList[index] = value;
    setDriveLink(newList);
  };

  return (
    <div>
      <div className="text-white border-b border-gray-700 pb-4">
        <h1 className="text-xl font-semibold">Document Repository Path</h1>
        <p className="text-sm pt-2">
          Provide path for your official document repository
        </p>
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-50 dark:text-white pt-4">
        Enter the path URL (GDrive or OneDrive)
      </label>
      {driveLink.map((input: string, index: any) => (
        <div className="flex mb-2" key={index}>
          <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-700 border border-r-0 border-gray-700 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            http://
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            id="website-admin"
            className="rounded-none rounded-r-lg bg-gray-800 border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-700 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
      ))}
      <button
        onClick={handleAddInput}
        className="text-indigo-600 flex pt-1 pb-4 items-center text-sm font-medium text-inter hover:text-indigo-800"
      >
        <span>
          <FaPlus className="mr-2" />
        </span>{" "}
        Add URL
      </button>
    </div>
  );
};

export default DriveConfiguration;
