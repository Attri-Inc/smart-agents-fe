import Sidebar from "../../components/sidebar";

const NewAgreement = (): JSX.Element => {
  return (
    <div className="h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col overflow-auto">
        <div className="h-full">
          <div className="px-12 py-4">
            <div className="flex items-center border-b border-gray-500">
              <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
                Your Contact
              </h1>
            </div>
            <div className="w-8/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAgreement;
