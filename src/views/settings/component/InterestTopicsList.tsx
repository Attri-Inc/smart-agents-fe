import { InterestTopicsKeywordType } from "../../../utils/commonData";

interface InterestTopicsListType {
  interestTopics: InterestTopicsKeywordType[];
  toggleModal?: () => void;
}

const InterestTopicsList = ({
  interestTopics,
  toggleModal,
}: InterestTopicsListType): JSX.Element => {
  const showCount = interestTopics.length > 5;

  return (
    <div>
      {interestTopics.slice(0, 5)?.map((topic: InterestTopicsKeywordType) => (
        <span
          className="py-2 px-4 cursor-pointer text-sm text-inter font-medium m-2 rounded-full inline-block bg-gray-200"
          key={topic.id}
        >
          {topic.label}
        </span>
      ))}
      {showCount && (
        <button
          onClick={toggleModal}
          className="text-indigo-500 font-bold font-inter text-sm py-2 px-3"
        >{`+${interestTopics.length - 5} Add more`}</button>
      )}
    </div>
  );
};

export default InterestTopicsList;
