import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import QueryInput from "../components/Common/QueryInput";
import WorkFlowCard from "../components/Common/WorkFlowCard";

type Props = {};

const WorkFlow = (props: Props) => {
  const [userAskedText, setUserAskedText] = React.useState<any>();
  const navigate = useNavigate();

  const handleRedirectToQueryPage = () => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };

  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="container mx-auto border overflow-auto">
        <section className="">
          <div className="w-full px-4">
            <h1 className="text-2xl text-inter tracking-wide font-bold text-gray-900 py-4">
              Workflow
            </h1>
            <div className="w-full grid grid-cols-5 gap-2 h-full">
              <div className="bg-red-50">
                <div className="p-3 flex gap-5 items-center">
                  <h2 className="text-lg font-medium">Initial Call</h2>
                  <span className="font-medium text-gray-600 inline-block px-2 rounded-lg bg-white">
                    5
                  </span>
                </div>
                <div className="w-60 px-2">
                  <WorkFlowCard />
                  <WorkFlowCard />
                </div>
              </div>

              <div className="bg-orange-50">
                <div className="p-3 flex gap-5 items-center">
                  <h2 className="text-lg font-medium"> Property Listing</h2>
                  <span className="font-medium text-gray-600 inline-block px-2 rounded-lg bg-white">
                    5
                  </span>
                </div>
                <div className="w-60 px-2">
                  <WorkFlowCard />
                  <WorkFlowCard />
                  <WorkFlowCard />
                  <WorkFlowCard />
                  <WorkFlowCard />
                </div>
              </div>
              <div className="bg-yellow-50">
                <div className="p-3 flex gap-5 items-center">
                  <h2 className="text-lg font-medium">Negotiation</h2>
                  <span className="font-medium text-gray-600 inline-block px-2 rounded-lg bg-white">
                    5
                  </span>
                </div>
                <div className="w-60 px-2">
                  <WorkFlowCard />
                  <WorkFlowCard />
                  <WorkFlowCard />
                </div>
              </div>
              <div className="bg-cyan-50">
                <div className="p-3 flex gap-5 items-center">
                  <h2 className="text-lg font-medium">Follow Up</h2>
                  <span className="font-medium text-gray-600 inline-block px-2 rounded-lg bg-white">
                    5
                  </span>
                </div>
                <div className="w-60 px-2">
                  <WorkFlowCard />
                </div>
              </div>
              <div className="bg-teal-50">
                <div className="p-3 flex gap-5 items-center">
                  <h2 className="text-lg font-medium">Proposal</h2>
                  <span className="font-medium text-gray-600 inline-block px-2 rounded-lg bg-white">
                    5
                  </span>
                </div>
                <div className="w-60 px-2">
                  <WorkFlowCard />
                </div>
              </div>
            </div>
          </div>
          <div className="h-28 bg-gradient-to-t from-indigo-200 border-t text-black sticky bottom-0">
            <QueryInput
              onclick={handleRedirectToQueryPage}
              onChange={handleOnQuerySearch}
              value={userAskedText}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkFlow;
