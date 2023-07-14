import { useState } from "react";
import DoubleArrow from "../../components/icons/DoubleArrow";
import { FiDownload } from "react-icons/fi";
import moment from "moment";
import { getChatDataByDate } from "../../utils/APIHelperFun";
import { transformChatData } from "../../utils/helper";

const ChatHistory = ({ chatData, timeframe, setChat }: any) => {
  const [selectedDay, setSelectedDay] = useState<any>({});
  // Helper function to group messages by month and day
  const groupMessagesByMonth = (chatData: any) => {
    const groupedData: any = [];
    const monthMap = new Map();

    chatData.forEach((message: any) => {
      const messageMonth = getMessageMonth(message.timestamp);
      const messageDay = getMessageDay(message.timestamp);
      const messageDate = getMessageDate(message.timestamp);

      if (!monthMap.has(messageMonth)) {
        monthMap.set(messageMonth, new Map());
      }

      const dayMap = monthMap.get(messageMonth);

      if (!dayMap.has(messageDay)) {
        dayMap.set(messageDay, []);
      }

      //   dayMap.get(messageDay).push(message);
      dayMap.get(messageDay).push({
        ...message,
        date: messageDate,
      });
    });

    // Sort the months in descending order
    const sortedMonths = Array.from(monthMap.keys()).sort((a, b) => {
      const aDate: any = new Date(a);
      const bDate: any = new Date(b);
      return bDate - aDate;
    });

    sortedMonths.forEach((month) => {
      const days: any = [];
      const dayMap = monthMap.get(month);

      dayMap.forEach((messages: any, day: any) => {
        days.push({
          day,
          messages,
          date: moment(messages.timestamp).format("DD-MM-YYYY"),
        });
      });

      groupedData.push({
        month,
        days,
      });
    });

    return groupedData;
  };

  // Helper function to get the month in MMM YYYY format
  const getMessageMonth = (timestamp: any) => {
    const options: any = { month: "short", year: "numeric" };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };
  // Helper function to get the day in numeric format (1-31)
  const getMessageDay = (timestamp: any) => {
    const options: any = { weekday: "long" };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  // Helper function to get the date in DD format
  const getMessageDate = (timestamp: any) => {
    return new Date(timestamp).getDate();
  };

  const groupedChatData = groupMessagesByMonth(chatData);
  // Calculate the date range based on the desired timeframe
  const currentDate = new Date();
  const startDate = new Date();
  if (timeframe === "7days") {
    startDate.setDate(currentDate.getDate() - 7);
  } else if (timeframe === "1month") {
    startDate.setMonth(currentDate.getMonth() - 1);
  }

  const handleOnClick = async (day: any, monthGroup: any) => {
    setSelectedDay({ day: day.day, month: monthGroup.month });

    try {
      const response = await getChatDataByDate(day.date);
      const formatedData = transformChatData(response.data);
      setChat(formatedData);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("monthGroup", groupedChatData);
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-96">
      <div className="flex justify-between pb-4 items-center">
        <h1 className="text-lg font-medium text-gray-900">Chat Archives</h1>
        <DoubleArrow className="cursor-pointer" />
      </div>

      <div>
        {groupedChatData.map((monthGroup: any) => (
          <div key={monthGroup.month}>
            <h3 className="text-sm font-semibold uppercase text-gray-500 py-1 ">
              {monthGroup.month}
            </h3>
            <ul>
              {monthGroup.days.map((day: any) => (
                <li
                  onClick={() => handleOnClick(day, monthGroup)}
                  key={day.day}
                  className={`${
                    selectedDay.day == day.day &&
                    selectedDay.month == monthGroup.month
                      ? "bg-indigo-500 text-white"
                      : ""
                  } flex my-2 justify-between items-center py-2 rounded-md px-4 cursor-pointer  hover:bg-indigo-500 hover:text-white`}
                >
                  <p className="text-sm">
                    {day.day} {day.date}
                  </p>
                  <FiDownload className="" />
                </li>
              ))}
            </ul>
            <div className="border border-gray-400 my-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
