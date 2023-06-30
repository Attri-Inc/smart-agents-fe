import avatar from "../../assets/Avatar2.png";
import CustomButton from "../customButton";

const WorkFlowCard = ({ workFlow }: any) => {
  const { name, email, date, status, cta } = workFlow;

  console.log("workFlow", workFlow);

  return (
    <div className="bg-gray-300 rounded-lg mb-2 px-4 py-2 w-full">
      <div className="flex items-center mb-2">
        <img src={avatar} className="w-8 h-8 rounded-full mr-2" />
        <h2 className="text-sm text-justify font-medium text-indigo-600">
          {name}
        </h2>
      </div>
      <p className="text-gray-600 py-1">{email}</p>
      <div>
        <p>
          <span>{status}</span> on
          <span className="text-gray-600 block pt-1">{date}</span>
        </p>
      </div>
      <CustomButton
        title={cta}
        disabled={false}
        containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded border font-medium mt-2"
        type="button"
        handleClick={() => {}}
      />
    </div>
  );
};

export default WorkFlowCard;
