import { useState, useRef, MutableRefObject } from "react";
import Sidebar from "../components/sidebar";
import { randomId } from "../utils/helper";
import Avatar3 from "../assets/Avatar3.png";
import { useQuery } from "react-query";
import { customerChat } from "../utils/APIHelperFun";
import AIChatIcon from "../components/icons/AIChatIcon";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";

interface UserChat {
  id: string;
  userQuery: string;
}
interface AIChatData {
  id: string;
  botAnswer: string;
}
const Query = () => {
  const [userChatData, setUserChatData] = useState<UserChat[]>([]);
  const [AIChatData, setAIChatData] = useState<AIChatData[]>([]);
  const [chat, setChat] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const userInputChat = useRef() as MutableRefObject<HTMLInputElement>;
  const [isListening, setIsListening] = useState(false);

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
            type: "USER",
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
        { message: data.data.message, id: randomId(10), type: "AI" },
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
          type: "USER",
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
          <div className="w-full mx-auto">
            <div className="flex flex-col overflow-hidden">
              <div className="flex flex-col">
                {chat.map((message, index) => (
                  <div
                    key={index}
                    className={`my-2 ${
                      message.type == "USER" ? "self-end" : "self-start"
                    }`}
                  >
                    {message.type === "AI" ? (
                      <>
                        <div
                          key={message.id}
                          className="flex items-stretch gap-4 pb-3 t w-full"
                        >
                          <AIChatIcon className="self-end" />

                          <div className="p-4 bg-white max-w-xl rounded-tl-xl rounded-br-lg rounded-tr-xl">
                            <p>{message.message}</p>
                          </div>
                        </div>
                        {isLoading ? (
                          <div className="dotLoader p-5 rounded-full flex space-x-3">
                            <div className="w-5 h-5 dotLoader1 bg-[#4F46E5] rounded-full animate-bounce"></div>
                            <div className="w-5 h-5 dotLoader2 bg-[#4F46E5] rounded-full animate-bounce"></div>
                            <div className="w-5 h-5 dotLoader3 bg-[#4F46E5] rounded-full animate-bounce"></div>
                          </div>
                        ) : isError ? (
                          <h1>Something is wrong!</h1>
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
          <div className="absolute right-32 bottom-7 cursor-pointer">
            {/* <AudioSpeech /> */}
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
