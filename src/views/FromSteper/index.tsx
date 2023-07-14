import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Introduction from "./onBordingForms/Introduction";
import TimeLocationForm from "./onBordingForms/TimeLocationForm";
import AccountConfiguration from "./onBordingForms/AccountConfiguration";
import OrganizationConfiguration from "./onBordingForms/OrganizationConfiguration";
import TopicInterest from "./onBordingForms/TopicInterest";
// import FavouriteWebsites from "./onBordingForms/FavouriteWebsites";
import DriveConfiguration from "./onBordingForms/DriveConfiguration";
import CrmUrlConfiguration from "./onBordingForms/CrmUrlConfiguration";
import CRMLogin from "./onBordingForms/CRMLogin";
import ImportCRMConfiguration from "./onBordingForms/ImportCRMConfiguration";
import OnBoardingFinished from "./onBordingForms/OnBoardingFinished";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  InterestTopicsKeywordType,
  interestTopicsKeyword,
} from "../../utils/commonData";
import { userSetting } from "../../utils/authAPIHandler";

const MultiFormStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const navigation = useNavigate();

  const [country, setCountry] = useState<any>();
  const [dateFormat, setDateFormat] = useState<any>();
  const [timeFormat, setTimeFormat] = useState<any>();
  const [organizationWebsites, setOrganizationWebsite] = useState<any[]>([""]);
  const [interestTopics, setInterestTopics] = useState<
    InterestTopicsKeywordType[]
  >(interestTopicsKeyword);
  // const [favouriteWebsites, setFavouriteWebsites] = useState<any[]>([""]);
  const [driveLink, setDriveLink] = useState<any[]>([""]);
  const [isProfileLoading, setIsProfileLoading] = useState<boolean>();

  const isSelectedTag = () => {
    return interestTopics.some((tag: any) => tag.isSelected === true);
  };

  // Array of form steps
  const formSteps: any[] = [
    <Introduction />,
    <TimeLocationForm
      country={country}
      setCountry={setCountry}
      dateFormat={dateFormat}
      setDateFormat={setDateFormat}
      timeFormat={timeFormat}
      setTimeFormat={setTimeFormat}
    />,
    <AccountConfiguration />,
    <OrganizationConfiguration
      organizationWebsites={organizationWebsites}
      setOrganizationWebsite={setOrganizationWebsite}
    />,
    // <SocialProfileConfiguration />,
    <TopicInterest
      interestTopics={interestTopics}
      setInterestTopics={setInterestTopics}
    />,
    // <FavouriteWebsites
    //   favouriteWebsites={favouriteWebsites}
    //   setFavouriteWebsites={setFavouriteWebsites}
    // />,
    <DriveConfiguration driveLink={driveLink} setDriveLink={setDriveLink} />,
    <CrmUrlConfiguration />,
    <CRMLogin />,
    <ImportCRMConfiguration />,
    <OnBoardingFinished />,
    // Add more steps as needed
  ];

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

  const handleFinishedProfileSetting = async () => {
    let token = localStorage.getItem("TOKEN");
    token = token && JSON.parse(token);

    const allTags = interestTopics
      .filter((tag) => tag.isSelected == true)
      .map((item) => item.label);

    const formData = new FormData();
    formData.append("name", "Riyaz");
    formData.append("country", country.name);
    formData.append("internal_doc_path", JSON.stringify(driveLink));
    formData.append("organization_pages", JSON.stringify(organizationWebsites));
    formData.append("topic_of_interests", JSON.stringify(allTags));
    formData.append("timeformat_24_hour", timeFormat.name);
    formData.append("date_format", dateFormat.name);
    const response = await userSetting(formData, token);
    console.log("response", response);
  };

  const handleFinsihedProfile = () => {
    if (currentStep === 5) {
      handleFinishedProfileSetting();
      handleNextButtonClick();
    } else {
      handleNextButtonClick();
    }
  };

  const renderSkipAndNextButton = () => {
    if (currentStep === 4) {
      return (
        <>
          {!isSelectedTag() && (
            <button
              onClick={handleSkip}
              className="px-6 py-2 bg-gray-800 text-gray-400 rounded-md"
            >
              I’ll Skip for now
            </button>
          )}
          {currentStep === 4 && isSelectedTag() && (
            <button
              onClick={handleNextButtonClick}
              className="px-6 py-2 flex items-center gap-2 bg-indigo-600 text-white rounded-md"
            >
              Next <BiRightArrow />
            </button>
          )}
        </>
      );
    } else {
      return (
        <button
          onClick={handleFinsihedProfile}
          className="px-6 py-2 flex items-center gap-2 bg-indigo-600 text-white rounded-md"
        >
          {currentStep === 5 ? "Finish setting up profile" : "Next"}
          {currentStep !== 5 && <BiRightArrow />}
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
                className="px-6 py-2 text-xs font-medium flex items-center gap-2 bg-gray-800 text-gray-400 rounded-md"
              >
                <BiLeftArrow /> Back
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
