import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

interface Option {
  id: number;
  name: string;
}

interface MenuListProps {
  options: Option[];
  selected: Option;
  rounded?: string;
  placeholder: string;
  setSelected: (value: Option) => void;
}

const DropdownMenuList: React.FC<MenuListProps> = ({
  options,
  selected,
  setSelected,
  rounded,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <Listbox
        value={selected}
        onChange={(value: Option) => setSelected(value)}
      >
        <div className="relative">
          <Listbox.Button
            className={`relative cursor-pointer w-full ${
              rounded ? rounded : ""
            }    border-gray-700 border bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
          >
            <span
              className={`block truncate text-inter ${
                selected ? "text-gray-700" : " text-gray-700"
              } font-medium text-sm `}
            >
              {selected ? selected.name : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FaChevronDown
                className="h-3.5 w-3.5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto z-20 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option: Option, personIdx: number) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate text-inter text-gray-900 text-sm ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropdownMenuList;
