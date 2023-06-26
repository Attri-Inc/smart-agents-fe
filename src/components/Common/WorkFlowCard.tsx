import avatar from "../../assets/Avatar2.png";
import CustomButton from "../customButton";

const WorkFlowCard = () => {
  return (
    <div className="bg-gray-300 rounded-lg p-4 w-52 mb-2">
      <div className="flex items-center mb-2">
        <img src={avatar} className="w-8 h-8 rounded-full mr-2" />
        <h2 className="text-sm text-justify font-medium text-indigo-600">
          John Doe
        </h2>
      </div>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
      </p>
      <CustomButton
        title="Schedule"
        disabled={false}
        containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded border font-medium"
        type="button"
        handleClick={() => {}}
      />
    </div>
  );
};

export default WorkFlowCard;
