import { useState } from "react";
import classNames from "classnames";
import Logo from "../icons/Logo";
import { FiMap } from "react-icons/fi";
import { googleLogout } from "@react-oauth/google";
import { FiUsers, FiHome, FiTrendingUp } from "react-icons/fi";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { TOKEN } from "../../constants/authentication";
import Avatar from "../../assets/Ellipse 1.png";
import Settings from "../icons/Settings";
import { FaCross } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

const menuList: any[] = [
  {
    id: 1,
    url: "",
    label: "Home",
    renderIcon: <FiHome />,
  },
  {
    id: 2,
    url: "customers",
    label: "People",
    renderIcon: <FiUsers />,
  },
  {
    id: 3,
    url: "highlights",
    label: "Highlights",
    renderIcon: <FiTrendingUp />,
  },
  {
    id: 4,
    url: "workflow",
    label: "WorkFlow",
    renderIcon: <FiMap />,
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(false);

  const navigate = useNavigate();
  // menuList objects

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem(TOKEN);
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={classNames(
          "h-full inset-y-0 left-0 w-56 bg-white shadow-lg transform transition-transform duration-300",
          {
            hidden: !isSidebarOpen,
            block: isSidebarOpen,
            "lg:block": true,
          }
        )}
      >
        {/* Sidebar Content */}
        <div className="h-3/6">
          <div className="py-5 px-3 w-full flex justify-between items-center">
            <Link to="/">
              <Logo />
            </Link>
            {/* <HiXMark
              className="font-bold cursor-pointer"
              onClick={toggleSidebar}
            /> */}
          </div>
          <ul className="px-2">
            {menuList.map((menu: any) => (
              <NavLink
                to={`/${menu.url}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li
                  className={`p-2 my-2 flex items-center hover:bg-gray-100 rounded-lg`}
                >
                  <div className="pr-4">{menu.renderIcon}</div>
                  <p className="font-inter">{menu.label}</p>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="w-full pb-2 pl-2 h-3/6 flex flex-col justify-end">
          <div
            onClick={() => {
              setSelectedMenu(true);
              navigate("/settings");
            }}
            className={`p-2 my-2 mr-2 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer ${
              selectedMenu ? "bg-gray-100" : ""
            }`}
          >
            <Settings />
            <p className="font-inter">Settings</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="h-10 w-10">
              <img
                src={Avatar}
                className="w-full h-full object-fit rounded-full"
              />
            </div>
            <div className="">
              <h1 className="text-gray-800 text-inter font-medium">Roy Kent</h1>
              <small className="text-gray-500 text-inter">
                roykent@acme.com
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        className={classNames("fixed top-4 left-4 z-10 lg:hidden", {
          hidden: isSidebarOpen,
          block: !isSidebarOpen,
        })}
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 text-gray-500 hover:text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
