import React from "react";
import ChatIcon from "../icons/ChatBot";
import ChatHeadIcon from "../icons/ChatIcon";
import Close from "../icons/Close";
import Attach from "../icons/Attach";
import MicroPhone from "../icons/MicroPhone";
import ArrowCircle from "../icons/ArrowCircle";
import { useLocation } from "react-router-dom";

const ChatBot = (): JSX.Element => {
  const [isChatBotOpen, setIsChatBotOpen] = React.useState(false);
  const { pathname } = useLocation();
  console.log("===", pathname);
  const isHomeScreen = pathname === "/" ? true : false;

  if (!isHomeScreen) {
    return (
      <>
        {!isChatBotOpen && (
          <div
            onClick={() => setIsChatBotOpen(!isChatBotOpen)}
            className="fixed right-4 bottom-4 z-30 cursor-pointer bg-black w-12 h-12 rounded-lg flex items-center justify-center"
          >
            <ChatIcon />
          </div>
        )}
        {isChatBotOpen && (
          <div className="fixed right-4 bottom-4 z-20 cursor-pointer w-72 rounded-lg">
            <div className="w-full bg-black  h-16 flex items-center justify-between px-4">
              <div className="flex items-center">
                <div className=" w-7 h-7 rounded-full bg-backgoundColor-blue flex items-center justify-center">
                  <ChatHeadIcon />
                </div>
                <span className=" pl-2 text-base text-white font-inter">
                  AISA Chatbot
                </span>
              </div>
              <Close onClick={() => setIsChatBotOpen(!isChatBotOpen)} />
            </div>
            <div className="h-72 bg-white">
              <h1>Hello</h1>
            </div>
            <div className="w-full bg-white flex h-full items-end pb-4">
              <div className="flex items-center gap-2">
                <Attach />
                <div className="flex items-center">
                  <div className="relative">
                    <input
                      placeholder="Send a message."
                      className="p-2 rounded-2xl bg-grey-whisper border-grey-border"
                    />
                  </div>
                  <MicroPhone className="absolute right-20 ml-2" />
                </div>
                <ArrowCircle />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  return <></>;
};

export default ChatBot;
