import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Introduction from "./onBordingForms/Introduction";
import TimeLocationForm from "./onBordingForms/TimeLocationForm";
import AccountConfiguration from "./onBordingForms/AccountConfiguration";
import OrganizationConfiguration from "./onBordingForms/OrganizationConfiguration";
import TopicInterest from "./onBordingForms/TopicInterest";
import FavouriteWebsites from "./onBordingForms/FavouriteWebsites";
import DriveConfiguration from "./onBordingForms/DriveConfiguration";
import CrmUrlConfiguration from "./onBordingForms/CrmUrlConfiguration";
import CRMLogin from "./onBordingForms/CRMLogin";
import ImportCRMConfiguration from "./onBordingForms/ImportCRMConfiguration";
import OnBoardingFinished from "./onBordingForms/OnBoardingFinished";

const MultiFormStepper = () => {
  // Array of form steps
  const formSteps: any[] = [
    <Introduction />,
    <TimeLocationForm />,
    <AccountConfiguration />,
    <OrganizationConfiguration />,
    // <SocialProfileConfiguration />,
    <TopicInterest />,
    <FavouriteWebsites />,
    <DriveConfiguration />,
    <CrmUrlConfiguration />,
    <CRMLogin />,
    <ImportCRMConfiguration />,
    <OnBoardingFinished />,
    // Add more steps as needed
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigate();

  const handleNext = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  };

  const handleSkip = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const renderFormStep = () => {
    // Render the current form step
    return formSteps[currentStep];
  };

  const handleNextButtonClick = () => {
    if (currentStep !== 10) {
      handleNext();
    } else navigation("/");
  };

  const renderSkipAndNextButton = () => {
    if (currentStep === 4 || currentStep === 5) {
      return (
        <button
          onClick={handleSkip}
          className="px-6 py-2 bg-gray-800 text-gray-400 rounded-md"
        >
          I’ll Skip for now
        </button>
      );
    } else {
      return (
        <button
          onClick={handleNextButtonClick}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md"
        >
          {currentStep === 6 ? "Finish setting up profile" : "Next"}
        </button>
      );
    }
  };

  return (
    <div className="h-screen flex-col flex justify-center items-center bg-authBackgoundColor">
      <div className="w-4/12">
        {renderFormStep()}
        {currentStep === 0 ? (
          <div className="pt-4">
            <button
              onClick={handleNext}
              className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-medium"
            >
              Let's start
            </button>
          </div>
        ) : (
          <div className="mt-4 flex justify-between">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md"
              >
                Back
              </button>
            )}
            {renderSkipAndNextButton()}
            {/* {currentStep < formSteps.length - 1 && (
              <button
                onClick={handleSkip}
                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md"
              >
                Skip
              </button>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiFormStepper;
