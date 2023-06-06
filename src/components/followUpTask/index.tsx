import Avatar from "../../assets/Avatar.png";
import Arrow from "../icons/Arrow";

const FollowUpTask = () => {
  return (
    <div className="pt-6">
      <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
        Today's Highlight
      </h1>
      <p className="font-inter font-medium text-gray-900 text-lg pb-2">
        Follow-up Tasks
      </p>
      <ul className="divide-y divider-gray-200 dark:divide-gray-700 border-y">
        <li className="flex items-center justify-between w-full py-4">
          <div className="flex items-center">
            <img src={Avatar} alt="avatar" />
            <div className="pl-4">
              <p className="font-inter text-sm text-gray-900">
                Leonard Kranser
              </p>
              <span className="font-inter text-sm text-gray-500">
                @leonardkranser
              </span>
            </div>
          </div>
          <p>Send Follow-up email</p>
          <Arrow />
        </li>
        <li className="flex items-center justify-between w-full py-4">
          <div className="flex items-center">
            <img src={Avatar} alt="avatar" />
            <div className="pl-4">
              <p className="font-inter text-sm text-gray-900">
                Leonard Kranser
              </p>
              <span className="font-inter text-sm text-gray-500">
                @leonardkranser
              </span>
            </div>
          </div>
          <p>Send Follow-up email</p>
          <Arrow />
        </li>
        <li className="flex items-center justify-between w-full py-4">
          <div className="flex items-center">
            <img src={Avatar} alt="avatar" />
            <div className="pl-4">
              <p className="font-inter text-sm text-gray-900">
                Leonard Kranser
              </p>
              <span className="font-inter text-sm text-gray-500">
                @leonardkranser
              </span>
            </div>
          </div>
          <p>Send Follow-up email</p>
          <Arrow className="cursor-pointer" />
        </li>
      </ul>
      <div className="flex justify-end">
        <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
          View All
        </span>
      </div>
    </div>
  );
};

export default FollowUpTask;
