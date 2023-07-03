import RelationshipInsight from "../components/Common/RelationshipInsight";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import QueryInput from "../components/Common/QueryInput";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useQuery } from "react-query";
import {
  getNetworHighlightsByEmail,
  // getcustomerCommonInterest,
} from "../utils/APIHelperFun";
import NetworkContects from "../components/networkContacts/NetworkContects";
import NewtworkBreakdown from "../components/Common/NewtworkBreakdown";
import CardLoader from "../components/Common/skeleton/CardLoader";
import AudioSpeech from "../components/AudioSpeech";

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

const Highlights = () => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const handleRedirectToQueryPage = (): any => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };

  // const {
  //   data: commonCustomersInterest,
  //   isLoading: isCustomerCommonDataLoading,
  //   isError: isCustomerCommonDataEror,
  // } = useQuery("common_interest", getcustomerCommonInterest);
  const {
    data: networkGrowthRatio,
    isLoading: isNetworkGrowthRatioLoading,
    isError: isNetworkGrowthRatioEror,
  } = useQuery("network_breakdown", () =>
    getNetworHighlightsByEmail("aaron@acleelaw.com")
  );

  const { network_highlights } =
    !isNetworkGrowthRatioLoading &&
    !isNetworkGrowthRatioEror &&
    networkGrowthRatio.data;

  return (
    <div className="relative h-screen overflow-hidden flex divide-gray-200 divide-x">
      <Sidebar />
      <div className="w-full flex flex-col h-screen overflow-auto">
        <div className="h-full">
          <div className="w-full px-12 py-4 h-screen overflow-y-auto">
            <h1 className="font-inter tracking-wide font-bold text-gray-900 text-xl pb-4">
              Newtwork Highlights
            </h1>

            <div className="py-4">
              <h3 className="text-lg font-inter font-medium text-gray-900">
                Network growth
              </h3>
              <div>
                <NetworkContects />
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-lg font-inter font-medium text-gray-900">
                Communication Channel Breakdown
              </h3>
              {isNetworkGrowthRatioLoading ? (
                <CardLoader />
              ) : isNetworkGrowthRatioEror ? (
                <div className="h-32 text-center pt-8 font-inter font-medium text-gray-900">
                  <h1>Something is wrong!</h1>
                </div>
              ) : (
                <NewtworkBreakdown cardData={network_highlights} />
              )}
            </div>
            <RelationshipInsight
              userDetails={profiles}
              title="Top Connections"
              labelId="topConnections"
            />
            {/* <CommonInterest
              commonCustomersInterest={data?.common_interest}
              isCustomerCommonDataLoading={isCustomerCommonDataLoading}
              isCustomerCommonDataEror={isCustomerCommonDataEror}
            /> */}
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

export default Highlights;
