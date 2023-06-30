import { useNavigate } from "react-router-dom";
import React from "react";
import QueryInput from "../components/Common/QueryInput";
import Sidebar from "../components/sidebar";
import { useQuery } from "react-query";
import { getCustomerList } from "../utils/APIHelperFun";
import Avatar from "../assets/Ellipse 1.png";
import { FiClock } from "react-icons/fi";
import LinkedIn from "../components/icons/LinkedIn";
import Twitter from "../components/icons/Twitter";
import Email from "../components/icons/Email";
import TableSkeleton from "../components/Common/skeleton/TableSkeleton";

const Customers = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();

  const handleRedirectToQueryPage = () => navigate("/query");

  const {
    data: customerList,
    isLoading: isCustomerListLoading,
    isError: isCustomerListErorr,
  } = useQuery("customer-list", () => getCustomerList());

  console.log("customerList");

  const { customer_details } =
    !isCustomerListLoading && !isCustomerListErorr && customerList.data;

  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  const navigate = useNavigate();
  const columns = ["CONTACT NAME", "CONTACT", "SOCIAL"];

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
            <div className="w-8/12">
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
                  {isCustomerListLoading ? (
                    <tr className="mx-4">
                      <td className="mx-4">
                        <TableSkeleton />
                      </td>
                      <td scope="row">
                        <TableSkeleton />
                      </td>
                      <td scope="row">
                        <TableSkeleton />
                      </td>
                    </tr>
                  ) : isCustomerListErorr ? (
                    <h1 className="text-center text-inter pt-10">
                      Something is wrong !
                    </h1>
                  ) : (
                    customer_details[0].map((customer: any) => (
                      <tr className="bg-white border-b font-inter">
                        <td
                          onClick={() =>
                            navigate(`/customer/${customer.id}`, {
                              state: customer,
                            })
                          }
                          scope="row"
                          className="px-6 py-4 w-96 flex gap-4 font-medium text-sm text-gray-900 whitespace-nowrap cursor-pointer"
                        >
                          <div className="w-10 h-10">
                            <img
                              src={Avatar}
                              className="w-full h-full rounded-full object-contained"
                            />
                          </div>
                          <div>
                            <h2 className="text-sm font-medium text-inter text-gray-900 capitalize">
                              {customer.name}
                            </h2>
                            <div className="flex gap-1 items-center pt-1">
                              <FiClock className="text-base text-gray-500" />
                              <span className="text-xs font-medium text-inter text-gray-500">
                                Tue, 24 May
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-500">
                          <div>
                            <p className="text-gray-900 text-inter text-sm">
                              {customer.registered_email}
                            </p>
                            <span className="text-gray-500 inline-block pt-1 text-inter text-sm">
                              +1 (444) 444-3333
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-500">
                          <div className="flex gap-4 items-center">
                            <LinkedIn color="#9CA3AF" />
                            <Twitter color="#9CA3AF" />
                            <Email color="#9CA3AF" />
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
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
