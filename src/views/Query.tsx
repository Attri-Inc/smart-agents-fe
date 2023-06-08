import { useState } from "react";
import Sidebar from "../components/sidebar";
import { randomId } from "../utils/helper";
import Avatar3 from "../assets/Avatar3.png";
import AIIcons from "../components/icons/AIIcons";
import MicroPhone from "../components/icons/MicroPhone";

interface UserChat {
  id: string;
  text: string;
}
const Query = () => {
  const [chatData, setChatData] = useState<UserChat[]>([]);
  const [query, setQuery] = useState("");

  const handleOnQuerySearch = (e: any) => {
    e.preventDefault();
    if (query !== "") {
      setChatData((prev: UserChat[]) => [
        ...prev,
        { text: e.target.userQuery.value, id: randomId() },
      ]);
      setQuery("");
    }
  };

  const handleOnChangeQuerySearch = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full px-8 py-4 h-screen overflow-hidden  bg-indigo-100">
        <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-[38rem] overflow-y-auto">
          {chatData?.map((chat: UserChat) => (
            <div className="">
              {/* AI generated chat */}
              <div key={chat.id} className="flex items-center gap-4 pb-3">
                <AIIcons />
                <div className="p-4 bg-white rounded-lg max-w-lg">
                  <p>{chat.text}</p>
                </div>
              </div>
              {/* User's chat */}
              <div
                key={chat.id}
                className="flex items-center gap-4 pb-3 float-right"
              >
                <div className="p-4 bg-white rounded-lg max-w-lg">
                  <p>{chat.text}</p>
                </div>
                <div>
                  <img src={Avatar3} className="h-10 w-10 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col justify-end min-h-full">
          <div className="flex items-center w-9/12 fixed bottom-4">
            <form onSubmit={handleOnQuerySearch} className="w-full">
              <input
                type="text"
                id="userQuery"
                name="userQuery"
                onChange={handleOnChangeQuerySearch}
                value={query}
                className="shadow appearance-none border rounded-3xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="Send a message."
              />
            </form>
          </div>
          <MicroPhone className="text-2xl text-zinc-400 absolute right-32 bottom-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Query;
