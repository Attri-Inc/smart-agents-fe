import { Tab } from "@headlessui/react";
import { useState } from "react";
import RelationshipInsight from "../components/Common/RelationshipInsight";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Box from "../components/Common/Box";
import Email from "../components/icons/Email";
import Call from "../components/icons/Call";
import Twitter from "../components/icons/Twitter";
import LinkedIn from "../components/icons/LinkedIn";
import QueryInput from "../components/Common/QueryInput";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/sarchbar";
import { useQuery } from "react-query";
import { getcustomerCommonInterest } from "../utils/APIHelperFun";
import CommonInterest from "../components/commomInterest/CommonInterest";
import NetworkContects from "../components/networkContacts/NetworkContects";

const profiles = [
  {
    name: "Jane Copper",
    userid: "jane.copper@example.com",
    img: Avatar2,
    lastConnected: "January 7, 2020",
  },
  {
    name: "Riyaz Kazmi",
    userid: "riyaz.kazmi@example.com",
    img: Avatar1,
    lastConnected: "January 10, 2023",
  },
  {
    name: "Ankit Copper",
    userid: "ankit.copper@example.com",
    img: Avatar2,
    lastConnected: "January 7, 2022",
  },
];

const communications = [
  {
    label: "Email",
    value: "45%",
    icon: <Email color="#B91C1C" />,
    bgColor: "bg-backgoundColor-1",
  },
  {
    label: "Phone",
    value: "25%",
    icon: <Call color=" #0F766E" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "Twitter",
    value: "15%",
    icon: <Twitter color=" #0369A1" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "LinkedIn",
    value: "54%",
    icon: <LinkedIn color=" #0369A1" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "Other",
    value: "5%",
    icon: <Twitter color=" #0369A1" />,
    bgColor: "bg-backgoundColor-2",
  },
];

const Highlights = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const handleRedirectToQueryPage = (): any => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };

  const {
    data: commonCustomersInterest,
    isLoading: isCustomerCommonDataLoading,
    isError: isCustomerCommonDataEror,
  } = useQuery("common_interest", getcustomerCommonInterest);

  const { data } =
    !isCustomerCommonDataEror &&
    !isCustomerCommonDataLoading &&
    commonCustomersInterest;

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full px-8 py-4 h-screen overflow-y-auto">
        <h1 className="font-inter font-semibold text-gray-900 text-2xl ">
          Highlights
        </h1>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex border-b-2 ">
            <Tab
              className={`p-4 hover:text-indigo-600 ${
                selectedIndex === 0
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : ""
              } `}
            >
              Relationship Insights
            </Tab>
            <Tab
              className={`p-4 hover:text-indigo-600 ${
                selectedIndex === 1
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : ""
              } `}
            >
              Network Insights
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <RelationshipInsight
                userDetails={profiles}
                title="Top Connections"
                labelId="topConnections"
              />
              <CommonInterest
                commonCustomersInterest={data?.common_interest}
                isCustomerCommonDataLoading={isCustomerCommonDataLoading}
                isCustomerCommonDataEror={isCustomerCommonDataEror}
              />
            </Tab.Panel>
            <Tab.Panel>
              <div className="py-4">
                <h3 className="text-lg font-inter font-medium text-gray-900">
                  Network growth
                </h3>
                <div>
                  <NetworkContects />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-inter font-medium text-gray-900">
                  Communication Channel Breakdown
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {communications.map((contact) => (
                    <Box {...contact} />
                  ))}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="w-full py-4 flex items-end">
          <QueryInput
            onclick={handleRedirectToQueryPage}
            onChange={handleOnQuerySearch}
            value={userAskedText}
          />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Highlights;
