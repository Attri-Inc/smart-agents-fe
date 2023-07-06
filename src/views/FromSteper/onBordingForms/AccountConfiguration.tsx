import GoogleLoginIcon from "../../../components/icons/GoogleLoginIcon";
import { FaPlus } from "react-icons/fa";
import MicrosoftIcon from "../../../components/icons/MicrosoftIcon";

const AccountConfiguration = () => {
  return (
    <div>
      <div className="text-white border-b border-gray-700 pb-4">
        <h1 className="text-lg">Now, Let us configure your profile</h1>
      </div>
      <div className="pt-4">
        <button className="mb-3 bg-white flex w-full items-center justify-center gap-4 rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium leading-normal text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <GoogleLoginIcon />
          Continue with Google
        </button>
        <button className="mb-3 bg-white flex w-full items-center justify-center gap-4 rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium leading-normal text-gray-900 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <MicrosoftIcon />
          Continue with Microsoft
        </button>
        <button className="mb-3 border border-gray-500 bg-authBackgoundColor flex w-full items-center justify-center gap-4 rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium leading-normal text-white transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3)">
          <FaPlus />
          Connect other account
        </button>
      </div>
    </div>
  );
};

export default AccountConfiguration;
