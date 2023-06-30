import { useQuery } from "react-query";
import { getEmailCommunicationDetails } from "../../utils/APIHelperFun";
import Spinner from "../../components/Common/skeleton/Spinner";

const EmailCommunications = () => {
  const {
    data: customerEmails,
    isLoading,
    isError,
  } = useQuery("email_communication", () =>
    getEmailCommunicationDetails("aaron@acleelaw.com", "email")
  );

  console.log("customerEmails", customerEmails);

  if (isLoading)
    return (
      <div className="flex justify-center w-full pt-8">
        <Spinner />
      </div>
    );
  if (isError) return "Something is wrong";

  return (
    <div className="pt-4">
      <h1 className="text-lg font-semibold text-inter text-gray-900 pb-4">
        Email Communications
      </h1>
      <div className="pl-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] h-screen overflow-y-auto">
        <ul className="relative border-l pl-4 border-indigo-200 dark:border-indigo-700 ">
          {customerEmails?.data.customer_activity.map((customer: any) => (
            <li className="ml-4 border p-4 rounded-lg bg-white  mb-4">
              <div className="absolute w-3 h-3 bg-indigo-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="text-lg font-semibold text-inter text-gray-900">
                <span className="text-sm font-semibold text-inter text-gray-500">
                  Date:{" "}
                </span>
                <span className="text-sm text-inter text-gray-900 font-normal">
                  {customer.activity_date}
                </span>
              </div>
              <div className="text-lg font-semibold text-inter text-gray-900">
                <span className="text-sm font-semibold text-inter text-gray-500">
                  From:{" "}
                </span>
                <span className="text-sm text-inter text-gray-900 font-normal">
                  {customer.sender_email}
                </span>
              </div>
              <div className="text-lg font-semibold text-inter text-gray-900">
                <span className="text-sm font-semibold text-inter text-gray-500">
                  Subject:{" "}
                </span>
                <span className="text-sm text-inter text-gray-900 font-normal">
                  {customer.subject}
                </span>
              </div>
              <div className="text-lg font-semibold text-inter text-gray-900">
                <span className="text-sm font-semibold text-inter text-gray-500">
                  Message:{" "}
                </span>
                <p className="text-sm text-inter text-gray-900 font-normal">
                  Hello Jane, I hope you're doing well. I would like to schedule
                  a work meeting to discuss our upcoming project. Are you
                  available for a meeting on [proposed date and time]? If not,
                  please let me know your preferred time slot. Looking forward
                  to your response. Best regards, Rebecca
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailCommunications;
