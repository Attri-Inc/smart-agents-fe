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
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="container mx-auto border overflow-auto">
        <section className="h-screen">
          <div className="w-full px-20">
            <h1 className="text-2xl text-inter tracking-wide font-bold text-gray-900  pl-4 pt-4">
              Hi there,
            </h1>
            <div className="pt-8 w-full">
              <div className="w-full md:full">
                <h1 className="font-inter font-bold text-gray-900 text-xl px-4">
                  Welcome, Here are your TODOs
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
            <div className="px-4">
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
        </section>
      </div>
    </div>
  );
};

export default Home;
