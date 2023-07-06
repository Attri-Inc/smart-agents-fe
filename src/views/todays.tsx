import FollowUpTask from "../components/followUpTask";
import Events from "../components/events";
import TrendingTopics from "../components/trendingTopics";

const todays = () => {
  return (
    <div>
      <FollowUpTask />
      <Events />
      <TrendingTopics />
    </div>
  );
};

export default todays;

// {/* <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-[38rem] overflow-y-auto">
// {/* AI generated chat */}
// <div>
//   {AIChatData?.map((chat: AIChatData) => (
//     <div
//       key={chat.id}
//       className="flex items-stretch gap-4 pb-3 t w-full"
//     >
//       <AIChatIcon className="self-end" />

//       <div className="p-4 bg-white max-w-lg rounded-tl-xl rounded-br-lg rounded-tr-xl">
//         <p>{chat.botAnswer}</p>
//       </div>
//     </div>
//   ))}
//   {isLoading ? (
//     <div className="dotLoader p-5 rounded-full flex space-x-3">
//       <div className="w-5 h-5 dotLoader1 bg-[#4F46E5] rounded-full animate-bounce"></div>
//       <div className="w-5 h-5 dotLoader2 bg-[#4F46E5] rounded-full animate-bounce"></div>
//       <div className="w-5 h-5 dotLoader3 bg-[#4F46E5] rounded-full animate-bounce"></div>
//     </div>
//   ) : isError ? (
//     <h1>Something is wrong!</h1>
//   ) : null}
// </div>

// {userChatData?.map((chat: UserChat) => (
//   <div className="flex justify-end w-full">
//     <div key={chat.id} className=" gap-4 pb-3 flex items-stretch">
//       <div className="p-4 bg-white max-w-lg rounded-tl-xl rounded-bl-lg rounded-tr-xl">
//         <p>{chat.userQuery}</p>
//       </div>
//       <div className="self-end">
//         <img src={Avatar3} className="h-10 w-10 rounded-full" />
//       </div>
//     </div>
//   </div>
// ))}
// </div> */}
