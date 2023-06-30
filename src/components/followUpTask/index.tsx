import CustomButton from "../customButton";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import Avatar from "../../assets/Avatar3.png";
import Badge from "../Common/Badge";
import { todosConstants } from "../../constants";

const followUpLists = [
  {
    alert: true,
    deadline: "Fri, 14 Jul 2023 11:59:49 GMT",
    follow_up_count: 0,
    follow_up_frequency: 7,
    interaction_id: 14,
    interaction_time: "2023-06-05-12-00-00",
    name: "Aaron Sherman",
    next_alert_date: "Mon, 12 Jun 2023 11:07:47 GMT",
    registered_email: "aaron.sherman@stillwatercap.com",
    scheduled_date: null,
    status_code: "Follow-up",
    workflow_stage: "Follow-up",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 11,
    interaction_time: "2023-06-03-12-00-00",
    name: "Abby Lestin",
    next_alert_date: "Wed, 07 Jun 2023 11:32:40 GMT",
    registered_email: "abby.lestin@rejournals.com",
    scheduled_date: "Wed, 07 Jun 2023 11:32:48 GMT",
    status_code: "Listings Prepared",
    workflow_stage: "Listings Prepared",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 11,
    interaction_time: "2023-06-03-12-00-00",
    name: "Adam A. A. Krug",
    next_alert_date: "Wed, 07 Jun 2023 11:32:40 GMT",
    registered_email: "akrug@harbert.net",
    scheduled_date: "Wed, 07 Jun 2023 11:32:48 GMT",
    status_code: "Hired",
    workflow_stage: "Hired",
  },
  {
    alert: false,
    deadline: null,
    follow_up_count: null,
    follow_up_frequency: null,
    interaction_id: 11,
    interaction_time: "2023-06-03-12-00-00",
    name: "adam.j.smolyar@uli.org",
    next_alert_date: "Wed, 07 Jun 2023 11:32:40 GMT",
    registered_email: "aisa2@attri.ai",
    scheduled_date: "Wed, 07 Jun 2023 11:32:48 GMT",
    status_code: "Adam J. Smolyar",
    workflow_stage: "Listings Prepared",
  },
];

const FollowUpTask = (): JSX.Element => {
  // const {
  //   data: followUpList,
  //   isLoading,
  //   isError,
  // } = useQuery("followUp", () => getFollowUp(false));

  const { FollowUp, Hired, listingsPrepared } = todosConstants;

  // const { worflows } = !isError && !isLoading && followUpList.data;

  const renderButtonOnTodosCard = () => (
    <div className="mt-4">
      <CustomButton
        title="Send"
        disabled={false}
        containerStyle="text-xs bg-white text-gray-700 rounded border mr-4 font-medium"
        type="button"
        handleClick={() => {}}
      />
      <CustomButton
        title="Schedule"
        disabled={false}
        containerStyle="text-xs bg-white text-gray-700 rounded  border font-medium"
        type="button"
        handleClick={() => {}}
      />
    </div>
  );

  const getTodosButtons = (type: string) => {
    switch (type) {
      case listingsPrepared:
        return renderButtonOnTodosCard();
      case FollowUp:
        return (
          <>
            {renderButtonOnTodosCard()}
            <div className="mt-4">
              <CustomButton
                title="Cancel this followup"
                disabled={false}
                containerStyle="text-xs bg-white text-gray-700 rounded border font-medium mr-4"
                type="button"
                handleClick={() => {}}
              />
              <CustomButton
                title="Cancel all followup"
                disabled={false}
                containerStyle="text-xs bg-white text-gray-700 rounded border font-medium"
                type="button"
                handleClick={() => {}}
              />
            </div>
          </>
        );
      case Hired:
        return (
          <CustomButton
            title="Schedule"
            disabled={false}
            containerStyle="text-xs bg-white text-gray-700 rounded mt-4 border font-medium"
            type="button"
            handleClick={() => {}}
          />
        );
    }
  };

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
                {/* <div className=""></div> */}
                <div className="pt-2.5">
                  <Badge
                    style="bg-indigo-100 text-indigo-600"
                    label={todo.status_code}
                  />
                  <span className="font-inter text-sm text-gray-500 inline-block pl-2">
                    On {todo.interaction_time.slice(0, 10)}
                  </span>
                </div>
                <div>{getTodosButtons(todo.status_code)}</div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FollowUpTask;
