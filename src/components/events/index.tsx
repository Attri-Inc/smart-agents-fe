import { SiGooglemeet } from "react-icons/si";
import Avatar from "../../assets/Avatar.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import CustomButton from "../customButton";
import { Link } from "react-router-dom";
import Attendees from "../Common/Attendees";
import { FaClock } from "react-icons/fa";
import Camera from "../icons/Camera";

const avatarImage = [
  {
    id: 1,
    img: Avatar,
  },
  {
    id: 1,
    img: Avatar2,
  },
  {
    id: 1,
    img: Avatar2,
  },
  {
    id: 1,
    img: Avatar3,
  },
];

const eventList: any = [
  {
    attendees: [
      {
        email: "sriharsha.y@attri.ai",
        image: "",
        name: "Sriharsha Y",
      },
      {
        email: "yashwanth.reddy@attri.ai",
        image: "",
        name: "Yashwanth Reddy",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
    ],
    date: "Jun 21, 2023",
    description: "Daily Standup",
    meeting_link: "https://meet.google.com/ivz-iaeh-jiq",
    time: "10:00 to 10:30",
  },
  {
    attendees: [
      {
        email: "sriharsha.y@attri.ai",
        image: "",
        name: "Sriharsha Y",
      },
      {
        email: "yashwanth.reddy@attri.ai",
        image: "",
        name: "Yashwanth Reddy",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
    ],
    date: "Jun 21, 2023",
    description: "Daily Standup",
    meeting_link: "https://meet.google.com/ivz-iaeh-jiq",
    time: "10:00 to 10:30",
  },
  {
    attendees: [
      {
        email: "sriharsha.y@attri.ai",
        image: "",
        name: "Sriharsha Y",
      },
      {
        email: "yashwanth.reddy@attri.ai",
        image: "",
        name: "Yashwanth Reddy",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
    ],
    date: "Jun 21, 2023",
    description: "Daily Standup",
    meeting_link: "https://meet.google.com/ivz-iaeh-jiq",
    time: "10:00 to 10:30",
  },
  {
    attendees: [
      {
        email: "sriharsha.y@attri.ai",
        image: "",
        name: "Sriharsha Y",
      },
      {
        email: "yashwanth.reddy@attri.ai",
        image: "",
        name: "Yashwanth Reddy",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
    ],
    date: "Jun 21, 2023",
    description: "Daily Standup",
    meeting_link: "https://meet.google.com/ivz-iaeh-jiq",
    time: "10:00 to 10:30",
  },
  {
    attendees: [
      {
        email: "sriharsha.y@attri.ai",
        image: "",
        name: "Sriharsha Y",
      },
      {
        email: "yashwanth.reddy@attri.ai",
        image: "",
        name: "Yashwanth Reddy",
      },
      {
        email: "riyaz.ansari@attri.ai",
        image: "",
        name: "Riyaz Ansari",
      },
      {
        email: "akila.s@attri.ai",
        image: "",
        name: "Akila S",
      },
      {
        email: "ayush.aggarwal@attri.ai",
        image: "",
        name: "Ayush Aggarwal",
      },
    ],
    date: "Jun 21, 2023",
    description: "Daily Standup",
    meeting_link: "https://meet.google.com/ivz-iaeh-jiq",
    time: "10:00 to 10:30",
  },
];

const Events = (): JSX.Element => {
  return (
    <div className="w-full">
      <ul className="w-full flex flex-nowrap mb-4 overflow-x-scroll scrollbar-hide">
        {eventList.map((event: any) => {
          return (
            <li className="border m-4 p-3 rounded-lg inline-block">
              <div className="w-96">
                <div className="">
                  <p className="text-base text-gray-900 text-inter font-medium py-1">
                    {event.description}
                  </p>
                  <div className="flex items-center py-2">
                    <FaClock className="text-gray-400" />
                    <span className="block text-sm text-gray-600 text-inter pl-2">
                      10:20 AM to 10:40 AM
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-4 py-1 items-center">
                  <Camera />
                  <Link
                    to={event.meeting_link}
                    className="text-inter text-base text-gray-500"
                  >
                    {event.meeting_link}
                  </Link>
                </div>
                <Attendees attendees={event.attendees} />
                <CustomButton
                  title="Viwe Details"
                  disabled={false}
                  containerStyle="text-xs bg-white text-gray-700 rounded mt-6 border font-medium"
                  type="button"
                  handleClick={() => {}}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
