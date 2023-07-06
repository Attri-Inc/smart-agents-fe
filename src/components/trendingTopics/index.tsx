import { useQuery } from "react-query";
import {
  fetchTrendingTopics,
  sendEmailToSingleContact,
} from "../../utils/APIHelperFun";
import CustomDialog from "../Common/CustomDialog";
import { useState } from "react";
import TrendingUp from "../icons/TrendingUp";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import AutoComplete from "../Common/AutoComplete";
import TrendingTopicsModal from "./TrendingTopicsModal";
import { contact } from "./sampleData";
import Spinner from "../Common/skeleton/Spinner";

const TrendingTopics = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEmailSubjectLoading, setIsEmailSubjectLoading] =
    useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false);
  const [currentReadingTopic, setCurrentReadingTopic] = useState<any>();
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [emailSubject, setEmailSubject] = useState<string>("");
  const [selected, setSelected] = useState();
  const [selectContacts, setSelectContacts] = useState<any[]>([]);
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

  // const {
  //   data: customerList,
  //   isLoading: isCustomerListLoading,
  //   isError: isCustomerListErorr,
  // } = useQuery("emailRecipent-list", () => getCustomerList());

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
  const RenderShareEmailTitle = () => (
    <div className="flex gap-4 items-center">
      <TrendingUp color="#4F46E5" className="font-medium text-indigo-600" />
      <h1 className="font-inter text-base font-medium text-indigo-600 pb-2">
        Send an Email
      </h1>
    </div>
  );

  const handleSendEmailToSingleContact = async () => {
    console.log("toggleShareModalMultiple", toggleShareModalMultiple);
    try {
      setIsEmailSending(true);
      await sendEmailToSingleContact(
        currentReadingTopic.summary,
        selected.registered_email
      );
      setIsEmailSending(false);
      // setEmailSubject(response.data);
    } catch (error) {
      setIsEmailSending(false);
      // Handle error
      console.error("Error fetching email subject:", error);
    }
  };

  const handleSingleSendEmailClose = () => {
    toggleShareModal();
    setEmailSubject(" ");
    setIsEmailSubjectLoading(false);
    toggleShareModalMultiple();
  };
  const handleMultipleContactModalOpen = () => {};

  console.log("selectContacts", selectContacts);
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
        LogComminicationForm={
          <TrendingTopicsModal
            currentReadingTopic={currentReadingTopic}
            toggleShareModal={toggleShareModal}
            setEmailSubject={setEmailSubject}
            setIsEmailSubjectLoading={setIsEmailSubjectLoading}
            isSetMultipleSelectModalOpen={isSetMultipleSelectModalOpen}
          />
        }
      />

      <CustomDialog
        isOpen={isShareModalOpen}
        title={<RenderShareEmailTitle />}
        toggleModal={handleSingleSendEmailClose}
        width="w-6/12"
        LogComminicationForm={
          <div>
            <div className="mb-6">
              <label className="block mb-2 font-medium text-inter text-sm text-gray-700 dark:text-white">
                Subject
              </label>
              <div className="flex relative items-center">
                <input
                  type="text"
                  id="title"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="shadow-sm bg-white border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Subject"
                  required
                />
                {isEmailSubjectLoading && (
                  <div className="absolute right-0">
                    <Spinner size="w-6 h-6" />
                  </div>
                )}
              </div>
            </div>
            <div className="pb-4">
              <label className="block mb-2 text-inter font-medium text-sm text-gray-700 dark:text-white">
                Body
              </label>
              <textarea
                id="chat"
                rows={8}
                onChange={(e) => setEmailMessage(e.target.value)}
                value={emailMessage}
                className="block rounded-lg p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Body"
              />
            </div>
            <div className="pb-6">
              <label className="block mb-2 text-inter font-medium text-sm text-gray-700 dark:text-white">
                Contact List
              </label>
              {!isError && !isLoading && (
                <AutoComplete
                  options={contact}
                  setSelected={setSelected}
                  setSelectContacts={setSelectContacts}
                  selected={selected}
                  isMultipleSelectModalOpen={isMultipleSelectModalOpen}
                />
              )}
            </div>
            <ul className="flex gap-2 flex-wrap items-center">
              {isMultipleSelectModalOpen &&
                selectContacts.map((contact: any) => (
                  <li className="py-1 px-2 rounded-full bg-indigo-400 text-white">
                    {contact.name}
                  </li>
                ))}
            </ul>
            <div className="flex gap-4 justify-end pt-2">
              <button
                onClick={toggleShareModal}
                className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSendEmailToSingleContact}
                className="py-2 px-3 bg-indigo-600 text-white rounded-md flex items-center gap-3"
              >
                Save{" "}
                {isEmailSending && <Spinner size="w-5 h-5" className="ml-2" />}
              </button>
            </div>
          </div>
        }
      />
    </>
  );
};

export default TrendingTopics;
