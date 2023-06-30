import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import QueryInput from "../components/Common/QueryInput";
import WorkFlowCard from "../components/Common/WorkFlowCard";
import { workFlowStage } from "../utils/commonData";

const WorkFlow = () => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const handleRedirectToQueryPage = () => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  // const workFlowDataInital = [
  //   {
  //     id: 1,
  //     name: "Dianne Russell",
  //     email: "dianne.rus@example.com",
  //     date: "25-06-2023",
  //     status: "Intent email prepared",
  //     cta: "Send",
  //   },
  // ];

  // const workFlowDataNegotiation = [
  //   {
  //     id: 1,
  //     name: "Amanda Kendrick",
  //     email: "akendrick@cbtx.com",
  //     date: "22-06-2023",
  //     status: "Negotiation completed",
  //     cta: "Add Summery",
  //   },
  // ];
  // const workFlowDataFollowUp = [
  //   {
  //     id: 1,
  //     name: "Cooper Eddy",
  //     email: "ceddy@wickerassociates.com",
  //     date: "22-06-2023",
  //     status: "Follow Up",
  //     cta: "Send",
  //   },
  // ];
  // const workFlowDataPC = [
  //   {
  //     id: 1,
  //     name: "Bill Shaddock",
  //     email: "BShaddock@ShaddockDev.com",
  //     date: "23-06-2023",
  //     status: "Proposal Prepared",
  //     cta: "Send",
  //   },
  // ];

  const workFlowDataPL = [
    {
      id: 1,
      name: "Buddy Cramer",
      email: "Bcramer@katyicehouse.com",
      date: "20-06-2023",
      status: "Listings communicated",
      cta: "Set Negotiation Date",
    },
    {
      id: 1,
      name: "Dave Cornette, Jr",
      email: "Dave.Cornette@cityofallen.org",
      date: "20-06-2023",
      status: "Listings Prepared",
      cta: "Send",
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="container mx-auto border w-full overflow-x-scroll scrollbar-hide">
        <h1 className="text-2xl text-inter tracking-wide font-bold text-gray-900 py-4 px-4">
          Workflow
        </h1>
        <div className="w-full flex flex-nowrap overflow-x-scroll scrollbar-hide">
          {workFlowStage.map((item: any) => {
            return (
              <div
                className={`border m-4 p-3 rounded-lg inline-block h-screen ${item.bgColor}`}
              >
                <div className="w-full p-3 flex gap-10 items-center">
                  <h2 className="text-lg font-medium">{item.label}</h2>
                  <span className="font-medium text-gray-600 inline-block px-2 rounded-lg bg-white">
                    2
                  </span>
                </div>
                <div className="w-86">
                  <ul className="mt-4 w-70">
                    {workFlowDataPL.map((workflow: any) => (
                      <WorkFlowCard workFlow={workflow} id={workflow.id} />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-28 bg-gradient-to-t from-indigo-200 border-t text-black sticky bottom-0">
          <QueryInput
            onclick={handleRedirectToQueryPage}
            onChange={handleOnQuerySearch}
            value={userAskedText}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
