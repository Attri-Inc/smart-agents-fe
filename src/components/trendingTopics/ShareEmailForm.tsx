import { useState } from "react";
import AutoComplete from "../Common/AutoComplete";
import { contact } from "./sampleData";
import {
  // getCustomerList,
  sendEmailToSingleContact,
} from "../../utils/APIHelperFun";
// import { useQuery } from "react-query";
import { FaTimes } from "react-icons/fa";
import Spinner from "../Common/skeleton/Spinner";

const ShareEmailForm = ({
  isMultipleSelectModalOpen,
  toggleShareModal,
  emailMessage,
  emailSubject,
  currentReadingTopic,
  setEmailMessage,
  setEmailSubject,
}: any) => {
  const [selected, setSelected] = useState<any>();
  const [selectContacts, setSelectContacts] = useState<any[]>([]);
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false);
  // const {
  //   data: customerList,
  //   isLoading: isCustomerListLoading,
  //   isError: isCustomerListErorr,
  // } = useQuery("emailRecipent-list", () => getCustomerList());

  const handleSendEmailToSingleContact = async () => {
    let email;
    const emails = selectContacts
      .map((email) => email.registered_email)
      .join(",");

    email = emails.length > 0 ? emails : selected.registered_email;

    try {
      setIsEmailSending(true);
      await sendEmailToSingleContact(currentReadingTopic.summary, email);
      setIsEmailSending(false);
      toggleShareModal();
      //   toggleShareModalMultiple();
      // setEmailSubject(response.data);
    } catch (error) {
      setIsEmailSending(false);
      // Handle error
      console.error("Error fetching email subject:", error);
    }
  };

  const handleRemoveSelectedContact = (removedContact: any) => {
    setSelectContacts((prev: any) =>
      prev.filter((contact: any) => contact.id !== removedContact.id)
    );
  };

  return (
    <div className="pt-4">
      <div className="mb-6">
        <label className="block mb-2 font-medium text-inter text-sm text-gray-700 dark:text-white">
          Subject
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="title"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            className="shadow-sm bg-white border  border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Subject"
            required
          />
        </div>
      </div>
      <div className="pb-4">
        <label className="block mb-2 text-inter font-medium text-sm text-gray-700 dark:text-white">
          Body
        </label>
        <textarea
          id="chat"
          rows={8}
          onChange={(e) => setEmailMessage(e.target.value)}
          value={emailMessage}
          className="block rounded-lg p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Body"
        />
      </div>
      <div className="pb-6">
        <label className="block mb-2 text-inter font-medium text-sm text-gray-700 dark:text-white">
          Contact List
        </label>

        <AutoComplete
          options={contact}
          setSelected={setSelected}
          setSelectContacts={setSelectContacts}
          selected={selected}
          isMultipleSelectModalOpen={isMultipleSelectModalOpen}
        />
      </div>
      <ul className="flex gap-2 flex-wrap items-center">
        {isMultipleSelectModalOpen &&
          selectContacts.map((contact: any) => (
            <button
              onClick={() => {}}
              className={`py-1 px-2 cursor-pointer text-sm bg-gray-200 text-gray-900 flex items-center gap-1 justify-between m-1 rounded-md
           hover:bg-gray-400 hover:text-white`}
              key={contact.id}
            >
              {contact.name}{" "}
              <FaTimes
                onClick={() => handleRemoveSelectedContact(contact)}
                className="close-icon text-gray-50"
              />
            </button>
          ))}
      </ul>
      <div className="flex gap-4 justify-end pt-2">
        <button
          onClick={toggleShareModal}
          className="py-2 px-3 bg-white text-inter text-gray-700 rounded-md border"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSendEmailToSingleContact}
          className="py-2 px-3 bg-indigo-600 text-white rounded-md flex items-center gap-3"
        >
          Send {isEmailSending && <Spinner size="w-5 h-5" className="ml-2" />}
        </button>
      </div>
    </div>
  );
};

export default ShareEmailForm;
