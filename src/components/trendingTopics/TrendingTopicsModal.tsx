import React, { useEffect, useState } from "react";
import AutoComplete from "../Common/AutoComplete";
import { Link } from "react-router-dom";
import UserGroup from "../icons/UserGroup";
import { FaShare } from "react-icons/fa";
import { useQuery } from "react-query";
import { generateEmailSubject } from "../../utils/APIHelperFun";

type Props = {};

const TrendingTopicsModal = ({
  currentReadingTopic,
  toggleShareModal,
  setEmailSubject,
  setIsEmailSubjectLoading,
  isSetMultipleSelectModalOpen,
}: any) => {
  useEffect(() => {
    // Function to send API request
    const fetchEmailSubject = async () => {
      try {
        setIsEmailSubjectLoading(true);
        const response = await generateEmailSubject(
          currentReadingTopic.summary
        );
        setEmailSubject(response.data);
        setIsEmailSubjectLoading(false);
      } catch (error) {
        // Handle error
        setIsEmailSubjectLoading(false);
        console.error("Error fetching email subject:", error);
      }
    };

    // Call the function when the component mounts
    fetchEmailSubject();
  }, []);

  //   console.log("subjject", subjject);

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
              onClick={() => {
                toggleShareModal();
                isSetMultipleSelectModalOpen(true);
              }}
              color="#000000"
              className="opacity-40 cursor-pointer"
            />
            <FaShare
              onClick={toggleShareModal}
              color="#000000"
              className="opacity-40 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsModal;
