import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Avatar from "../../assets/Avatar.png";
import Notification from "../icons/Notification";

const SearchBar = () => {
  const { pathname } = useLocation();
  const isHomeScreen = pathname === "/" || "/query" ? true : false;

  if (!isHomeScreen) {
    return (
      <div className=" divide-gray-200 border-b-2 w-full ">
        <div className="flex items-center justify-between pb-2">
          <div className="relative w-full pr-3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <div className="flex items-center w-20 justify-between ">
            <Notification />
            <div>
              <img src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default SearchBar;
