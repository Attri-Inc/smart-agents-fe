import CustomButton from "../customButton";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import Avatar from "../../assets/Avatar3.png";
import Badge from "../Common/Badge";
import { todosConstants } from "../../constants";
import {
  cancelFollowUpAPI,
  getFollowUp,
  sendAPI,
} from "../../utils/APIHelperFun";
import { useQuery } from "react-query";
import { useState } from "react";

const FollowUpTask = (): JSX.Element => {
  const {
    data: followUpList,
    isLoading,
    isError,
  } = useQuery("followUp", () => getFollowUp(true));

  const [loading, setLoading] = useState<boolean>(false);
  const { send, cancelAllFollowUp, cancelFollowUp, Schedule } = todosConstants;

  const { worflows } = !isError && !isLoading && followUpList.data;

  if (isLoading) return <FollowUpSkeleton />;
  if (isError)
    return (
      <div className="w-full py-4">
        <h1 className="text-center">Somwthing is wrong</h1>
      </div>
    );

  const renderButtonOnTodosCard = (todo: any) => (
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

  const handleCancelFollowUp = async (todo: any) => {
    try {
      setLoading(true);
      await cancelFollowUpAPI(false, todo.registered_email);
      setLoading(false);
      // setEmailSubject(response.data);
    } catch (error) {
      setLoading(false);
      // Handle error
      console.error("Error fetching email subject:", error);
    }
  };
  const handleCancelAllFollowUp = async (todo: any) => {
    try {
      setLoading(true);
      await sendAPI(true, todo.registered_email);
      setLoading(false);
      // setEmailSubject(response.data);
    } catch (error) {
      setLoading(false);
      // Handle error
      console.error("Error fetching email subject:", error);
    }
  };

  const getTodosButtons = (todo: any) => {
    return (
      <>
        {renderButtonOnTodosCard(todo)}
        <div className="mt-4">
          <CustomButton
            title="Cancel this followup"
            disabled={false}
            containerStyle="text-xs bg-white text-gray-700 rounded border font-medium mr-4"
            type="button"
            handleClick={() => handleCancelFollowUp(todo)}
          />
          <CustomButton
            title="Cancel all followup"
            disabled={false}
            containerStyle="text-xs bg-white text-gray-700 rounded border font-medium"
            type="button"
            handleClick={() => handleCancelAllFollowUp(todo)}
          />
        </div>
      </>
    );
  };

  return (
    <div className="w-full">
      <ul className="w-full flex flex-nowrap mb-8 overflow-x-scroll scrollbar-hide">
        {worflows.map((todo: any) => (
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
              <div>
                {todo.status_code == "Follow up"
                  ? getTodosButtons(todo)
                  : // getTodosButtons()
                    renderButtonOnTodosCard(todo)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUpTask;
