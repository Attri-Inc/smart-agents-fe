import { useNavigate } from "react-router-dom";
import React from "react";
import QueryInput from "../components/Common/QueryInput";
import Sidebar from "../components/sidebar";
import { useQuery } from "react-query";
import { getCustomerList } from "../utils/APIHelperFun";

const Customers = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();

  const handleRedirectToQueryPage = () => navigate("/query");

  const {
    data: customerList,
    isLoading: isCustomerListLoading,
    isError: isCustomerListErorr,
  } = useQuery("customer-list", () => getCustomerList());

  const { customer_details } =
    !isCustomerListLoading && !isCustomerListErorr && customerList.data;

  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  const navigate = useNavigate();
  const columns = ["CONTACT NAME", "CONTACT", "COMPANY"];

  return (
    <div className="h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col overflow-auto">
        <div className="h-full">
          <div className="px-12 py-4">
            <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
              Your Contact
            </h1>
            <div className="">
              <table className="border-x border-b w-full text-sm text-left text-gray-500 h-screen">
                <thead className="border-y font-inter text-xs text-gray-500 uppercase bg-gray-50">
                  <tr className="divider-gray-200">
                    {columns.map((column) => (
                      <th
                        scope="col"
                        className="px-6 py-3 font-inter text-sx text-gray-500"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                  {!isCustomerListLoading &&
                    !isCustomerListErorr &&
                    customer_details[0].map((customer: any) => (
                      <tr className="bg-white border-b font-inter">
                        <td
                          onClick={() =>
                            navigate(`/customer/${customer.id}`, {
                              state: customer,
                            })
                          }
                          scope="row"
                          className="px-6 py-4 font-medium text-sm text-gray-900 whitespace-nowrap cursor-pointer"
                        >
                          {customer.name}
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-500">
                          {customer.registered_email}
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-500">
                          {customer.company}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-28 py-8 bg-gradient-to-t from-indigo-200 border-t text-black sticky bottom-0">
            <QueryInput
              onclick={handleRedirectToQueryPage}
              onChange={handleOnQuerySearch}
              value={userAskedText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
