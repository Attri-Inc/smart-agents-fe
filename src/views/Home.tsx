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
            <div className="px-6">
              <h3 className="text-2xl text-inter tracking-wide text-gray-900 ">
                <span className="font-bold">Hi Md Riyaz Ansari, </span>
              </h3>
              <p className="pt-4 text-inter text-gray-700 text-2xl">
                Welcome, Here are your TODOs
              </p>
            </div>
            <div className="pt-8 md:flex justify-between gap-4">
              <div className="w-6/12 md:full">
                <h1 className="font-inter text-gray-900 text-lg px-4">
                  Todos for Akila !
                </h1>
                <FollowUpTask />
              </div>
              <div className="w-6/12">
                <h1 className="font-inter text-gray-900 text-lg px-4">
                  Events
                </h1>
                <Events />
              </div>
            </div>
            <div className="pr-8">
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
