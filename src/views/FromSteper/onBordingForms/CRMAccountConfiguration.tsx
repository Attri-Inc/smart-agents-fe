import { useState } from "react";
import SelectOption from "./SelectOption";

const copperCRM: any[] = [{ name: "Copper CRM" }];

const CrmUrlConfiguration = () => {
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
            options={copperCRM}
            selected={selectedCRM}
            setSelected={setSelectedCRM}
            rounded="rounded-lg"
            placeholder="Please choose one"
          />
        </div>
      </div>
    </div>
  );
};

export default CrmUrlConfiguration;
