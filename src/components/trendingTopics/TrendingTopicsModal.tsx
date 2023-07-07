import { Link } from "react-router-dom";
import UserGroup from "../icons/UserGroup";

const TrendingTopicsModal = ({
  currentReadingTopic,
  toggleShareModalMultiple,
}: any) => {
  return (
    <div className="flex gap-20 py-4">
      <div className="w-7/12">
        <p
          className="text-inter text-sm text-justify leading-relaxed
"
        >
          {currentReadingTopic.summary}
        </p>
      </div>
      <div className="w-5/12">
        <div className="">
          <p className="text-inter text-sm font-medium text-gray-900">
            Must Read:
          </p>
          <Link
            to={currentReadingTopic.link}
            target="_blank"
            className="text-inter text-indigo-600 text-sm mr-2 block"
          >
            {currentReadingTopic.link}
          </Link>
        </div>
        <div className="pt-4">
          <h1 className="font-medium text-gray-500 text-inter text-sm py-1">
            Share
          </h1>
          <div className="flex gap-4 items-center">
            <UserGroup
              onClick={toggleShareModalMultiple}
              color="#000000"
              className="opacity-40 cursor-pointer"
            />
            {/* <FaShare
              onClick={toggleShareModal}
              color="#000000"
              className="opacity-40 cursor-pointer"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsModal;
