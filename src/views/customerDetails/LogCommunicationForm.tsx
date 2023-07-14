import { useState } from "react";
import DropdownMenuList from "../../components/Common/DropdownMenuList";
import { logCommunicationType } from "../../utils/commonData";
import { addToLogCommunication } from "../../utils/APIHelperFun";
import Spinner from "../../components/Common/skeleton/Spinner";

type Props = {
  toggleModal: () => void;
};

const LogCommunicationForm = ({ toggleModal }: Props) => {
  const [logType, setLogType] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("registered_email", "johnwick@gmail.com");
    formData.append("description", description);
    formData.append("title", title);
    formData.append("type", logType);
    formData.append("date", date);

    try {
      setIsLoading(true);
      const response = await addToLogCommunication(formData);
      console.log("response", response);
      if (response.status === 200) {
        toggleModal();
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex justify-between items-center gap-4 pt-8 w-full">
        <div className="mb-6 w-2/4">
          <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
            Type
          </label>
          <DropdownMenuList
            options={logCommunicationType}
            selected={logType}
            setSelected={setLogType}
            rounded="rounded-md"
            placeholder="Choose one"
          />
        </div>
        <div className="mb-6 w-2/4">
          <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
            Date
          </label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="chat"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end border-t pt-2">
        <button
          type="button"
          onClick={toggleModal}
          className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 flex gap-2 items-center bg-indigo-600 text-white rounded-md"
        >
          Save {isLoading && <Spinner size="w-4 h-4" />}
        </button>
      </div>
    </form>
  );
};

export default LogCommunicationForm;
