import Avatar2 from "../assets/Avatar2.png";
import Avatar3 from "../assets/Avatar3.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import QueryInput from "../components/Common/QueryInput";
import SearchBar from "../components/sarchbar";
import Sidebar from "../components/sidebar";

const Customers = (): JSX.Element => {
  const [userAskedText, setUserAskedText] = React.useState<any>();

  const handleRedirectToQueryPage = () => navigate("/query");
  const handleOnQuerySearch = (e: any) => {
    setUserAskedText(e.target.value);
  };
  const navigate = useNavigate();
  const columns = ["CONTACT NAME", "EMAIL", "PHONE", "SOCIAL-MEDIA"];
  const profiles = [
    {
      name: "Mr riyaz ansari",
      email: "mdriyaz@gmail.com",
      img: Avatar2,
      phone: "+91620103316",
      socialMediaLink: "https://www.linkedin.com/in/mdriyazansari/",
      uid: 1,
      address:
        "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
      socialMedia: [
        { label: "Email Address", value: "email@example.com" },
        { label: "Phone", value: "+1 200 300 9393" },
        { label: "Twitter", value: "twitter.com/janecooper" },
        { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
      ],
      connectionDetails: [
        { label: "Last Contact", value: "25th June, 2022" },
        { label: "Connection Strength", value: "Strong" },
        { label: "Sentiment", value: "Positive" },
      ],
    },
    {
      name: "Akila",
      email: "akila@gmail.com",
      img: Avatar3,
      phone: "+91620103316",
      socialMediaLink: "https://www.linkedin.com/in/mdriyazansari/",
      uid: 1,
      address:
        "Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
      socialMedia: [
        { label: "Email Address", value: "email@example.com" },
        { label: "Phone", value: "+1 200 300 9393" },
        { label: "Twitter", value: "twitter.com/janecooper" },
        { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
      ],
      connectionDetails: [
        { label: "Last Contact", value: "25th June, 2022" },
        { label: "Connection Strength", value: "Strong" },
        { label: "Sentiment", value: "Positive" },
      ],
    },
    {
      name: "Suraj Kumar",
      email: "surajkumar@gmail.com",
      img: Avatar3,
      phone: "+91620103316",
      socialMediaLink: "https://www.linkedin.com/in/mdriyazansari/",
      id: "jane.copper@example.com",
      uid: 2,
      address:
        "Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
      socialMedia: [
        { label: "Email Address", value: "email@example.com" },
        { label: "Phone", value: "+1 200 300 9393" },
        { label: "Twitter", value: "twitter.com/janecooper" },
        { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
      ],
      connectionDetails: [
        { label: "Last Contact", value: "25th June, 2022" },
        { label: "Connection Strength", value: "Strong" },
        { label: "Sentiment", value: "Positive" },
      ],
    },
    {
      email: "jane@gmail.com",
      img: Avatar3,
      phone: "+91620103316",
      socialMediaLink: "https://www.linkedin.com/in/mdriyazansari/",
      name: "Jane Copper",
      id: "jane.copper@example.com",
      uid: 1,
      address:
        "Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. ",
      socialMedia: [
        { label: "Email Address", value: "email@example.com" },
        { label: "Phone", value: "+1 200 300 9393" },
        { label: "Twitter", value: "twitter.com/janecooper" },
        { label: "LinkedIn", value: "linkedin.com/in/janecooper" },
      ],
      connectionDetails: [
        { label: "Last Contact", value: "25th June, 2022" },
        { label: "Connection Strength", value: "Strong" },
        { label: "Sentiment", value: "Positive" },
      ],
    },
  ];

  const handleRedirect = (customer: any) => {
    navigate("/customer", { state: customer });
  };
  return (
    <div className="relative h-screen overflow-hidden md:flex divide-gray-200 divide-x">
      <div className="absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Sidebar />
      </div>
      <div className="w-full px-8 py-4 h-screen overflow-y-auto">
        <h1 className="font-inter font-semibold text-gray-900 text-2xl pb-4">
          Your Contacts
        </h1>
        <div className="relative overflow-x-auto">
          <table className="border-x border-b w-full text-sm text-left text-gray-500">
            <thead className="border-y font-inter text-xs text-gray-500 uppercase bg-gray-50">
              <tr className="divider-gray-200">
                {columns.map((column) => (
                  <th
                    scope="col"
                    className="px-6 py-3 font-inter text-sx text-gray-500"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {profiles.map((customer: any) => (
                <tr className="bg-white border-b font-inter">
                  <td
                    onClick={() => handleRedirect(customer)}
                    scope="row"
                    className="px-6 py-4 font-medium text-sm text-gray-900 whitespace-nowrap cursor-pointer"
                  >
                    {customer.name}
                  </td>
                  <td className="px-6 py-4  text-sm text-gray-500">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4  text-sm text-gray-500">
                    {customer.phone}
                  </td>
                  <td className="px-6 py-4  text-sm text-gray-500">
                    {customer.socialMediaLink}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full py-4 flex items-end">
          <QueryInput
            onclick={handleRedirectToQueryPage}
            onChange={handleOnQuerySearch}
            value={userAskedText}
          />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Customers;
