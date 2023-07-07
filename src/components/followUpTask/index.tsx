import CustomButton from "../customButton";
import FollowUpSkeleton from "../Common/skeleton/FollowUpSkeleton";
import Avatar from "../../assets/Avatar3.png";
import Badge from "../Common/Badge";
import moment from "moment";
import {
  cancelFollowUpAPI,
  getFollowUp,
  scheduleFollowUp,
  sendFollowUp,
} from "../../utils/APIHelperFun";
import { useQuery } from "react-query";
import { useState } from "react";
import CustomDialog from "../Common/CustomDialog";
import TrendingUp from "../icons/TrendingUp";
import Spinner from "../Common/skeleton/Spinner";

const FollowUpTask = (): JSX.Element => {
  const {
    data: followUpList,
    isLoading,
    isError,
  } = useQuery("followUp", () => getFollowUp(true));

  const [loading, setLoading] = useState<boolean>(false);
  const [currentFollowUp, setCurrentFollowUp] = useState<any>();
  const [date, setDate] = useState<string>("");
  const [isScheduleModalOpen, setIsScheduleModalOpen] =
    useState<boolean>(false);

  const scheduleModalOpenToggle = () =>
    setIsScheduleModalOpen(!isScheduleModalOpen);
  const { worflows } = !isError && !isLoading && followUpList.data;

  if (isLoading) return <FollowUpSkeleton />;
  if (isError)
    return (
      <div className="w-full py-4">
        <h1 className="text-center">Somwthing is wrong</h1>
      </div>
    );

  const ScheduleFollowUpTitle = () => (
    <div className="flex gap-4 items-center">
      <TrendingUp color="#4F46E5" className="font-medium text-indigo-600" />
      <h1 className="font-inter text-base font-medium text-indigo-600 pb-2">
        Schedule Follow up
      </h1>
    </div>
  );

  const handleOnClickScheduleFollowUp = (todo: any) => {
    scheduleModalOpenToggle();
    setCurrentFollowUp(todo);
  };

  const renderButtonOnTodosCard = (todo: any) => (
    <div className="mt-4">
      <CustomButton
        title="Send"
        disabled={false}
        containerStyle="text-xs bg-white text-gray-700 rounded border mr-4 font-medium"
        type="button"
        handleClick={() => handleSendFollowUp(todo)}
      />
      <CustomButton
        title="Schedule"
        disabled={false}
        containerStyle="text-xs bg-white text-gray-700 rounded  border font-medium"
        type="button"
        handleClick={() => handleOnClickScheduleFollowUp(todo)}
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
      await cancelFollowUpAPI(true, todo.registered_email);
      setLoading(false);
      // setEmailSubject(response.data);
    } catch (error) {
      setLoading(false);
      // Handle error
      console.error("Error fetching email subject:", error);
    }
  };

  const handleScheduleFollowUp = async () => {
    const followdate = moment(date).format("YYYY/MM/DD");

    const formData = new URLSearchParams();
    formData.append("schedule_date", followdate);
    formData.append("registered_email", currentFollowUp.registered_email);
    formData.append("interaction_id", currentFollowUp.interaction_id);
    try {
      setLoading(true);
      await scheduleFollowUp(formData);
      setLoading(false);
      // setEmailSubject(response.data);
    } catch (error) {
      setLoading(false);
      // Handle error
      console.error("Error fetching email subject:", error);
    }
  };
  const handleSendFollowUp = async (todo: any) => {
    const formData: any = new URLSearchParams();
    formData.append("send", true);
    formData.append("registered_email", todo.registered_email);
    formData.append("interaction_id", todo.interaction_id);
    try {
      setLoading(true);
      await sendFollowUp(formData);
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
              <div className="flex-col flex justify-end h-[100px]">
                {todo.status_code == "Follow up"
                  ? getTodosButtons(todo)
                  : // getTodosButtons()
                    renderButtonOnTodosCard(todo)}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <CustomDialog
        isOpen={isScheduleModalOpen}
        title={<ScheduleFollowUpTitle />}
        toggleModal={scheduleModalOpenToggle}
        width="w-4/12"
        LogComminicationForm={
          <div className="pt-4">
            <div className="mb-6">
              <label className="block mb-2 font-medium text-inter text-sm text-gray-700 dark:text-white">
                Select Date
              </label>
              <div className="flex items-center">
                <input
                  type="date"
                  id="date"
                  pattern="\d{2}/\d{2}/\d{4}"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="shadow-sm uppercase bg-white border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4 justify-end pt-2">
              <button
                onClick={scheduleModalOpenToggle}
                className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleScheduleFollowUp}
                className="py-2 px-3 bg-indigo-600 text-white rounded-md flex items-center gap-3"
              >
                Save {loading && <Spinner size="w-5 h-5" className="ml-2" />}
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default FollowUpTask;
