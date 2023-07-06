const DriveConfiguration = () => {
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
      <div className="flex mb-2 border-b border-gray-700 pb-4">
        <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-700 border border-r-0 border-gray-700 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          http://
        </span>
        <input
          type="text"
          id="website-admin"
          className="rounded-none rounded-r-lg bg-gray-800 border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-700 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
        />
      </div>
    </div>
  );
};

export default DriveConfiguration;
