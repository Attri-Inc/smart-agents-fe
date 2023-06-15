import Avatar from "../../assets/Avatar.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import CustomButton from "../customButton";
import Calendar from "../icons/Calendar";

const events = [
  {
    label: "Startup Conference",
    location: "at New York",
    date: "January 7, 2020",
    customers: 54,
    id: 1,
  },
  {
    label: "Startup Conference",
    location: "at New York",
    date: "January 7, 2020",
    customers: 20,
    id: 2,
  },
  {
    label: "Startup Conference",
    location: "at New York",
    date: "January 7, 2020",
    customers: 34,
    id: 3,
  },
  {
    label: "Startup Conference",
    location: "at New York",
    date: "January 7, 2020",
    customers: 30,
    id: 4,
  },
];

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

const Events = () => {
  return (
    <div className="full">
      <ul className="w-full flex flex-nowrap mb-4 overflow-x-scroll scrollbar-hide">
        {events.map((event: any) => (
          <li className="w-full py-4 border m-4 p-4 rounded-lg inline-block">
            <div className="w-96">
              <p className="text-sm-base text-gray-600 font-inter">
                <span className="text-text-base text-indigo-600 font-inter">
                  {event.label}{" "}
                </span>
                {event.location}
              </p>
              <div className="flex gap-4 py-2 items-center">
                <Calendar />
                <h1 className="text-gray-500 font-inter">On {event.date}</h1>
              </div>
              <div className="flex items-center pt-2">
                <div className="flex items-center -space-x-4 pr-8">
                  {avatarImage.map((customer: any) => (
                    <img
                      key={customer.id}
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src={customer.img}
                      alt=""
                    />
                  ))}
                  <span className="pl-8 text-gray-400 font-medium">
                    +{event.customers}
                  </span>
                </div>
              </div>
              <CustomButton
                title="Mark as complete"
                disabled={false}
                containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                type="button"
                handleClick={() => {}}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
