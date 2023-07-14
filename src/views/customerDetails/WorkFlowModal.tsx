import { useState } from "react";
import DropdownMenuList from "../../components/Common/DropdownMenuList";
import { workFlowCode, workflowStages } from "../../utils/commonData";
import { addToWorkflow } from "../../utils/APIHelperFun";
import Spinner from "../../components/Common/skeleton/Spinner";

const WorkFlowModal = ({ toggleModal }: any) => {
  const [selectWorkFlowStage, setSelectWorkFlowStage] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [workFlowCodes, setWorkFlowCodes] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmitform = async (e: any) => {
    console.log("e", e);
    e.preventDefault();
    const formData: any = new URLSearchParams();
    formData.append("registered_email", "johnwick@gmail.com");
    formData.append("description", description);
    formData.append("workflow_stage", selectWorkFlowStage);
    formData.append("status_code", workFlowCodes);
    formData.append("alert", true);

    try {
      setIsLoading(true);
      const response = await addToWorkflow(formData);
      if (response.status === 200) {
        toggleModal();
      }
    } catch (error: any) {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmitform}>
      <div className="mb-6 w-full pt-4">
        <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
          Choose Workflow
        </label>
        <DropdownMenuList
          options={workFlowCode}
          selected={workFlowCodes}
          setSelected={setWorkFlowCodes}
          rounded="rounded-md"
          placeholder="Choose one"
        />
      </div>
      <div className="flex justify-between items-center gap-4 w-full">
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
          onChange={(e) => setDescription(e.target.value)}
          className="block p-2.5 rounded-md w-full text-sm text-gray-900 bg-white border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      </div>
      <div className="flex gap-4 justify-end border-t pt-2">
        <button
          type="button"
          onClick={toggleModal}
          className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 flex items-center gap-2 px-3 bg-indigo-600 text-white rounded-md"
        >
          Save {isLoading && <Spinner size="w-4 h-4" />}
        </button>
      </div>
    </form>
  );
};

export default WorkFlowModal;
