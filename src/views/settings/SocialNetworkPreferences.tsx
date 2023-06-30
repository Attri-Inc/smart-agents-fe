import CustomButton from "../../components/customButton";

const SocialNetworkPreferences = () => {
  return (
    <div className="pt-4">
      <div className="">
        <div className="pb-6">
          <h1 className="text-lg font-medium text-inter text-gray-900">
            Google Preferences
          </h1>
        </div>
        <div className="flex items-center gap-8 py-6 border-y">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Connect to Google
            </p>
            <small className="tex-inter text-gray-500">
              Integrate with your Gmail account.
            </small>
          </div>
          <CustomButton
            title="Integrate with Google"
            disabled={false}
            containerStyle="text-xs bg-indigo-100 text-indigo-700 font-medium rounded"
            type="button"
            handleClick={() => {}}
          />
        </div>
      </div>
      <div className="pt-4">
        <div className=" pb-6">
          <h1 className="text-lg font-medium text-inter text-gray-900">
            Microsoft Preferences
          </h1>
        </div>
        <div className="flex items-center gap-8 py-6 border-y">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Connect to Microsoft
            </p>
            <small className="tex-inter text-gray-500">
              Integrate with your Microsoft account.
            </small>
          </div>
          <CustomButton
            title="Integrate with Microsoft"
            disabled={false}
            containerStyle="text-xs bg-indigo-100 text-indigo-700 text-inter font-medium rounded"
            type="button"
            handleClick={() => {}}
          />
        </div>
      </div>
      <div className="pt-4">
        <div className=" pb-6">
          <h1 className="text-lg font-medium text-inter text-gray-900">
            Linkedin Preferences
          </h1>
        </div>
        <div className="flex items-center gap-8 py-6 border-y">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Connect to Linkedin
            </p>
            <small className="tex-inter text-gray-500">
              Integrate with your Linkedin account.
            </small>
          </div>
          <CustomButton
            title="Integrate with Linkedin"
            disabled={false}
            containerStyle="text-xs bg-indigo-100 text-indigo-700 text-inter font-medium rounded"
            type="button"
            handleClick={() => {}}
          />
        </div>
        <div className="pt-4 flex gap-8  border-b">
          <div className="w-5/12 pr-10">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Permissions
            </p>
            <small className="tex-inter text-gray-500">
              Customize your preferences for reading, posting, replying to
              messages, and accessing each social network.
            </small>
          </div>
          <ul>
            {Array.from([
              "Read Messages",
              "Post Messages",
              "Reply to messages",
              "Access to network",
            ]).map((label: string) => (
              <li className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-700 rounded"
                />
                <label className="ml-2 text-sm  text-gray-900 text-inter">
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-4">
        <div className=" pb-6">
          <h1 className="text-lg font-medium text-inter text-gray-900">
            Twitter Preferences
          </h1>
        </div>
        <div className="flex items-center gap-8 py-6 border-y">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Connect to Twitter
            </p>
            <small className="tex-inter text-gray-500">
              Integrate with your Twitter account.
            </small>
          </div>
          <CustomButton
            title="Integrate with Twitter"
            disabled={false}
            containerStyle="text-xs bg-indigo-100 text-indigo-700 text-inter font-medium rounded"
            type="button"
            handleClick={() => {}}
          />
        </div>
        <div className="pt-4 flex gap-8  border-b">
          <div className="w-5/12 pr-10">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Permissions
            </p>
            <small className="tex-inter text-gray-500">
              Customize your preferences for reading, posting, replying to
              messages, and accessing each social network.
            </small>
          </div>
          <ul>
            {Array.from([
              "Read Messages",
              "Post Messages",
              "Reply to messages",
              "Access to network",
            ]).map((label: string) => (
              <li className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-700 rounded"
                />
                <label className="ml-2 text-sm  text-gray-900 text-inter">
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-4">
        <div className=" pb-6">
          <h1 className="text-lg font-medium text-inter text-gray-900">
            Facebook Preferences
          </h1>
        </div>
        <div className="flex items-center gap-8 py-6 border-y">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Connect to Facebook
            </p>
            <small className="tex-inter text-gray-500">
              Integrate with your Facebook account.
            </small>
          </div>
          <CustomButton
            title="Integrate with Facebook"
            disabled={false}
            containerStyle="text-xs bg-indigo-100 text-indigo-700 text-inter font-medium rounded"
            type="button"
            handleClick={() => {}}
          />
        </div>
        <div className="pt-4 flex gap-8  border-b">
          <div className="w-5/12 pr-10">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Permissions
            </p>
            <small className="tex-inter text-gray-500">
              Customize your preferences for reading, posting, replying to
              messages, and accessing each social network.
            </small>
          </div>
          <ul>
            {Array.from([
              "Read Messages",
              "Post Messages",
              "Reply to messages",
              "Access to network",
            ]).map((label: string) => (
              <li className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-700 rounded"
                />
                <label className="ml-2 text-sm  text-gray-900 text-inter">
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-4">
        <div className=" pb-6">
          <h1 className="text-lg font-medium text-inter text-gray-900">
            Instagram Preferences
          </h1>
        </div>
        <div className="flex items-center gap-8 py-6 border-y">
          <div className="w-5/12 pr-8">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Connect to Instagram
            </p>
            <small className="tex-inter text-gray-500">
              Integrate with your Instagram account.
            </small>
          </div>
          <CustomButton
            title="Integrate with Instagram"
            disabled={false}
            containerStyle="text-xs bg-indigo-100 text-indigo-700 text-inter font-medium rounded"
            type="button"
            handleClick={() => {}}
          />
        </div>
        <div className="pt-4 flex gap-8  border-b">
          <div className="w-5/12 pr-10">
            <p className="tex-inter font-medium text-sm text-gray-700">
              Permissions
            </p>
            <small className="tex-inter text-gray-500">
              Customize your preferences for reading, posting, replying to
              messages, and accessing each social network.
            </small>
          </div>
          <ul>
            {Array.from([
              "Read Messages",
              "Post Messages",
              "Reply to messages",
              "Access to network",
            ]).map((label: string) => (
              <li className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-700 rounded"
                />
                <label className="ml-2 text-sm  text-gray-900 text-inter">
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworkPreferences;
