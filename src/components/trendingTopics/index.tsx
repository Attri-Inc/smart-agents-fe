import { useQuery } from "react-query";
import { fetchTrendingTopics } from "../../utils/APIHelperFun";
import CustomDialog from "../Common/CustomDialog";
import { useState } from "react";
import TrendingUp from "../icons/TrendingUp";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import TrendingTopicsModal from "./TrendingTopicsModal";
import ShareEmailForm from "./ShareEmailForm";

const TrendingTopics = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [emailSubject, setEmailSubject] = useState<string>("");
  const [currentReadingTopic, setCurrentReadingTopic] = useState<any>();
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isMultipleSelectModalOpen, isSetMultipleSelectModalOpen] =
    useState<boolean>(false);

  const toggleShareModal = () => setIsShareModalOpen(!isShareModalOpen);
  const toggleShareModalMultiple = () =>
    isSetMultipleSelectModalOpen(!isMultipleSelectModalOpen);
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
        {currentReadingTopic.subject}
      </h1>
    </div>
  );
  const RenderShareEmailTitle = () => (
    <div className="flex gap-4 items-center">
      <TrendingUp color="#4F46E5" className="font-medium text-indigo-600" />
      <h1 className="font-inter text-base font-medium text-indigo-600 pb-2">
        Send an Email
      </h1>
    </div>
  );

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
                    setEmailMessage(topics.summary);
                    setEmailSubject(topics.subject);
                  }}
                >
                  <div className="w-96">
                    <div className="flex gap-4">
                      <div className="mt-2">
                        <TrendingUp
                          color="#4F46E5"
                          className="font-medium text-indigo-600"
                        />
                      </div>
                      <h1 className="font-inter text-base font-medium text-indigo-600 pb-2">
                        {topics.subject}
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
        LogComminicationForm={
          <TrendingTopicsModal
            currentReadingTopic={currentReadingTopic}
            toggleShareModal={toggleShareModal}
            toggleShareModalMultiple={toggleShareModalMultiple}
          />
        }
      />
      <CustomDialog
        isOpen={isShareModalOpen}
        title={<RenderShareEmailTitle />}
        toggleModal={toggleShareModal}
        width="w-6/12"
        LogComminicationForm={
          <ShareEmailForm
            isMultipleSelectModalOpen={isMultipleSelectModalOpen}
            toggleShareModal={toggleShareModal}
            setEmailMessage={setEmailMessage}
            setEmailSubject={setEmailSubject}
            currentReadingTopic={currentReadingTopic}
            emailSubject={emailSubject}
            emailMessage={emailMessage}
          />
        }
      />
      <CustomDialog
        isOpen={isMultipleSelectModalOpen}
        title={<RenderShareEmailTitle />}
        toggleModal={toggleShareModalMultiple}
        width="w-6/12"
        LogComminicationForm={
          <ShareEmailForm
            isMultipleSelectModalOpen={isMultipleSelectModalOpen}
            toggleShareModal={toggleShareModalMultiple}
            setEmailMessage={setEmailMessage}
            setEmailSubject={setEmailSubject}
            currentReadingTopic={currentReadingTopic}
            emailSubject={emailSubject}
            emailMessage={emailMessage}
          />
        }
      />
    </>
  );
};

export default TrendingTopics;
