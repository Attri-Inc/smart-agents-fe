import { useState, useRef, MutableRefObject } from "react";
import Sidebar from "../components/sidebar";
import { randomId } from "../utils/helper";
import Avatar3 from "../assets/Avatar3.png";
import MicroPhone from "../components/icons/MicroPhone";
import { useQuery } from "react-query";
import { customerChat } from "../utils/APIHelperFun";
import AIChatIcon from "../components/icons/AIChatIcon";

interface UserChat {
  id: string;
  text: string;
}
interface AIChatData {
  id: string;
  text: string;
}
const Query = () => {
  const [userChatData, setUserChatData] = useState<UserChat[]>([]);
  const [AIChatData, setAIChatData] = useState<AIChatData[]>([]);
  const [query, setQuery] = useState("");
  const userInputChat = useRef() as MutableRefObject<HTMLInputElement>;

  const { isLoading, isError } = useQuery({
    queryKey: ["query", query],
    queryFn: () => customerChat(query),
    enabled: !!query,
    onSuccess: (data: any) => {
      console.log("data", data);
      setAIChatData((prev) => [...prev, { text: data.data, id: randomId(10) }]);
    },
  });

  const handleOnQuerySearch = (e: any) => {
    setQuery(() => e.target.userTextInput.value);
    e.preventDefault();
    if (query !== "") {
      setUserChatData((prev: UserChat[]) => [
        ...prev,
        {
          text: e.target.userTextInput.value,
          id: randomId(),
        },
      ]);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full px-8 py-4 h-screen overflow-hidden  bg-indigo-100">
        <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-[38rem] overflow-y-auto">
          {/* AI generated chat */}
          <div>
            {AIChatData?.map((chat: AIChatData) => (
              <div
                key={chat.id}
                className="flex items-center gap-4 pb-3 t w-full"
              >
                <div className="p-4 bg-white rounded-lg max-w-lg">
                  <p>{chat.text}</p>
                </div>
                <AIChatIcon />
              </div>
            ))}
            {isLoading ? (
              <div className="dotLoader p-5 rounded-full flex space-x-3">
                <div className="w-5 h-5 dotLoader1 bg-[#4F46E5] rounded-full animate-bounce"></div>
                <div className="w-5 h-5 dotLoader2 bg-[#4F46E5] rounded-full animate-bounce"></div>
                <div className="w-5 h-5 dotLoader3 bg-[#4F46E5] rounded-full animate-bounce"></div>
              </div>
            ) : isError ? (
              <h1>Something is wrong!</h1>
            ) : null}
          </div>

          {userChatData?.map((chat: UserChat) => (
            <div className="flex justify-end w-full">
              <div key={chat.id} className=" gap-4 pb-3 flex items-center">
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
                id="userTextInput"
                name="userTextInput"
                // onClick={handleOnChangeQuerySearch}
                ref={userInputChat}
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
