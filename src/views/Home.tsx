import React from "react";
import Calendar from "../components/icons/Calendar";
import TrendingTopics from "../components/trendingTopics";
import { useNavigate } from "react-router-dom";
import QueryInput from "../components/Common/QueryInput";
import Arrow from "../components/icons/Arrow";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/sarchbar";

const today = [
  { label: "sendEmail", todo: "Send email" },
  { label: "call", todo: "Schedule Call" },
  { label: "meet", todo: "Attend Meeting" },
  { label: "blog", todo: "Connect with Ankit" },
  { label: "blog", todo: "Conference" },
  { label: "blog", todo: "Post a Blog" },
  { label: "blog", todo: "post a blog" },
  { label: "blog", todo: "post a blog" },
  { label: "blog", todo: "post a blog" },
  { label: "blog", todo: "post a blog" },
  { label: "blog", todo: "post a blog" },
];

const Home = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const handleRedirectToQueryPage = () => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full px-8 py-4 h-screen overflow-y-auto">
        <div className="h-full w-full">
          <div>
            <div>
              <h3 className="text-2xl text-inter tracking-wide text-gray-900 ">
                <span className="font-bold">Hi Md Riyaz Ansari, </span>
              </h3>
            </div>
            <p className="pt-4 text-inter text-gray-700 text-2xl">
              Welcome, Here are your TODOs
            </p>
          </div>
          <div className="pt-8 md:flex justify-between">
            <div className="w-7/12 md:full">
              <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
                Follow up Tasks
              </h1>
              <div className="pr-8">
                <ul className="divide-y divider-gray-200 dark:divide-gray-700 border-y">
                  <li className="flex items-center justify-between w-full py-4">
                    <div className="flex items-center">
                      <p className="font-inter text-sm text-indigo-600 font-medium">
                        Send email
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Arrow className="cursor-pointer" />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full py-4">
                    <div className="flex items-center">
                      <p className="font-inter text-sm text-indigo-600 font-medium">
                        Join meet at 2:30 PM
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Arrow className="cursor-pointer" />
                    </div>
                  </li>
                  <li className="flex items-center justify-between w-full py-4">
                    <div className="flex items-center">
                      <p className="font-inter text-sm text-indigo-600 font-medium">
                        Join conference at 3:0 PM
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Arrow className="cursor-pointer" />
                    </div>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
                    View All
                  </span>
                </div>
              </div>
            </div>
            <div className="w-5/12 pr-4">
              <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
                Events
              </h1>
              <ul className="overflow-y-scroll h-80 border-2 rounded-lg">
                {today.map((item: any) => (
                  <li className="p-4 flex justify-between items-center">
                    <span>{item.todo}</span>
                    <Calendar />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pr-8">
            <TrendingTopics />
          </div>
          <div className="w-full py-4 flex items-end">
            <QueryInput
              onclick={handleRedirectToQueryPage}
              onChange={handleOnQuerySearch}
              value={userAskedText}
            />
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;
