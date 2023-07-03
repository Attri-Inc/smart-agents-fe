import { Disclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";
import Call from "../icons/Call";
import Email from "../icons/Email";
import Calendar from "../icons/timelineIcons/Calendar";
import Twitter from "../icons/Twitter";

const UserDetails = ({ userDetails }: any) => {
  return (
    <div className="mx-auto w-full rounded-2xl bg-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="border-x border-y flex w-full justify-between bg-gray-50 px-4 py-4 text-left text-xs tracking-wider font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-50 focus-visible:ring-opacity-75">
              <span>DETAILS</span>
              <FiChevronUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="divide-y divider-gray-200 dark:divide-gray-700 border-y border-x text-sm text-gray-500">
              <div className=" flex items-center justify-between px-4 py-4">
                <div className="flex flex-col items-center">
                  <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                    Picture
                  </p>
                  <img src={userDetails.img} />
                </div>
                <span className="text-indigo-600 text-sm font-medium cursor-pointer ">
                  Update
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                    Full name
                  </p>
                  <p className="font-inter text-gray-900 text-sm pb-1">
                    {userDetails.name}
                  </p>
                </div>
                <span className="text-indigo-600 text-sm font-medium cursor-pointer ">
                  Update
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                    Address
                  </p>
                  <p className="w-96 font-inter text-gray-900 text-sm pb-1">
                    {userDetails.address}
                  </p>
                </div>
                <span className="text-indigo-600 text-sm font-medium cursor-pointer ">
                  Update
                </span>
              </div>
              {userDetails.socialMedia.map((media: any) => (
                <div className="flex items-center justify-between px-4 py-4">
                  <div>
                    <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                      {media.label}
                    </p>
                    <p className="font-inter text-gray-900 text-sm pb-1">
                      {media.value}
                    </p>
                  </div>
                  <span className="text-indigo-600 text-sm font-inter cursor-pointer ">
                    Update
                  </span>
                </div>
              ))}
              {userDetails.connectionDetails.map((connection: any) => (
                <div className="px-4 py-4">
                  <div>
                    <p className="font-inter text-gray-500 font-medium text-sm pb-1">
                      {connection.label}
                    </p>
                    <p className="font-inter text-gray-500 text-sm pb-1">
                      {connection.value}
                    </p>
                  </div>
                </div>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="border-x border-y flex w-full justify-between bg-gray-50 px-4 py-4 text-left text-xs tracking-wider font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-50 focus-visible:ring-opacity-75">
              <span>TIMELINE</span>
              <FiChevronUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-gray-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="divide-y divider-gray-200 dark:divide-gray-700 border-y border-x text-sm text-gray-500">
              <div className="p-8">
                <ul className="relative border-l border-gray-200 dark:border-gray-200">
                  <li className="mb-20 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <Email />
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center mb-1 text-lg font-inter font-inter text-gray-900">
                        <span className="text-gray-500 text-sm font-inter mr-2 px-2.5 py-0.5 ml-3">
                          Emailed
                        </span>
                        Happy New Year
                      </h3>
                      <span className="text-gray-500 font-inter">Sep 22</span>
                    </div>
                  </li>
                  <li className="mb-20 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <Call />
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center mb-1 text-lg font-inter font-inter text-gray-900">
                        <span className="text-gray-500 text-sm font-inter mr-2 px-2.5 py-0.5 ml-3">
                          Called
                        </span>
                        to catch up
                      </h3>
                      <span className="text-gray-500 font-inter">Sep 22</span>
                    </div>
                  </li>
                  <li className="mb-20 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <Email />
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center mb-1 text-lg font-inter font-inter text-gray-900">
                        <span className="text-gray-500 text-sm font-inter mr-2 px-2.5 py-0.5 ml-3">
                          Emailed
                        </span>
                        Follow-up article
                      </h3>
                      <span className="text-gray-500 font-inter">Sep 22</span>
                    </div>
                  </li>
                  <li className="mb-20 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <Calendar />
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center mb-1 text-lg font-inter text-gray-900">
                        <span className="text-gray-500 text-sm font-inter mr-2 px-2.5 py-0.5 ml-3">
                          Met for
                        </span>
                        Cofffee chat
                      </h3>
                      <span className="text-gray-500 font-inter">Sep 22</span>
                    </div>
                  </li>
                  <li className="mb-20 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <Twitter />
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center mb-1 text-lg font-inter text-gray-900">
                        <span className="text-gray-500 text-sm font-inter mr-2 px-2.5 py-0.5 ml-3">
                          On Twitter
                        </span>
                        Retweeted a post
                      </h3>
                      <span className="text-gray-500 font-inter">Sep 22</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default UserDetails;
