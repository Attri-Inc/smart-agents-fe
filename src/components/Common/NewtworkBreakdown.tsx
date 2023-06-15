import Email from "../icons/Email";
import Call from "../icons/Call";
import Twitter from "../icons/Twitter";
import LinkedIn from "../icons/LinkedIn";
import { FaSms, FaMeetup } from "react-icons/fa";
import { GrNotes } from "react-icons/all";

const networkColorCard = [
  {
    label: "Email",
    value: "45%",
    icon: <Email color="#B91C1C" />,
    bgColor: "bg-backgoundColor-1",
  },
  {
    label: "Phone",
    value: "25%",
    icon: <Call color=" #0F766E" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "Twitter",
    value: "15%",
    icon: <Twitter color=" #0369A1" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "LinkedIn",
    value: "54%",
    icon: <LinkedIn color=" #0369A1" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "sms",
    value: "54%",
    icon: <FaSms color=" #0369A1" className="text-2xl" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "Notes",
    value: "54%",
    icon: <GrNotes color=" #0369A1" className="text-2xl" />,
    bgColor: "bg-backgoundColor-2",
  },
  {
    label: "meeting",
    value: "54%",
    icon: <FaMeetup color=" #0369A1" className="text-2xl" />,
    bgColor: "bg-backgoundColor-2",
  },
];

const NewtworkBreakdown = (props: any) => {
  const { cardData } = props;

  const getIcons = (type: any) => {
    const iconAvailable = networkColorCard.find(
      (iconType: any) => iconType.label.toLowerCase() == type
    );
    if (iconAvailable) return iconAvailable.icon;
    return <FaSms color=" #0369A1" className="text-2xl" />;
  };

  return (
    <>
      <div className="flex items-center gap-4 pt-2">
        {cardData?.map((netwokRatio: any) => (
          <div className="w-72 h-24 border-2 mt-2 shadow:3xl bg-gray-300 rounded-lg border-border-100">
            <div className="h-full flex items-center pl-8">
              <div
                className={`$ bg-[#FEF2F2] w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                {getIcons(netwokRatio.interaction_type)}
              </div>
              <div className="pl-4">
                <span className="font-inter text-xl font-medium">
                  {netwokRatio.percentage_of_interaction__type}%
                </span>
                <p className="text-sm text-gray-500 font-inter font-normal capitalize">
                  {netwokRatio.interaction_type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewtworkBreakdown;
