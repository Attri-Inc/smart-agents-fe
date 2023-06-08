import Avatar from "../../assets/Avatar.png";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import TopConnectionsSkeleton from "../Common/skeleton/TopConnectionsSkeleton";
import Arrow from "../icons/Arrow";

interface commonInterestData {
  keyword: string;
  number_of_connection: number;
}
interface commonInterestProps {
  commonCustomersInterest: commonInterestData[];
  isCustomerCommonDataLoading: boolean;
  isCustomerCommonDataEror: boolean;
}

const CommonInterest = (props: commonInterestProps): JSX.Element => {
  const {
    commonCustomersInterest,
    isCustomerCommonDataEror,
    isCustomerCommonDataLoading,
  } = props;

  if (isCustomerCommonDataEror) {
    return <h1>Something is wrong !</h1>;
  }

  if (isCustomerCommonDataLoading) {
    return <TopConnectionsSkeleton />;
  }

  return (
    <div className="pt-6">
      <p className="font-inter font-medium text-gray-900 text-lg pb-2">
        Common Interests
      </p>
      <ul className="divide-y divider-gray-200 dark:divide-gray-700 border-y">
        {commonCustomersInterest?.map((commonInterest: commonInterestData) => (
          <li className="flex items-center justify-between w-full py-4">
            <div className="flex items-center w-64">
              <div className="flex items-center pb-2">
                <p className="font-inter text-base text-indigo-600 font-medium capitalize">
                  {commonInterest.keyword}
                </p>
              </div>
            </div>
            <div className="flex items-center width w-64">
              <div className="flex items-center -space-x-4 pr-8">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={Avatar2}
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={Avatar3}
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={Avatar1}
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={Avatar}
                  alt=""
                />
                <span className="pl-8 text-gray-400 font-medium">
                  +{commonInterest.number_of_connection}
                </span>
              </div>
            </div>
            <Arrow className="cursor-pointer" />
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
          View All
        </span>
      </div>
    </div>
  );
};

export default CommonInterest;
