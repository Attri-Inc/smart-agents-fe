import React, { useState } from "react";
import Introduction from "./onBordingForms/Introduction";
import TimeLocationForm from "./onBordingForms/TimeLocationForm";
import AccountConfiguration from "./onBordingForms/AccountConfiguration";
import OrganizationConfiguration from "./onBordingForms/OrganizationConfiguration";
import SocialProfileConfiguration from "./onBordingForms/SocialProfileConfiguration";
import TopicInterest from "./onBordingForms/TopicInterest";
import FavouriteWebsites from "./onBordingForms/FavouriteWebsites";
import DriveConfiguration from "./onBordingForms/DriveConfiguration";
import CrmUrlConfiguration from "./onBordingForms/CrmUrlConfiguration";
import CRMLogin from "./onBordingForms/CRMLogin";
import ImportCRMConfiguration from "./onBordingForms/ImportCRMConfiguration";

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

    <Step1 />,
    <Step2 />,
    <Step3 />,
    // Add more steps as needed
  ];
  const [currentStep, setCurrentStep] = useState(0);

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
          <div className="mt-4">
            {/* {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Back
              </button>
            )} */}
            {currentStep < formSteps.length - 1 && (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md"
              >
                Next
              </button>
            )}
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

// Example form steps
const Step1 = () => <div>Step 1</div>;
const Step2 = () => <div>Step 2</div>;
const Step3 = () => <div>Step 3</div>;

export default MultiFormStepper;
