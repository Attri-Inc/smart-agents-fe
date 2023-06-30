type Props = {
  toggleModal: () => void;
};

const LogCommunicationForm = ({ toggleModal }: Props) => {
  return (
    <form>
      <div className="flex justify-between items-center gap-4 pt-8 w-full">
        <div className="mb-6 w-2/4">
          <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
            Type
          </label>
          <select
            id="countries"
            className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected className="text-inter text-sm text-gray-700">
              Select a type
            </option>
            <option value="US">SMS</option>
            <option value="US">CALL</option>
            <option value="CA">LinkedIn</option>
            <option value="FR">Twitter</option>
            <option value="DE">Facebook</option>
          </select>
        </div>
        <div className="mb-6 w-2/4">
          <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Resheduled the meeting"
          required
        />
      </div>
      <div className="pb-4">
        <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
          Description
        </label>
        <textarea
          id="chat"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end border-t pt-2">
        <button
          onClick={toggleModal}
          className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 bg-indigo-600 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default LogCommunicationForm;
