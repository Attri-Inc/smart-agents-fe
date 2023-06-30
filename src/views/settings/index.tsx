import { Tab } from "@headlessui/react";
import Sidebar from "../../components/sidebar";
import ProfileSetting from "./ProfileSetting";
import CustomButton from "../../components/customButton";
import SocialNetworkPreferences from "./SocialNetworkPreferences";
import AppPreferences from "./AppPreferences";

const settingsTab = [
  { label: "Profile Settings", id: 1 },
  { label: "CRM Settings", id: 2 },
  { label: "Social Network Preferences", id: 3 },
  { label: "App Preferences", id: 4 },
];

const Settings = () => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="container border overflow-auto">
        <div className="w-full px-16 pt-6">
          <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
            Settings
          </h1>
          <Tab.Group>
            <Tab.List className="flex gap-16 flex-1 ">
              {settingsTab.map((category: any) => (
                <Tab
                  key={category.id}
                  className={({ selected }) =>
                    classNames(
                      "rounded-md py-2.5 text-sm font-medium text-inter leading-5 text-gray-500",
                      "focus:outline-none",
                      selected ? "bg-gray-100 px-4" : "text-gray-700"
                    )
                  }
                >
                  {category.label}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel>
                <ProfileSetting />
              </Tab.Panel>
              <Tab.Panel>
                <div className="py-4 border-b">
                  <div className="border-b pb-6">
                    <h1>Cooper Credentials</h1>
                  </div>
                  <div className="flex items-center gap-8 py-4">
                    <div className="w-5/12 pr-8">
                      <p className="tex-inter font-medium text-sm text-gray-700">
                        Connect to Copper
                      </p>
                      <small className="tex-inter text-gray-500">
                        Integrate with your Copper CRM account.
                      </small>
                    </div>
                    <CustomButton
                      title="Integrate with Copper"
                      disabled={false}
                      containerStyle="text-xs bg-indigo-100 text-indigo-700 rounded mt-6"
                      type="button"
                      handleClick={() => {}}
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <SocialNetworkPreferences />
              </Tab.Panel>
              <Tab.Panel>
                <AppPreferences />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="px-16 py-4">
          <CustomButton
            title="Save Changes"
            disabled={false}
            containerStyle="text-xs bg-indigo-600 text-white rounded text-inter font-medium"
            type="button"
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
