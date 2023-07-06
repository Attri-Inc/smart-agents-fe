import React, { useState } from "react";
import { randomId } from "../../../utils/helper";
import { FaPlus } from "react-icons/fa";
import FileUpload from "./FileUpload";
import MenuList from "../../Common/MenuList";
import SelectOption from "./SelectOption";

type Props = {};

const people: any[] = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const CrmUrlConfiguration = (props: Props) => {
  const [selectedCRM, setSelectedCRM] = useState<any>();

  return (
    <div>
      <div className="text-white border-b border-gray-700 pb-4">
        <h1 className="text-lg">Your profile is done!</h1>
        <p className="text-lg font-semibold pt-2">Let us configure your CRM</p>
      </div>
      <div className="pt-4 border-b border-gray-700">
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          Select CRM
        </label>
        <div className="mb-4">
          <SelectOption
            options={people}
            selected={selectedCRM}
            setSelected={setSelectedCRM}
          />
        </div>
      </div>
    </div>
  );
};

export default CrmUrlConfiguration;
