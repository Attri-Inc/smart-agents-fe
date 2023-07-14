import { getCustomerNextMeetDetails } from "../../utils/APIHelperFun";
import { useQuery } from "react-query";
import Spinner from "../../components/Common/skeleton/Spinner";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const NextMeetDetails = () => {
  const {
    data: nextMeet,
    isLoading: isNextMeetLoading,
    isError: isNextMeetError,
  } = useQuery("next_meet", () =>
    getCustomerNextMeetDetails("yashwanth.reddy@attri.ai")
  );

  if (isNextMeetError) return <div className="pl-6">Something is wrong</div>;
  if (isNextMeetLoading)
    return (
      <div className="pl-6">
        <Spinner size="w-4 h-4" />
      </div>
    );

  console.log("nextMeet", nextMeet.data);
  return (
    <div className="pl-4 w-96">
      {!Array.isArray(nextMeet.data) ? (
        <>
          <h1 className="text-sm font-semibold text-inter text-gray-500 pb-2">
            Next Meet
          </h1>
          <h2 className="text-inter text-gray-900 pt-1">{nextMeet.data}</h2>
        </>
      ) : (
        <div>
          <div className="flex gap-2">
            <h1 className="text-sm font-semibold text-inter text-gray-500">
              Next Meet
            </h1>
            <small>{nextMeet.data[0].time}</small>
          </div>
          <span>{nextMeet.data[0].date}</span>

          <div className="flex items-center gap-2 font-xs text-gray-500 pt-1">
            <Link to={nextMeet.data[0].meeting_link}>
              <small className="">{nextMeet.data[0].description}</small>
            </Link>
            <FaLink classname="font-xs" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NextMeetDetails;
