import Email from "../components/icons/Email";
import Call from "../components/icons/Call";
import Calendar from "../components/icons/Calendar";
import Twitter from "../components/icons/Twitter";
import QueryInput from "../components/Common/QueryInput";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

import Sidebar from "../components/sidebar";
import EmailCommunication from "../components/Common/EmailCommunication";
import { getTimeLines } from "../utils/APIHelperFun";
import { useQuery } from "react-query";
import { FaMeetup, FaSms } from "react-icons/fa";

const iconsList = [
  { id: 1, label: "sms", icon: <FaSms className="bg-indigo-100 text-2xl" /> },
  { id: 2, label: "email", icon: <Email /> },
  { id: 3, label: "call", icon: <Call /> },
  { id: 4, label: "Calendar", icon: <Calendar /> },
  { id: 5, label: "twitter", icon: <Twitter /> },
  {
    id: 6,
    label: "meeting",
    icon: <FaMeetup className="bg-indigo-100 text-2xl" />,
  },
];

const CustomerDetails = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const {
    data: timeLines,
    isLoading: timeLinesDataLoading,
    isError: timeLinesDataEror,
  } = useQuery("time_lines", getTimeLines);

  const { scheduled_items } =
    !timeLinesDataLoading && !timeLinesDataEror && timeLines.data;
  console.log("timeLines", timeLines);

  const {
    state: { name, connectionDetails, socialMedia, img },
  } = useLocation();

  const handleRedirectToQueryPage = () => navigate("/query");

  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };

  const getTimelineIcons = (type: string): JSX.Element => {
    const icon = iconsList.find(
      (timelineIcon) => timelineIcon.label?.toLowerCase() == type.toLowerCase()
    );
    if (icon) return icon.icon;
    return <Email />;
  };

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto">
        <div className="w-full px-8 py-4 ">
          <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4 ">
            Customer details
          </h1>
          <div className="w-full flex justify-between">
            <div className="w-3/12">
              <div className="divide-y divider-gray-200 dark:divide-gray-700 border-y border-x text-sm text-gray-500">
                <div className=" flex items-center justify-between px-4 py-4">
                  <div className="flex flex-col items-center">
                    <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                      Picture
                    </p>
                    <div className="w-16 h-16 rounded">
                      <img src={img} className="h-full w-full bg-contain" />
                    </div>
                  </div>
                  <span className="text-indigo-600 text-sm font-medium cursor-pointer ">
                    Update
                  </span>
                </div>
                <div className="flex items-center justify-between px-4 py-4">
                  <div>
                    <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                      Full name
                    </p>
                    <p className="font-inter text-gray-900 text-sm pb-1">
                      {name}
                    </p>
                  </div>
                  <span className="text-indigo-600 text-sm font-medium cursor-pointer ">
                    Update
                  </span>
                </div>
                {socialMedia.map((media: any) => (
                  <div className="flex items-center justify-between px-4 py-4">
                    <div>
                      <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                        {media.label}
                      </p>
                      <p className="font-inter text-gray-900 text-sm pb-1">
                        {media.value}
                      </p>
                    </div>
                    <span className="text-indigo-600 text-sm font-inter cursor-pointer ">
                      Update
                    </span>
                  </div>
                ))}
                {connectionDetails.map((connection: any) => (
                  <div className="px-4 py-4">
                    <div>
                      <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                        {connection.label}
                      </p>
                      <p className="font-inter text-gray-500 text-sm pb-1">
                        {connection.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-6/12 flex">
              <div className="w-full px-2 border-r">
                <div className="flex justify-center h-fit gap-2 divide-x pb-4 ">
                  <div className="">
                    <p className="font-inter text-gray-500 font-medium text-base pb-2">
                      Last Connected
                    </p>
                    <span className="font-inter text-sm font-bold text-gray-700">
                      Tue 23 May
                    </span>
                  </div>
                  <div className="pl-2">
                    <p className="font-inter text-gray-500 font-medium text-base pb-2">
                      No of Interaction
                    </p>
                    <span className="font-inter text-sm font-bold text-gray-700">
                      25
                    </span>
                  </div>
                  <div className="pl-2 text-center">
                    <p className="font-inter text-gray-500 font-medium text-base pb-2">
                      Next meet
                    </p>

                    <div className="py-4 bg-amber-50 px-8 border-2 border-red-200 rounded-2xl divide-none cursor-pointer">
                      <p className="font-inter text-base font-medium text-gray-500">
                        Google meet
                      </p>
                      <span className="font-inter text-base font-bold text-gray-900 py-2">
                        23/05/2023
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <p className="font-inter text-gray-500 font-medium text-lg pb-2">
                    Log Communications
                  </p>
                  <div className="w-full">
                    <input
                      className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Send a message."
                    />
                    <button className="mt-2 py-1 px-6 hover:bg-blue-400 bg-blue-300 text-lg font-inter font-medium rounded-2xl text-gray-900">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="py-4">
                  <p className="font-inter text-gray-500 font-medium text-lg">
                    Email Commnunication
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <EmailCommunication />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <div className="divider-gray-200 dark:divide-gray-700 text-sm text-gray-500">
                <div className="px-8">
                  <ul className="relative border-l border-gray-200 dark:border-gray-200">
                    {!timeLinesDataLoading &&
                      !timeLinesDataEror &&
                      scheduled_items?.map((timeline: any) => (
                        <li className="mb-20 ml-6 marker:">
                          <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            {getTimelineIcons(timeline.interaction_type)}
                          </span>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm font-inter mr-2 px-2.5 py-0.5 ml-3 capitalize">
                              {timeline.interaction_type}
                            </span>
                            <span className="text-gray-500 font-inter">
                              {timeline.dispatch_time.slice(0, 16)}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-28 py-8 bg-gradient-to-t from-indigo-200 border-t text-black sticky bottom-0">
          <QueryInput
            onclick={handleRedirectToQueryPage}
            onChange={handleOnQuerySearch}
            value={userAskedText}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
