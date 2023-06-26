import Avatar from "../../assets/Avatar.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";

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

interface Attendees {
  email: string;
  name: string;
  image: string;
}

interface AttendeesProps {
  attendees: Attendees[];
}

const Attendees = ({ attendees }: AttendeesProps) => {
  const showCount = attendees.length > 4;
  return (
    <div>
      <ul>
        {attendees.slice(0, 4).map((attendee: any, index: any) => {
          return (
            <li key={index} className="flex justify-between py-1 items-center">
              <p className="text-sm-base text-gray-600 font-inter">
                {attendee.name}
              </p>
            </li>
          );
        })}
      </ul>
      {showCount && (
        <div className="flex items-center">
          <div className="flex items-center -space-x-3 pr-2">
            {avatarImage.map((customer: any) => (
              <img
                key={customer.id}
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
                src={customer.img}
                alt=""
              />
            ))}
          </div>
          <span className="text-gray-500 font-bold font-inter text-sm">{`+${
            attendees.length - 4
          }`}</span>
        </div>
      )}
    </div>
  );
};

export default Attendees;
