import SelectOption from "./SelectOption";
import {
  TimeFormatDataType,
  countries,
  dateFormatDate,
} from "../../../utils/commonData";
import Map from "../../../components/icons/Map";

export const timeFormatData: TimeFormatDataType[] = [
  { id: 1, name: "24:00" },
  { id: 2, name: "12:00" },
];

const TimeLocationForm = ({
  country,
  setCountry,
  dateFormat,
  setDateFormat,
  timeFormat,
  setTimeFormat,
}: any) => {
  return (
    <div>
      <h1 className="text-xl text-white font-semibold border-b border-gray-700 pb-4">
        Location & Time
      </h1>
      <form>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Choose country
          </label>
          <div className="flex w-full">
            <SelectOption
              options={countries}
              selected={country}
              setSelected={setCountry}
              rounded="rounded-l-lg"
              placeholder="Choose one"
            />
            {/* <AutoComplete
              options={countries}
              setSelected={country}
              setSelectContacts={setCountry}
              // selected={selected}
              // isMultipleSelectModalOpen={isMultipleSelectModalOpen}
            /> */}
            <span className="inline-flex cursor-pointer w-[130px] gap-2 items-center px-2 text-md font-medium text-gray-50 bg-gray-800 border border-r-1 border-gray-600 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <Map className="text-lg text-white" /> Find me
            </span>
          </div>
        </div>
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          Date Format
        </label>
        <SelectOption
          options={dateFormatDate}
          selected={dateFormat}
          setSelected={setDateFormat}
          rounded="rounded-lg"
          placeholder="--/--/--"
        />
        <div className="pt-4  border-b border-gray-700 pb-4">
          <label className="block mb-2 text-sm font-medium text-white dark:text-white">
            Time Format
          </label>
          <SelectOption
            options={timeFormatData}
            selected={timeFormat}
            setSelected={setTimeFormat}
            rounded="rounded-lg"
            placeholder="HH:MM"
          />
        </div>
      </form>
    </div>
  );
};

export default TimeLocationForm;
