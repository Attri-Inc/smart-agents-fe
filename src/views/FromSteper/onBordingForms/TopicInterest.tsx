import { useState } from "react";
import {
  InterestTopicsKeywordType,
  interestTopicsKeyword,
} from "../../../utils/commonData";
import CustomDialog from "../../../components/Common/CustomDialog";
import { FaPlus, FaTimes } from "react-icons/fa";
import { randomId } from "../../../utils/helper";

const TopicInterest = () => {
  const [interestTopics, setInterestTopics] = useState<
    InterestTopicsKeywordType[]
  >(interestTopicsKeyword);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    if (value.trim() === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };
  const toggleModal = () => setIsOpen(!isOpen);

  const handleMouseEnter = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleCustomTopic = () => {
    setInterestTopics((prev: any) => [
      ...prev,
      { id: randomId(10), label: value },
    ]);
    toggleModal();
  };

  console.log("interestTopics", interestTopics);
  return (
    <div>
      <div className="text-white  border-b border-gray-700 pb-4">
        <h1 className="text-xl font-semibold">
          Select your Topics of Interest
        </h1>
        <p className="text-sm pt-2">
          Adding topics of interest will help us keep you up-to-date on the
          current happenings in your areas of interest
        </p>
      </div>
      <div className="pt-4  border-b border-gray-700 pb-4">
        <div className="flex flex-wrap">
          {interestTopics.map((topic: any) => (
            <button
              onMouseEnter={() => handleMouseEnter(topic.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {}}
              className={`py-2 px-4 cursor-pointer text-sm bg-gray-800 text-gray-400 text-inter flex items-center gap-4 justify-between font-medium m-3 rounded-full
                 hover:bg-black hover:text-white`}
              key={topic.id}
            >
              {topic.label}{" "}
              {isHovered == topic.id && <FaTimes className="close-icon" />}
            </button>
          ))}
        </div>

        <button
          onClick={toggleModal}
          className=" flex items-center gap-4 text-indigo-600 text-sm font-medium text-inter hover:text-indigo-800 pb-1"
        >
          <FaPlus /> Add your Own
        </button>
      </div>
      <CustomDialog
        title="Log Communication"
        isOpen={isOpen}
        toggleModal={toggleModal}
        width="w-4/12"
        LogComminicationForm={
          <div className="">
            <div className="pt-4">
              <label className="block text-sm font-medium text-gray-700">
                Add your custom Tag
              </label>
              <input
                className={`mt-1 px-3 py-2 w-full border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  error ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                placeholder="Enter you topic"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
            <div className="flex gap-4 justify-end pt-4">
              <button
                onClick={toggleModal}
                className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCustomTopic}
                className="py-2 px-3 bg-indigo-600 text-white rounded-md flex items-center gap-3"
              >
                Save
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TopicInterest;
