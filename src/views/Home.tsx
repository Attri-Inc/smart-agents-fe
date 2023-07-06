import React from "react";
import TrendingTopics from "../components/trendingTopics";
import { useNavigate } from "react-router-dom";
import QueryInput from "../components/Common/QueryInput";
import Sidebar from "../components/sidebar";
import FollowUpTask from "../components/followUpTask";
import Events from "../components/events";

const Home = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const handleRedirectToQueryPage = () => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  return (
    <div className="h-screen overflow-hidden flex divide-gray-200 divide-x">
      <div>
        <Sidebar />
      </div>
      <div className="mx-auto border overflow-auto w-full">
        <div className="w-full h-screen">
          <div className="w-full px-20">
            <h1 className="text-2xl text-inter tracking-wide font-bold text-gray-900  pl-4 pt-4">
              Hi there, Welcome
            </h1>
            <div className="pt-8">
              <div className="w-full ">
                <h1 className="font-inter font-bold text-gray-900 text-xl px-4">
                  ToDos for today!
                </h1>
                <FollowUpTask />
              </div>
              <div className="w-full">
                <h1 className="font-inter font-bold text-gray-900 text-xl px-4">
                  Events
                </h1>
                <Events />
              </div>
            </div>
            <div className="w-full">
              <h1 className="font-inter font-bold text-gray-900 text-xl px-4">
                Trending Today
              </h1>
              <TrendingTopics />
            </div>
          </div>
          <div className="h-28 bg-gradient-to-t from-indigo-200 border-t text-black sticky bottom-0">
            <QueryInput
              onclick={handleRedirectToQueryPage}
              onChange={handleOnQuerySearch}
              value={userAskedText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
