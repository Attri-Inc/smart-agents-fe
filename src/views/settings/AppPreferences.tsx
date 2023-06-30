import { useContext } from "react";
import MenuList from "../../components/Common/MenuList";
import { AppPreferenceContext } from "../../states/appPreference/preferenceContext";

const AppPreferences = () => {
  const {
    state: { dateFormat, timeFormat, theme, timeZoneFormat },
  } = useContext(AppPreferenceContext);

  return (
    <div className="py-4">
      <div className="border-b pb-6">
        <h1>App Preferences</h1>
      </div>
      <div className="flex items-center gap-8 py-4 border-b pb-8">
        <div className="w-5/12 pr-8">
          <p className="tex-inter font-medium text-sm text-gray-700">
            Interface Theme
          </p>
          <small className="tex-inter text-gray-500">
            Select your preffered interface theme
          </small>
        </div>
        <div className="h-6">
          <MenuList
            options={theme.themeList}
            selected={theme.selectedTheme}
            type="THEME"
          />
        </div>
      </div>
      <div className="flex items-center gap-8 py-4 border-b">
        <div className="w-5/12 pr-8">
          <p className="tex-inter font-medium text-sm text-gray-700">
            Time Zone
          </p>
          <small className="tex-inter text-gray-500">
            Select your preffered Time-zone
          </small>
        </div>
        <div className="h-6">
          <MenuList
            options={timeZoneFormat.timeZoneFormatList}
            selected={timeZoneFormat.selectedTimeZoneFormat}
            type="TIMEZONE_FORMAT"
          />
        </div>
      </div>
      <div className="flex items-center gap-8 py-4 border-b">
        <div className="w-5/12 pr-8">
          <p className="tex-inter font-medium text-sm text-gray-700">
            Time Format
          </p>
          <small className="tex-inter text-gray-500">
            Select your preffered Time format
          </small>
        </div>
        <div className="h-6">
          <MenuList
            options={timeFormat.timeFormatList}
            selected={timeFormat.selectedTimeFormat}
            type="TIME_FORMAT"
          />
        </div>
      </div>
      <div className="flex items-center gap-8 py-4 border-b">
        <div className="w-5/12 pr-8">
          <p className="tex-inter font-medium text-sm text-gray-700">
            Date format
          </p>
          <small className="tex-inter text-gray-500">
            Select your preffered date format
          </small>
        </div>
        <div className="h-6">
          <MenuList
            options={dateFormat.dateFormatList}
            selected={dateFormat.selectedDateFormat}
            type="DATE_FORMAT"
          />
        </div>
      </div>
    </div>
  );
};

export default AppPreferences;
