import { useQuery } from "react-query";
import { fetchTrendingTopics } from "../../utils/APIHelperFun";
import { Link } from "react-router-dom";
import CustomDialog from "../Common/CustomDialog";
import { useState } from "react";
import TrendingUp from "../icons/TrendingUp";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import UserGroup from "../icons/UserGroup";
import { FaShare } from "react-icons/fa";

const TrendingTopics = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentReadingTopic, setCurrentReadingTopic] = useState<any>();
  const toggle = () => setIsOpen(!isOpen);
  const {
    data: trendingTopics,
    isLoading,
    isError,
  } = useQuery("trending_topics", fetchTrendingTopics);

  const { data } = !isLoading && !isError && trendingTopics?.data;
  const getOtherLinks: any[] | string =
    !isLoading && !isError && Array.isArray(data.AI)
      ? Object.entries(data)[0]
      : data;

  const RenderTrendingTile = () => (
    <div className="flex gap-4 items-center">
      <TrendingUp color="#4F46E5" className="font-medium text-indigo-600" />
      <h1 className="font-inter text-base font-medium text-indigo-600 pb-2">
        {getOtherLinks[0] == "AI" ? "Artificial Intelliegence" : ""}
      </h1>
    </div>
  );

  const RenderTrendingTopics = () => {
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
        <div className="w-4/12">
          <div>
            <p className="text-inter text-sm font-medium text-gray-900">
              Must Read:
            </p>
            <Link
              to={currentReadingTopic.link}
              target="_blank"
              className="text-inter text-indigo-600 text-sm"
            >
              <div>{currentReadingTopic.link}</div>
            </Link>
          </div>
          <div className="pt-4">
            <h1 className="font-medium text-gray-500 text-inter text-sm py-1">
              Share
            </h1>
            <div className="flex gap-4 items-center">
              <Twitter color="#000000" className="opacity-40 cursor-pointer " />
              <LinkedIn color="#000000" className="opacity-40 cursor-pointer" />
              <UserGroup
                color="#000000"
                className="opacity-40 cursor-pointer"
              />
              <FaShare color="#000000" className="opacity-40 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="w-full">
        <ul className="w-full flex flex-nowrap mb-8 overflow-x-scroll scrollbar-hide">
          {isLoading ? (
            <FollowUpSkeleton />
          ) : isError ? (
            <div className="w-full py-4">
              <h1 className="text-center text-inter">Something is wrong!</h1>
            </div>
          ) : Array.isArray(getOtherLinks) ? (
            getOtherLinks[1].map((topics: any) => (
              <>
                <li
                  className="border m-4 p-4 rounded-lg inline-block cursor-pointer"
                  onClick={() => {
                    toggle();
                    setCurrentReadingTopic(topics);
                  }}
                >
                  <div className="w-96">
                    <div className="flex gap-4 items-center">
                      <TrendingUp
                        color="#4F46E5"
                        className="font-medium text-indigo-600"
                      />
                      <h1 className="font-inter text-base font-medium text-indigo-600 pb-2">
                        {Array.isArray(getOtherLinks) &&
                        getOtherLinks[0] == "AI"
                          ? "Artificial Intelliegence"
                          : ""}
                      </h1>
                    </div>
                    <div className="">
                      <p className="font-inter text-gray-500 break-words line-clamp-4">
                        {topics.summary}
                      </p>
                    </div>
                  </div>
                </li>
              </>
            ))
          ) : (
            <div className="w-full">
              <h1 className="text-center py-8 text-inter ">{getOtherLinks}</h1>
            </div>
          )}
        </ul>
      </div>
      <CustomDialog
        isOpen={isOpen}
        title={<RenderTrendingTile />}
        toggleModal={toggle}
        width="w-8/12"
        LogComminicationForm={<RenderTrendingTopics />}
      />
    </>
  );
};

export default TrendingTopics;
