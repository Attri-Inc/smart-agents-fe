import { useState } from "react";
import Avatar from "../assets/Avatar.png";
import Avatar1 from "../assets/Avatar1.png";
import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import UserDetails from "../components/userDetails";

const profiles = [
  {
    name: "Jane Copper",
    id: "jane.copper@example.com",
    img: Avatar2,
    uid: 1,
    address:
      "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
    socialMedia: [
      { label: "Email Address", value: "email@example.com" },
      { label: "Phone", value: "+1 200 300 9393" },
      { label: "Twitter", value: "twitter.com/janecooper" },
      { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
    ],
    connectionDetails: [
      { label: "Last Contact", value: "25th June, 2022" },
      { label: "Connection Strength", value: "Strong" },
      { label: "Sentiment", value: "Positive" },
    ],
  },
  {
    name: "Jane Copper",
    id: "jane.copper@example.com",
    img: Avatar3,
    uid: 1,
    address:
      "Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
    socialMedia: [
      { label: "Email Address", value: "email@example.com" },
      { label: "Phone", value: "+1 200 300 9393" },
      { label: "Twitter", value: "twitter.com/janecooper" },
      { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
    ],
    connectionDetails: [
      { label: "Last Contact", value: "25th June, 2022" },
      { label: "Connection Strength", value: "Strong" },
      { label: "Sentiment", value: "Positive" },
    ],
  },
  {
    name: "Jane Copper",
    id: "jane.copper@example.com",
    img: Avatar,
    uid: 1,
    address:
      "Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
    socialMedia: [
      { label: "Email Address", value: "email@example.com" },
      { label: "Phone", value: "+1 200 300 9393" },
      { label: "Twitter", value: "twitter.com/janecooper" },
      { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
    ],
    connectionDetails: [
      { label: "Last Contact", value: "25th June, 2022" },
      { label: "Connection Strength", value: "Strong" },
      { label: "Sentiment", value: "Positive" },
    ],
  },
  {
    name: "Jane Copper",
    id: "jane.copper@example.com",
    img: Avatar1,
    uid: 1,
    address:
      "Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
    socialMedia: [
      { label: "Email Address", value: "email@example.com" },
      { label: "Phone", value: "+1 200 300 9393" },
      { label: "Twitter", value: "twitter.com/janecooper" },
      { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
    ],
    connectionDetails: [
      { label: "Last Contact", value: "25th June, 2022" },
      { label: "Connection Strength", value: "Strong" },
      { label: "Sentiment", value: "Positive" },
    ],
  },
];
const TimeLines = () => {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  return (
    <>
      <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4 pt-8">
        Contact Timelines
      </h1>
      <div className="lg:flex w-full border-none md:block">
        <div className="w-3/4 pr-5">
          <ul className="w-full divide-y divider-gray-200 dark:divide-gray-700 border-y border-x ">
            <li className="p-4 bg-gray-50 text-xs tracking-wider font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-50">
              NAME
            </li>
            {profiles.map((profile: any) => (
              <li
                onClick={() => setSelectedProfile(profile)}
                key={profile.id}
                className="p-2 cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <img src={profile.img} alt="avatar" />
                  <div className="pl-4">
                    <p className="font-inter text-sm text-gray-900 font-medium">
                      {profile.name}
                    </p>
                    <span className="font-inter text-sm text-gray-500">
                      {profile.id}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <UserDetails userDetails={selectedProfile} />
        </div>
      </div>
    </>
  );
};

export default TimeLines;
