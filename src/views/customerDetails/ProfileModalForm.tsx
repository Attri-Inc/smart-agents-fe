import React, { useState } from "react";
import avatar from "../../assets/Ellipse 1.png";
import DropdownMenuList from "../../components/Common/DropdownMenuList";

const customerTypes = [{ id: 1, name: "Potential Customer" }];
const ProfileModalForm = ({ toggleModal }: any) => {
  const [customerType, setCustomerType] = useState<any>("");
  return (
    <form>
      <div className="w-full">
        <div className="pt-2">
          <label className="block mb-2 font-medium text-base text-gray-700 dark:text-white">
            Profile Picture
          </label>
          <div className="w-20 h-20">
            <img src={avatar} className="rounded-full" />
          </div>
        </div>
        <div className="py-4">
          <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex gap-2">
          <div className="mb-6 w-2/4">
            <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6 w-2/4">
            <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="+4356757"
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mb-6 w-2/4">
            <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Profile URL"
              required
            />
          </div>
          <div className="mb-6 w-2/4">
            <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedIn"
              className="shadow-sm bg-white border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Profile URL"
              required
            />
          </div>
        </div>
      </div>
      <div className="pb-4">
        <label className="block mb-2 text-inter text-sm text-gray-700 dark:text-white">
          Type
        </label>
        <DropdownMenuList
          options={customerTypes}
          selected={customerType}
          setSelected={setCustomerType}
          rounded="rounded-md"
          placeholder="Choose one"
        />
      </div>
      <div className="flex gap-4 justify-end border-t pt-2">
        <button
          onClick={toggleModal}
          className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-3 bg-indigo-600 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileModalForm;
