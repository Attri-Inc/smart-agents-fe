import React from "react";
import QueryInput from "../components/Common/QueryInput";
import Sidebar from "../components/sidebar";
import SearchBar from "../components/sarchbar";

const Query = () => {
  const [userAskedText, setUserAskedText] = React.useState<any>();

  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>

      <div className="w-full px-8 py-4 h-screen overflow-hidden ">
        <div>
          <h1 className="font-inter font-semibold text-gray-900 text-2xl">
            Hi, there
          </h1>
        </div>
        <div className="w-full flex flex-col justify-end min-h-full">
          <QueryInput onChange={handleOnQuerySearch} value={userAskedText} />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Query;
