import { useState } from "react";
import { TimeFormatDataType } from "../../utils/commonData";
import SelectOption from "../FromSteper/onBordingForms/SelectOption";
import DropdownMenuList from "../../components/Common/DropdownMenuList";

export const workflowStages: any = [
  { id: 1, name: "Initial Call" },
  { id: 2, name: "Property Listing" },
  { id: 3, name: "Negotiation" },
  { id: 4, name: "Follow Up" },
  { id: 5, name: "Proposal Communication" },
];
const WorkFlowModal = ({ toggleModal }: any) => {
  const [selectWorkFlowStage, setSelectWorkFlowStage] = useState<any>();

  const handleSubmitform = (e: any) => {
    e.defaultPrevent();
  };
  return (
    <form onSubmit={handleSubmitform}>
      <div className="flex justify-between items-center gap-4 pt-8 w-full">
        <div className="mb-6 w-full">
          <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
            Choose Workflow Stage
          </label>
          <DropdownMenuList
            options={workflowStages}
            selected={selectWorkFlowStage}
            setSelected={setSelectWorkFlowStage}
            rounded="rounded-md"
            placeholder="Choose one"
          />
        </div>
      </div>

      <div className="pb-4">
        <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
          Add Details
        </label>
        <textarea
          id="chat"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end border-t pt-2">
        <button
          onClick={toggleModal}
          className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 bg-indigo-600 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default WorkFlowModal;
