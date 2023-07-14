import { FaArrowLeft, FaPlus } from "react-icons/fa";
import Call from "../../components/icons/Call";
import Mail from "../../components/icons/Mail";
import Avatar from "../../assets/Ellipse 1.png";
import { useNavigate } from "react-router-dom";
import ProfileSkeleton from "../../components/Common/skeleton/ProfileSkeleton";
import CustomeDialog from "../../components/Common/CustomDialog";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import WorkFlowModal from "./WorkFlowModal";
import ProfileModalForm from "./ProfileModalForm";

const CustomerDetails = ({
  isError,
  isLoading,
  customerDetails,
  toggleLogModal,
}: any): JSX.Element => {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
  const toggleModal = () => setisModalOpen(!isModalOpen);
  const navigate = useNavigate();

  if (isLoading) return <ProfileSkeleton />;
  if (isError)
    return (
      <div className="h-screen">
        {" "}
        <h1>Something is wrong!</h1>
      </div>
    );

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        className="flex w-fit cursor-pointer py-2 px-4 rounded-xl items-center gap-2 hover:bg-gray-100"
      >
        <FaArrowLeft
          icon="fa-solid fa-arrow-up-long"
          className="text-gray-500 font-inter"
        />
        <span className="text-gray-500 font-inter text-sm font-medium	">
          Back to list
        </span>
      </div>
      <div className="w-full pt-4">
        <div className="w-full flex-col flex justify-center items-center border-b-2 pb-4">
          <img src={Avatar} className="object-cover" />
          <div className="py-4">
            <h1 className="text-center text-gray-900 text-lg font-inter font-semibold">
              {customerDetails.name[0]}
            </h1>
            <h2 className="text-base font-inter text-gray-500">
              Senior Manager @Meta
            </h2>
          </div>
          <div className="flex justify-center items-center gap-4 pt-2">
            <div>
              <span
                onClick={toggleLogModal}
                className="bg-indigo-50 block p-4 rounded-full cursor-pointer"
              >
                <FaPlus className="text-indigo-500 text-xl font-bold" />
              </span>
              <p className="text-center text-sm font-semibold text-inter text-gray-500 pt-2">
                Log
              </p>
            </div>
            <div>
              <span className="bg-indigo-50 block p-4 rounded-full hover:text-indigo-400 cursor-pointer">
                <Mail
                  color="#6366F1"
                  className="text-indigo-500 text-xl font-bold"
                />
              </span>
              <p className="text-center text-sm font-semibold text-inter text-gray-500 pt-2">
                Email
              </p>
            </div>
            <div>
              <span className="bg-indigo-50 block p-4 rounded-full cursor-pointer">
                <Call
                  color="#6366F1"
                  className="text-indigo-500 text-xl font-bold"
                />
              </span>
              <p className="text-center text-sm font-semibold text-inter text-gray-500 pt-2">
                Call
              </p>
            </div>
            <div>
              <span
                className="bg-indigo-50 block p-4 rounded-full cursor-pointer"
                onClick={toggleModal}
              >
                <MdEdit className="text-indigo-500 text-xl font-bold" />
              </span>
              <p className="text-center text-sm font-semibold text-inter text-gray-500 pt-2">
                Edit
              </p>
            </div>
          </div>
          <div
            className="py-1 mt-4 w-full  px-4 border rounded-md border-gray-400 cursor-pointer hover:shadow-sm"
            onClick={toggleProfileModal}
          >
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-700">Initial Call</p>
              <span className="text-gray-700 cursor-pointer">...</span>
            </div>
            <p className="text-sm text-gray-500">Realstate Sales Funnel</p>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <h1 className="text-base font-semibold text-inter text-gray-500 pb-2">
              Email address
            </h1>
            <span className="text-base text-inter text-gray-900 ">
              {customerDetails.registered_email[0]}
            </span>
          </div>
          <div className="pt-4">
            <h1 className="text-base font-semibold text-inter text-gray-500 pb-2">
              Phone
            </h1>
            <span className="text-base text-inter text-gray-900 ">
              +1 200 300 9393
            </span>
          </div>
          <div className="pt-4">
            <h1 className="text-base font-semibold text-inter text-gray-500 pb-2">
              Twitter
            </h1>
            <span className="text-base text-inter text-gray-900 ">
              twitter.com/janecooper
            </span>
          </div>
          <div className="pt-4">
            <h1 className="text-base font-semibold text-inter text-gray-500 pb-2">
              LinkedIn
            </h1>
            <span className="text-base text-inter text-gray-900 ">
              linkedin.com/in/janecooper
            </span>
          </div>
          <div className="pt-4">
            <h1 className="text-base font-semibold text-inter text-gray-500 pb-2">
              Connection Strength
            </h1>
            <span className="text-base text-inter text-gray-900 ">Strong</span>
          </div>
          <div className="pt-4">
            <h1 className="text-base font-semibold text-inter text-gray-500 pb-2">
              Sentiment
            </h1>
            <span className="text-base text-inter text-gray-900 ">
              Positive
            </span>
          </div>
        </div>
      </div>

      <CustomeDialog
        title="Edit Contact Person"
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        width="w-5/12"
        LogComminicationForm={<ProfileModalForm toggleModal={toggleModal} />}
      />

      <CustomeDialog
        title="Add to Workflow"
        isOpen={isProfileModalOpen}
        toggleModal={toggleProfileModal}
        width="w-4/12"
        LogComminicationForm={
          <WorkFlowModal toggleModal={toggleProfileModal} />
        }
      />
    </div>
  );
};

export default CustomerDetails;
