import { useState, useRef, MutableRefObject, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { randomId } from "../utils/helper";
import Avatar3 from "../assets/Avatar3.png";
import { useQuery } from "react-query";
import { customerChat, getChatData } from "../utils/APIHelperFun";
import AIChatIcon from "../components/icons/AIChatIcon";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import ChatHistory from "./chatBot/ChatHistory";
import { useNavigate } from "react-router-dom";

interface UserChat {
  id: string;
  userQuery: string;
}

const Query = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const userInputChat = useRef() as MutableRefObject<HTMLInputElement>;
  const [isListening, setIsListening] = useState(false);
  const [currentQueryIndex, setCurrentQueryIndex] = useState<any>(null);
  const navigate = useNavigate();

  const {
    data: AllPreviousData,
    isLoading: allChatLoading,
    isError: isAllChatError,
  } = useQuery("chat_history", getChatData);

  let recognition: SpeechRecognition | null;

  const handleToggleListening = () => {
    if (!isListening) {
      startRecognition();
    } else {
      stopRecognition();
    }
  };

  const startRecognition = () => {
    let audio = new Audio("./record.wav");
    recognition = new window.webkitSpeechRecognition() as SpeechRecognition;
    // recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      audio.play();
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        }
      }
      finalTranscript !== "" &&
        setChat((prev: any) => [
          ...prev,
          {
            bot: false,
            message: finalTranscript,
            id: randomId(),
          },
        ]);
      setQuery(finalTranscript);
      userInputChat.current.value = finalTranscript;
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      stopRecognition();
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopRecognition = () => {
    console.log("onrecognitionend", recognition);
    if (isListening) {
      recognition && recognition.stop();
      recognition = null;
      setIsListening(false);
    }
  };

  const { isLoading, isError } = useQuery({
    queryKey: ["query", query],
    queryFn: () => customerChat(query),
    enabled: !!query,
    onSuccess: (data: any) => {
      setChat((prev) => [
        ...prev,
        {
          ...data.data,
          bot: true,
        },
      ]);
    },
  });

  const handleOnQuerySearch = (e: any) => {
    setQuery(e.target.userTextInput.value);
    e.preventDefault();
    if (e.target.userTextInput.value !== "") {
      setChat((prev: UserChat[]) => [
        ...prev,
        {
          message: e.target.userTextInput.value,
          bot: false,
          id: randomId(),
        },
      ]);
    }
  };

  useEffect(() => {
    if (chat.length > 0) {
      const currentQuery = chat.find(
        (message) => message.type && !message.response
      );
      const currentIndex = currentQuery ? chat.indexOf(currentQuery) : null;
      setCurrentQueryIndex(currentIndex);
    }
  }, [chat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const renderBotChat = (message: any): JSX.Element => {
    if (message.type == "internal_url") {
      const pageUrl = message.url.split("/")[3];
      navigate(`/${pageUrl}`);
    }
    return (
      <div className="p-4 bg-white max-w-xl rounded-tl-xl rounded-br-lg rounded-tr-xl">
        <p>{message.message}</p>
      </div>
    );
  };

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x ">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      {!allChatLoading && !isAllChatError && (
        <ChatHistory
          chatData={AllPreviousData.data}
          timeframe="1month"
          setChat={setChat}
        />
      )}
      <div className="w-full px-8 py-4 h-screen overflow-hidden  bg-indigo-100">
        <div
          className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-[38rem] overflow-y-auto"
          ref={chatContainerRef}
          style={{ overflowY: "auto" }}
        >
          <div className="w-full mx-auto">
            <div className="flex flex-col overflow-hidden">
              <div className="flex flex-col">
                {chat.map((message, index) => (
                  <div
                    key={index}
                    className={`my-2 ${
                      !message.bot ? "self-end" : "self-start"
                    }`}
                  >
                    {message.bot ? (
                      <>
                        <div
                          key={message.id}
                          className="flex items-stretch gap-4 pb-3 t w-full"
                        >
                          <AIChatIcon className="self-end" />

                          {renderBotChat(message)}
                        </div>
                        {currentQueryIndex === index ? (
                          isLoading ? (
                            <div className="dotLoader p-5 rounded-full flex space-x-3">
                              <div className="w-5 h-5 dotLoader1 bg-[#4F46E5] rounded-full animate-bounce"></div>
                              <div className="w-5 h-5 dotLoader2 bg-[#4F46E5] rounded-full animate-bounce"></div>
                              <div className="w-5 h-5 dotLoader3 bg-[#4F46E5] rounded-full animate-bounce"></div>
                            </div>
                          ) : isError ? (
                            <h1>Something is wrong!</h1>
                          ) : null
                        ) : null}
                      </>
                    ) : (
                      <div className="flex justify-end w-full">
                        <div
                          key={message.id}
                          className=" gap-4 pb-3 flex items-stretch"
                        >
                          <div className="p-4 bg-white max-w-xl rounded-tl-xl rounded-bl-lg rounded-tr-xl">
                            <p>{message.message}</p>
                          </div>
                          <div className="self-end">
                            <img
                              src={Avatar3}
                              className="h-10 w-10 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end min-h-full w-10/12">
          <div className="flex items-center fixed bottom-4 w-full">
            <form onSubmit={handleOnQuerySearch} className="w-7/12">
              <input
                disabled={isLoading}
                type="text"
                id="userTextInput"
                name="userTextInput"
                ref={userInputChat}
                className="shadow appearance-none border rounded-3xl py-4 px-3 w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Send a message."
              />
            </form>
          </div>
          <div className="absolute right-28 bottom-7 cursor-pointer">
            <button onClick={handleToggleListening}>
              {isListening ? <BiMicrophone /> : <BiMicrophoneOff />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Query;
