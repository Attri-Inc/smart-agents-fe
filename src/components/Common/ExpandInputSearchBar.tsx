import React, { useState } from "react";

const ExpandInputSearchBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className={`px-4 py-2 rounded ${
            expanded ? "w-48" : "w-12"
          } transition-width duration-300 focus:outline-none focus:ring focus:border-blue-300`}
        />
        <div
          className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 cursor-pointer"
          onClick={handleSearchIconClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 17l5-5m0 0l-5-5m5 5H4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ExpandInputSearchBar;
