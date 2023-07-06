const CustomTextInput = ({
  value,
  onChange,
  label,
  insideLeftLabel,
  placeholder,
}: any) => {
  return (
    <>
      {label && (
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          {label}
        </label>
      )}
      <div className="flex mb-2">
        {insideLeftLabel && (
          <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-700 border border-r-0 border-gray-700 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            {insideLeftLabel}
          </span>
        )}
        <input
          onChange={onChange}
          value={value}
          type="text"
          id="website-admin"
          className="rounded-none rounded-r-lg bg-gray-800 border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-700 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default CustomTextInput;
