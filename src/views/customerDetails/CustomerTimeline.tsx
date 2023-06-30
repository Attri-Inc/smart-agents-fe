import ButtonWithIcon from "../../components/customButton/ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import Spinner from "../../components/Common/skeleton/Spinner";
import { useQuery } from "react-query";
import { getTimeLines } from "../../utils/APIHelperFun";
import Calendar from "../../components/icons/Calendar";
import Email from "../../components/icons/Email";
import Call from "../../components/icons/Call";

type Props = {
  toggleModal: () => void;
};

const CustomerTimeline = ({ toggleModal }: Props) => {
  const {
    data: timeLines,
    isLoading: timeLinesDataLoading,
    isError: timeLinesDataEror,
  } = useQuery("time_lines", getTimeLines);

  console.log("timeLines", timeLines);

  const { interaction_items } =
    !timeLinesDataLoading && !timeLinesDataEror && timeLines.data;

  const timelineColurs: any = {
    meet: {
      label: "meet",
      icon: <Calendar color="#ffffff" />,
      bgColor: "bg-yellow-400",
    },
    email: { label: "email", icon: <Email />, bgColor: "bg-red-500" },
    phone: { label: "phone", icon: <Call />, bgColor: "bg-green-500" },
  };

  return (
    <div className="w-3/12 pt-8 bg-white px-2">
      <h1 className="font-inter font-semibold text-gray-900 text-xl pb-4">
        Communications
      </h1>
      <div className="pb-4">
        <ButtonWithIcon
          handleClick={toggleModal}
          title="Log New Communication"
          disabled={false}
          type="button"
          icon={<FaPlus />}
        />
      </div>
      <div className="divider-gray-200 dark:divide-gray-700 text-sm text-gray-500">
        <div className="px-8">
          {timeLinesDataLoading ? (
            <div className="flex justify-center w-full">
              <Spinner />
            </div>
          ) : timeLinesDataEror ? (
            <h1 className="h-32 text-center pt-8 font-inter font-medium text-gray-900">
              Something is wrong!
            </h1>
          ) : (
            <ul className="relative border-l border-gray-200 dark:border-gray-200">
              {!timeLinesDataLoading &&
                !timeLinesDataEror &&
                interaction_items?.map((timeline: any, index: any) => {
                  const color =
                    timelineColurs[timeline.interaction_type.toLowerCase()] &&
                    timelineColurs[timeline.interaction_type.toLowerCase()]
                      .bgColor;
                  return (
                    <li className={`mb-10 ml-6 marker:`} key={index}>
                      <span
                        className={`absolute flex items-center justify-center w-8 h-8 ${color} rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900`}
                      >
                        {timelineColurs[
                          timeline.interaction_type.toLowerCase()
                        ] &&
                          timelineColurs[
                            timeline.interaction_type.toLowerCase()
                          ].icon}
                      </span>
                      <div className="w-full pl-2">
                        <div className="flex justify-between items-center">
                          <h1 className="capitalize">
                            {timeline.interaction_type}
                          </h1>
                          <h1 className="text-gray-500 text-lg">...</h1>
                        </div>
                        <div>
                          <span className="text-gray-500 font-inter ">
                            {timeline.dispatch_time.slice(0, 16)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTimeline;
