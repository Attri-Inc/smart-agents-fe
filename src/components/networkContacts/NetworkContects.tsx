import UserGroup from "../icons/UserGroup";
import TrendingUp from "../icons/TrendingUp";
import { getNetworkContacts } from "../../utils/APIHelperFun";
import { useQuery } from "react-query";
import SingleLineLodaer from "../Common/skeleton/SingleLineLodaer";

const NetworkContects = () => {
  const {
    data: customerContact,
    isLoading: isCustomerContactDataLoading,
    isError: isCustomerContactDataEror,
  } = useQuery("network_contact", () => getNetworkContacts(120));

  const { interval_days_contacts, total_contacts } =
    !isCustomerContactDataEror &&
    !isCustomerContactDataLoading &&
    customerContact?.data?.network_growth;
  console.log("customerContact", customerContact);

  return (
    <div className="flex gap-4 flex-wrap">
      <div className="w-72 h-24 border-2 mt-2 shadow:3xl bg-gray-300 rounded-lg border-border-100">
        <div className="h-full flex items-center pl-8">
          <div
            className={`bg-backgoundColor-1 w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            <UserGroup />
          </div>
          <div className="pl-4">
            {isCustomerContactDataLoading ? (
              <SingleLineLodaer />
            ) : (
              <span className="font-inter text-xl font-medium">
                {total_contacts}
              </span>
            )}

            <p className="text-sm text-gray-500 font-inter font-normal">
              Total Contacts
            </p>
          </div>
        </div>
      </div>
      <div className="w-72 h-24 border-2 mt-2 shadow:3xl bg-gray-300 rounded-lg border-border-100">
        <div className="h-full flex items-center pl-8">
          <div
            className={`bg-backgoundColor-2 w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            <TrendingUp color=" #0F766E" />
          </div>
          <div className="pl-4">
            {isCustomerContactDataLoading ? (
              <SingleLineLodaer />
            ) : (
              <span className="font-inter text-xl font-medium">
                {interval_days_contacts}
              </span>
            )}

            <p className="text-sm text-gray-500 font-inter font-normal">
              Added last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkContects;
