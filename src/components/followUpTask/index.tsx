import { useQuery } from "react-query";
import CustomButton from "../customButton";
import { getFollowUp } from "../../utils/APIHelperFun";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import Avatar from "../../assets/Avatar3.png";
import Badge from "../Common/Badge";
const followUpLists = [
  {
    alert: true,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 194,
    interaction_time: "2023-06-20-06-55-18",
    name: "aisa .",
    next_alert_date: null,
    registered_email: "aisa@attri.ai",
    scheduled_date: null,
    status_code: "Listings Prepared",
    workflow_stage: "Property Listing",
  },
  {
    alert: true,
    deadline: "Fri, 14 Jul 2023 11:59:49 GMT",
    follow_up_count: 0,
    follow_up_frequency: 7,
    interaction_id: 14,
    interaction_time: "2023-06-05-12-00-00",
    name: "Chad B. B. Cook",
    next_alert_date: "Mon, 12 Jun 2023 11:07:47 GMT",
    registered_email: "aisa1@attri.ai",
    scheduled_date: null,
    status_code: "Proposal Generated",
    workflow_stage: "Proposal Communication",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 11,
    interaction_time: "2023-06-03-12-00-00",
    name: "Chad B. B. Cook",
    next_alert_date: "Wed, 07 Jun 2023 11:32:40 GMT",
    registered_email: "aisa2@attri.ai",
    scheduled_date: "Wed, 07 Jun 2023 11:32:48 GMT",
    status_code: "Listings Prepared",
    workflow_stage: "Property Listing",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 11,
    interaction_time: "2023-06-03-12-00-00",
    name: "Chad B. B. Cook",
    next_alert_date: "Wed, 07 Jun 2023 11:32:40 GMT",
    registered_email: "aisa2@attri.ai",
    scheduled_date: "Wed, 07 Jun 2023 11:32:48 GMT",
    status_code: "Listings Prepared",
    workflow_stage: "Property Listing",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 11,
    interaction_time: "2023-06-03-12-00-00",
    name: "Chad B. B. Cook",
    next_alert_date: "Wed, 07 Jun 2023 11:32:40 GMT",
    registered_email: "aisa2@attri.ai",
    scheduled_date: "Wed, 07 Jun 2023 11:32:48 GMT",
    status_code: "Listings Prepared",
    workflow_stage: "Property Listing",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 9,
    interaction_time: "2023-06-03-12-00-00",
    name: "Chad B. B. Cook",
    next_alert_date: "Fri, 16 Jun 2023 00:00:00 GMT",
    registered_email: "aisa3@attri.ai",
    scheduled_date: null,
    status_code: "Listings Communicated",
    workflow_stage: "Property Listing",
  },
  {
    alert: true,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 7,
    interaction_time: "2023-06-03-12-00-00",
    name: "Chad B. B. Cook",
    next_alert_date: "Mon, 12 Jun 2023 11:07:47 GMT",
    registered_email: "aisa4@attri.ai",
    scheduled_date: null,
    status_code: "Listings Prepared",
    workflow_stage: "Property Listing",
  },
];

const FollowUpTask = (): JSX.Element => {
  const {
    data: followUpList,
    isLoading,
    isError,
  } = useQuery("followUp", () => getFollowUp(false));

  const { worflows } = !isError && !isLoading && followUpList.data;

  console.log("topConnectionData", followUpList);

  return (
    <div className="w-full">
      <ul className="w-full flex flex-nowrap mb-8 overflow-x-scroll scrollbar-hide">
        {false ? (
          <FollowUpSkeleton />
        ) : false ? (
          <div className="w-full py-4">
            <h1 className="text-center">Somwthing is wrong</h1>
          </div>
        ) : (
          followUpLists.map((todo: any) => (
            <li className="border m-4 p-4 rounded-lg inline-block">
              <div className="w-96">
                <div className="flex gap-3 items-center">
                  <img
                    src={Avatar}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="capitalize text-sm text-gray-400 text-inter font-medium">
                    {todo.name}
                  </span>
                </div>
                <h1 className="font-inter font-medium text-base text-gray-900 py-2">
                  {todo.workflow_stage}
                </h1>
                <div className="">
                  <p className="font-inter text-gray-500 break-words">
                    needs to send a brief and professional follow-up email,
                    expressing gratitude.
                  </p>
                </div>
                <div className="pt-2.5">
                  <Badge
                    style="bg-indigo-100 text-indigo-600"
                    label="Listings Prepared"
                  />
                  <span className="font-inter text-sm text-gray-500 inline-block pl-2">
                    On {todo.interaction_time.slice(0, 10)}
                  </span>
                </div>
                <div>
                  <CustomButton
                    title="Send"
                    disabled={false}
                    containerStyle="text-xs bg-white text-gray-700 rounded mt-6 border font-medium mr-4"
                    type="button"
                    handleClick={() => {}}
                  />
                  <CustomButton
                    title="Schedule"
                    disabled={false}
                    containerStyle="text-xs bg-white text-gray-700 rounded mt-6 border font-medium"
                    type="button"
                    handleClick={() => {}}
                  />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FollowUpTask;
