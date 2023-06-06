import Logo from "../icons/Logo";
import { FiLogOut } from "react-icons/fi";
import { googleLogout } from "@react-oauth/google";
import { FiUsers, FiHome, FiTrendingUp } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN } from "../../constants/authentication";
import { useState } from "react";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const navigate = useNavigate();
  // menuList objects
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
  ];

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem(TOKEN);
    navigate("/login");
  };

  return (
    <div className="w-56 flex flex-col justify-between h-full absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div>
        <div className="p-5">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="px-2">
          {menuList.map((menu: any) => (
            <Link to={`/${menu.url}`}>
              <li
                onClick={() => setSelectedMenu(menu.id)}
                className={`p-2 my-2 flex items-center hover:bg-gray-100 rounded-lg ${menu.id === selectedMenu ? "bg-gray-100 rounded-lg" : ""
                  }`}
              >
                <div className="pr-4">{menu.renderIcon}</div>
                <p className="font-inter">{menu.label}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full flex items-end h-full pb-2 pl-2">
        <button
          onClick={handleLogout}
          type="button"
          className="py-2 px-4 text-lg font-inter hover:bg-gray-100 font-medium rounded-2xl text-center inline-flex items-center"
        >
          Logout
          <FiLogOut className="w-5 h-5 ml-2 -mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
