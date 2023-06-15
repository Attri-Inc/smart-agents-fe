import { useQuery } from "react-query";
import { FaChevronUp } from "react-icons/fa";
import { fetchTrendingTopics } from "../../utils/APIHelperFun";
import { Disclosure } from "@headlessui/react";
import Loader from "../Common/skeleton/TrendingTopicsSkeleton";
import { Link } from "react-router-dom";
import CustomButton from "../customButton";

const TrendingTopics = (): JSX.Element => {
  const {
    data: trendingTopics,
    isLoading,
    isError,
  } = useQuery("trending_topics", fetchTrendingTopics);

  const { data } = !isLoading && !isError && trendingTopics?.data;
  const getOtherLinks = !isLoading && !isError ? Object.entries(data) : [];
  let getTransformedData = [];
  getTransformedData =
    !isLoading && !isError
      ? getOtherLinks?.map((blog: any) => {
          return {
            label: blog[0],
            blogs: blog[1],
          };
        })
      : [];

  return (
    <div className="w-full pt-4">
      <div className="">
        <div className="pt-4">
          <p className="font-inter font-bold text-gray-900 text-xl pb-4">
            Trending Today
          </p>
          <ul
            className={
              data?.AI
                ? `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-screen overflow-y-auto  divider-gray-200 dark:divide-gray-700`
                : ""
            }
          >
            {!isLoading && !isError ? (
              Array.isArray(data.AI) ? (
                <>
                  {getTransformedData?.map((topics: any) => (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${
                              open ? "" : ""
                            } flex w-full mb-2  justify-between rounded-lg bg-gray-100 py-4 px-2 text-left text-sm font-medium text-indigo-600 focus-visible:ring-opacity-75`}
                          >
                            <span>{topics.label}</span>
                            <FaChevronUp
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 text-indigo-600`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel
                            className={`p-4 flex w-full pb-2 text-sm text-gray-500 ${
                              open ? "" : ""
                            }`}
                          >
                            <div className="w-full">
                              {topics?.blogs?.map((blogs: any) => (
                                <Disclosure>
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button
                                        className={`${
                                          open ? "" : ""
                                        } flex w-full mb-2  justify-between rounded-lg bg-gray-100 py-4 px-2 text-left text-sm font-medium text-indigo-600 focus-visible:ring-opacity-75`}
                                      >
                                        <span>{topics.label}</span>
                                        <FaChevronUp
                                          className={`${
                                            open ? "rotate-180 transform" : ""
                                          } h-5 w-5 text-indigo-600`}
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel
                                        className={`p-4 flex w-full pb-2 text-sm text-gray-500 ${
                                          open ? "" : ""
                                        }`}
                                      >
                                        <div className="px-4 text-justify font-inter text-gray-900 text-base">
                                          <p className="font-inter text-base pb-2">
                                            {blogs.summary}
                                          </p>
                                          <Link
                                            className="text-indigo-600"
                                            to={`${blogs.link}`}
                                          >
                                            {blogs.link}
                                          </Link>
                                          <div className="flex gap-4 pb-4">
                                            <CustomButton
                                              title="Share with contacts"
                                              disabled={false}
                                              containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                                              type="button"
                                              handleClick={() => {}}
                                            />
                                            <CustomButton
                                              title="Share with common interest"
                                              disabled={false}
                                              containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                                              type="button"
                                              handleClick={() => {}}
                                            />
                                            <CustomButton
                                              title="Create twitte post"
                                              disabled={false}
                                              containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                                              type="button"
                                              handleClick={() => {}}
                                            />
                                            <CustomButton
                                              title="Create linkedIn post"
                                              disabled={false}
                                              containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                                              type="button"
                                              handleClick={() => {}}
                                            />
                                          </div>
                                        </div>
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </>
              ) : (
                <div>
                  <p className="text-center font-inter text-gray-900 text-base pt-2">
                    {data}
                  </p>
                </div>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
