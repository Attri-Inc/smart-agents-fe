import QueryInput from "../../components/Common/QueryInput";
import { useNavigate, useLocation } from "react-router-dom";
import CustomeDialog from "../../components/Common/CustomDialog";
import React, { useState } from "react";

import Sidebar from "../../components/sidebar";
import {
  getCustomerDetails,
  getCustomerNextMeetDetails,
} from "../../utils/APIHelperFun";
import { useQuery } from "react-query";
import { FaLink } from "react-icons/fa";
import CustomerDetails from "./CustomerDetails";
import LogCommunicationForm from "./LogCommunicationForm";
import CustomerTimeline from "./CustomerTimeline";
import EmailCommunications from "./EmailCommunications";
import Spinner from "../../components/Common/skeleton/Spinner";
import NextMeetDetails from "./NextMeetDetails";

const CustomerDetailsPage = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const toggleModal = () => setisModalOpen(!isModalOpen);
  const navigate = useNavigate();

  const {
    state: { registered_email },
  } = useLocation();

  const {
    data: customerDetails,
    isLoading: isCustomerDetailsLoading,
    isError: isCustomerDetailsErorr,
  } = useQuery("customer_details", () => getCustomerDetails(registered_email));

  const { customer_details } =
    !isCustomerDetailsLoading &&
    !isCustomerDetailsErorr &&
    customerDetails.data;

  const handleRedirectToQueryPage = () => navigate("/query");

  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
        <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-y-auto">
          <div className="w-full bg-gray-50 ">
            <div className="w-full flex justify-between">
              <div className="w-3/12 bg-white pt-10 pl-4">
                <CustomerDetails
                  customerDetails={customer_details}
                  isLoading={isCustomerDetailsLoading}
                  isError={isCustomerDetailsErorr}
                />
              </div>
              <div className="w-6/12 py-8 px-4">
                <div className="bg-white w-full">
                  <div className="grid grid-cols-3 divide-x py-4 px-4 divide-gray-200 rounded-lg border">
                    <div className="">
                      <h1 className="text-sm font-semibold text-inter text-gray-500">
                        Last Contact
                      </h1>
                      <h2 className="text-sm text-inter text-gray-900 pt-1">
                        Fri, 24th May, 2023
                      </h2>
                    </div>
                    <div className="pl-6">
                      <h1 className="text-sm font-semibold text-inter text-gray-500">
                        Total Interaction
                      </h1>
                      <h2 className="text-sm text-inter text-gray-900 pt-1">
                        203
                      </h2>
                    </div>
                    <NextMeetDetails />
                  </div>
                </div>
                <EmailCommunications />
              </div>
              <CustomerTimeline toggleModal={toggleModal} />
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
      {isModalOpen && (
        <CustomeDialog
          title="Log Communication"
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          width="w-4/12"
          LogComminicationForm={
            <LogCommunicationForm toggleModal={toggleModal} />
          }
        />
      )}
    </>
  );
};

export default CustomerDetailsPage;
