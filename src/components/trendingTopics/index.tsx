import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchTrendingTopics } from "../../utils/APIHelperFun";
import Loader from "../Common/skeleton/TrendingTopicsSkeleton";
import { TrendingTopicsType } from "../../types/home.";

const TrendingTopics = (): JSX.Element => {
  const {
    data: trendingTopics,
    isLoading,
    isError,
  } = useQuery("trending_topics", fetchTrendingTopics);

  const { data } = !isLoading && !isError && trendingTopics?.data;

  return (
    <div className="pt-6">
      <p className="font-inter text-gray-900 text-xl pb-4 px-4">
        Trending Today
      </p>
      <ul
        className={
          data?.AI
            ? `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-96 overflow-y-auto divide-y divider-gray-200 dark:divide-gray-700`
            : ""
        }
      >
        {!isLoading && !isError ? (
          Array.isArray(data.AI) ? (
            <>
              {data?.AI?.map((topics: TrendingTopicsType) => (
                <li className="w-full py-4">
                  <div className="flex items-center">
                    <p className="text-justify font-inter text-sm text-gray-600 font-medium leading-6">
                      {topics.summary}
                    </p>
                  </div>
                  <Link
                    to={`${topics.link}`}
                    target="_blank"
                    className=" text-indigo-600 mt-4 inline-block "
                  >
                    {topics.link}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <p className="text-center font-inter text-gray-900 text-base pt-2">
              {data}
            </p>
          )
        ) : (
          <div className="pt-4">
            {isError ? (
              <h1 className="text-center font-inter text-sm text-gray-600 font-medium leading-6">
                Something is wrong !
              </h1>
            ) : (
              <Loader />
            )}
          </div>
        )}
        {!isLoading && Array.isArray(data?.AI) && (
          <div className="flex justify-end">
            <span className="font-inter text-sm text-indigo-600 cursor-pointer font-medium pt-1">
              View All
            </span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TrendingTopics;
