import React, { useState } from "react";
import CustomDialog from "../../components/Common/CustomDialog";
import ProfilePic from "../../assets/Ellipse 1.png";
import { randomId } from "../../utils/helper";
import { FaMinus } from "react-icons/fa";
import {
  InterestTopicsKeywordType,
  interestTopicsKeyword,
} from "../../utils/commonData";
import InterestTopicsList from "./component/InterestTopicsList";
type Props = {};

const ProfileSetting = (props: Props) => {
  const [organizationWebsites, setOrganizationWebsite] = useState<any[]>([]);
  const [interestWebsites, setInterestWebsites] = useState<any[]>([]);
  const [interestTopics, setInterestTopics] = useState<
    InterestTopicsKeywordType[]
  >([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [documentPaths, setDocumentPath] = useState<any[]>([]);

  const handleAddOrganizationWebsite = () => {
    setOrganizationWebsite((prev) => [...prev, { id: randomId(5) }]);
  };
  const handleRemoveOrganizationWebsite = (id: string) => {
    setOrganizationWebsite(() => {
      return organizationWebsites.filter((website) => website.id != id);
    });
  };
  const handleAddInterestWebsites = () => {
    setInterestWebsites((prev) => [...prev, { id: randomId(5) }]);
  };
  const handleRemoveInterestWebsites = (id: string) => {
    setInterestWebsites(() => {
      return interestWebsites.filter((website) => website.id != id);
    });
  };

  const handleAddDocsPath = () => {
    setDocumentPath((prev) => [...prev, { id: randomId(5) }]);
  };
  const handleRemoveDocsPath = (id: string) => {
    setDocumentPath(() => {
      return documentPaths.filter((website) => website.id != id);
    });
  };

  const handleAddRemoveInterestTopics = (item: InterestTopicsKeywordType) => {
    const isAvailable = interestTopics.find(
      (topicItems: InterestTopicsKeywordType) => topicItems.id === item.id
    );

    if (isAvailable) {
      setInterestTopics(interestTopics.filter((topic) => topic.id !== item.id));
    } else {
      setInterestTopics((prev) => [...prev, item]);
    }
  };

  const RenderTopicsList = () => {
    return (
      <div className="w-full my-4">
        {interestTopicsKeyword?.map((topic: InterestTopicsKeywordType) => {
          const isSelected = interestTopics.find(
            (item: InterestTopicsKeywordType) => item.id === topic.id
          );
          return (
            <span
              onClick={() => handleAddRemoveInterestTopics(topic)}
              className={`py-2 px-4 cursor-pointer text-sm text-inter font-medium m-2 rounded-full inline-block ${
                isSelected
                  ? "bg-black text-white"
                  : " bg-gray-200 text-gray-900"
              } hover:bg-black hover:text-white`}
              key={topic.id}
            >
              {topic.label}
            </span>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="py-4">
        <div className="border-b pb-2">
          <h1 className="text-lg font-medium text-gray-900 text-inter ">
            Profile Settings
          </h1>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Profile Picture
            </p>
          </div>

          <div className="flex w-5/12">
            <div className="w-20 h-20">
              <img
                src={ProfilePic}
                className="h-full w-full rounded-full object-fill"
              />
            </div>
          </div>
        </div>
        <div className="border-b py-4 flex w-full">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">Name</p>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="Roy Kent"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div className="border-b py-4 flex w-full">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">Email</p>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="roykent@gmail.com"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Country of Residence
            </p>
            <small className="tex-inter text-gray-500">
              The country where you currently live
            </small>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="USA"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Organization
            </p>
            <small className="tex-inter text-gray-500">
              The company or institution you're currently affiliated with
            </small>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="Attri AI"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Organization webpage
            </p>
            <small className="tex-inter text-gray-500">
              The official URL(s) for your organization.
            </small>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="Attri AI"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {organizationWebsites.map((website: any) => (
              <div className="w-7/12 py-2 flex items-center relative">
                <input
                  type="text"
                  value="Attri AI"
                  id="company"
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
                <FaMinus
                  className="absolute right-3 cursor-pointer"
                  onClick={() => handleRemoveOrganizationWebsite(website.id)}
                />
              </div>
            ))}
            <button
              onClick={handleAddOrganizationWebsite}
              className="text-indigo-600 text-sm font-medium text-inter hover:text-indigo-800 pb-1"
            >
              Add another
            </button>
          </div>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Topics of Interest
            </p>
            <small className="tex-inter text-gray-500">
              Mention your areas of interest.
            </small>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              {interestTopics.length > 0 ? (
                <InterestTopicsList
                  interestTopics={interestTopics}
                  toggleModal={toggleModal}
                />
              ) : (
                <h1>No Interest selected</h1>
              )}
            </div>
            {interestTopics.length <= 5 && (
              <button
                onClick={toggleModal}
                className="text-indigo-600 text-sm font-medium text-inter hover:text-indigo-800 pb-1"
              >
                Add topics
              </button>
            )}
          </div>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Websites of Interest
            </p>
            <small className="tex-inter text-gray-500">
              List of websites you frequently visit or find useful.
            </small>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="Attri AI"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {interestWebsites.map((interest: any) => (
              <div className="w-7/12 py-2 flex items-center relative">
                <input
                  type="text"
                  value="www.attri.ai"
                  id="company"
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
                <FaMinus
                  className="absolute right-3 cursor-pointer"
                  onClick={() => handleRemoveInterestWebsites(interest.id)}
                />
              </div>
            ))}
            <button
              onClick={handleAddInterestWebsites}
              className="text-indigo-600 text-sm font-medium text-inter hover:text-indigo-800 pb-1"
            >
              Add another
            </button>
          </div>
        </div>
        <div className="border-b py-4 flex">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Internal Documents Path
            </p>
            <small className="tex-inter text-gray-500">
              Provide paths to your Google Drive, Dropbox, or OneDrive where you
              store internal documents.
            </small>
          </div>
          <div className="w-7/12">
            <div className="w-7/12">
              <input
                type="text"
                value="www.attri.ai"
                id="company"
                className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            {documentPaths.map((docsPath: any) => (
              <div className="w-7/12 py-2 flex items-center relative">
                <input
                  type="text"
                  value="www.attri.ai"
                  id="company"
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
                <FaMinus
                  className="absolute right-3 cursor-pointer"
                  onClick={() => handleRemoveDocsPath(docsPath.id)}
                />
              </div>
            ))}
            <button
              onClick={handleAddDocsPath}
              className="text-indigo-600 text-sm font-medium text-inter hover:text-indigo-800 pb-1"
            >
              Add another
            </button>
          </div>
        </div>
      </div>
      <CustomDialog
        title="Log Communication"
        isOpen={isOpen}
        toggleModal={toggleModal}
        width="w-4/12"
        LogComminicationForm={<RenderTopicsList />}
      />
    </>
  );
};

export default ProfileSetting;
