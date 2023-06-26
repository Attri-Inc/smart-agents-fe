import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";

interface CustomeDialogProps {
  isOpen: boolean;
  toggleModal: () => void;
  title: React.ReactNode;
  LogComminicationForm: React.ReactNode;
  width: string;
}
const CustomDialog = ({
  isOpen,
  toggleModal,
  title,
  LogComminicationForm,
  width,
}: CustomeDialogProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => toggleModal()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto w-full ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${width} transform overflow-hidden rounded-md bg-white px-4 py-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg border-b pb-2 flex w-full items-center justify-between font-medium leading-6 text-gray-900"
                  >
                    {title}
                    <HiXMark onClick={toggleModal} />
                  </Dialog.Title>
                  <div>{LogComminicationForm}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomDialog;
