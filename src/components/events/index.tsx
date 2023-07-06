import { Link } from "react-router-dom";
import Attendees from "../Common/Attendees";
import { FaClock } from "react-icons/fa";
import Camera from "../icons/Camera";
import { getEvents } from "../../utils/APIHelperFun";
import { useQuery } from "react-query";
import EventSkeleton from "../Common/skeleton/EventSkeleton";
import { BiCalendar } from "react-icons/bi";

const Events = (): JSX.Element => {
  const { data: events, isLoading, isError } = useQuery("events", getEvents);

  if (isLoading) return <EventSkeleton />;
  if (isError)
    return (
      <div className="w-full py-4 h-96">
        <h1 className="text-center">Somwthing is wrong</h1>
      </div>
    );
  return (
    <div className="w-full">
      {events.data.length > 0 ? (
        <ul className="w-full flex flex-nowrap mb-4 overflow-x-scroll scrollbar-hide">
          {events.data.map((event: any) => {
            return (
              <li className="border m-4 p-3 rounded-lg inline-block">
                <div className="w-96">
                  <div className="">
                    <p className="text-base text-gray-900 text-inter font-medium py-1">
                      {event.description}
                    </p>
                    <div className="flex items-center py-2">
                      <BiCalendar className="text-gray-400" />
                      <span className="block text-sm text-gray-600 text-inter pl-2">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center py-2">
                      <FaClock className="text-gray-400" />
                      <span className="block text-sm text-gray-600 text-inter pl-2">
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex gap-4 py-1 items-center">
                    <Camera />
                    <Link
                      to={event.meeting_link}
                      className="text-inter text-base text-gray-500 hover:text-indigo-500"
                      target="_blank"
                    >
                      {event.meeting_link}
                    </Link>
                  </div>
                  <Attendees attendees={event.attendees} />
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="w-full text-center py-8">
          <h1>No Meeting schedule</h1>
        </div>
      )}
    </div>
  );
};

export default Events;
