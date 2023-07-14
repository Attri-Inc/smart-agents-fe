import { useQuery } from "react-query";
import { getEmailCommunicationDetails } from "../../utils/APIHelperFun";
import Spinner from "../../components/Common/skeleton/Spinner";
import Attach from "../../components/icons/Attach";

const EmailCommunications = () => {
  const {
    data: customerEmails,
    isLoading,
    isError,
  } = useQuery("email_communication", () =>
    getEmailCommunicationDetails("aaron@acleelaw.com", "email")
  );

  if (isLoading)
    return (
      <div className="flex justify-center w-full pt-8">
        <Spinner />
      </div>
    );
  if (isError) return <div>Something is wrong!</div>;

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
              <div className="pb-1">
                <span className="text-base text-gray-900 font-medium">
                  {customer.subject}
                </span>
              </div>
              <div className="text-lg font-semibold text-inter text-gray-900">
                <p className="text-sm text-inter text-gray-500 font-normal">
                  <div className="pb-2">
                    <span className="text-gray-500 text-sm font-medium">
                      From: {`<${customer.sender_email}>`}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">
                      {" "}
                      To: {`<me>`} {customer.activity_date}
                    </span>
                  </div>
                  Hello Jane, I hope you're doing well. I would like to schedule
                  a work meeting to discuss our upcoming project. Are you
                  available for a meeting on [proposed date and time]? If not,
                  please let me know your preferred time slot. Looking forward
                  to your response. Best regards, Rebecca
                </p>
                <div className="flex justify-between w-full items-center pt-3">
                  <div className="border border-gray-400 flex items-center gap-2 rounded-full px-3 py-1 cursor-pointer">
                    <Attach />
                    <span className="text-gray-700 text-sm font-medium">
                      PDF
                    </span>
                  </div>
                  <div className="text-indigo-500 text-sm font-medium flex items-center gap-1">
                    <span className="cursor-pointer">View thread</span>
                    <div>.</div>
                    <span className="cursor-pointer">3 More Replies</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailCommunications;
