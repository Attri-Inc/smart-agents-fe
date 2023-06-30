import { createContext, useReducer } from "react";
import AppPreferenceReducer from "./preferenceReducer";
import {
  DateFormatDataType,
  ThemeDataType,
  TimeFormatDataType,
  dateFormatDate,
  themeData,
  timeFormatData,
  timezones,
} from "../../utils/commonData";

export interface ThemeListType {
  themeList: ThemeDataType[];
  selectedTheme: ThemeDataType;
}

export interface TimeFormat {
  timeFormatList: TimeFormatDataType[];
  selectedTimeFormat: TimeFormatDataType;
}
export interface DateFormat {
  dateFormatList: DateFormatDataType[];
  selectedDateFormat: DateFormatDataType;
}
export interface TimeZoneFormat {
  timeZoneFormatList: TimeFormatDataType[];
  selectedTimeZoneFormat: TimeFormatDataType;
}

export interface InitialStateType {
  theme: ThemeListType;
  timeFormat: TimeFormat;
  dateFormat: DateFormat;
  timeZoneFormat: TimeZoneFormat;
}

interface PayloadType {
  id: number;
  name: string;
}
export interface ActionType {
  type: string;
  payload: PayloadType;
}

const initialState: InitialStateType = {
  theme: {
    themeList: themeData,
    selectedTheme: { id: 1, name: "Light mode" },
  },
  timeFormat: {
    timeFormatList: timeFormatData,
    selectedTimeFormat: { id: 1, name: "12 hour format" },
  },
  dateFormat: {
    dateFormatList: dateFormatDate,
    selectedDateFormat: { id: 1, name: "DD/MM/YYYY" },
  },
  timeZoneFormat: {
    timeZoneFormatList: timezones,
    selectedTimeZoneFormat: timezones[0],
  },
};

export const AppPreferenceContext = createContext<{
  state: InitialStateType;
  dispatch: ({}: ActionType) => void;
}>({ state: initialState, dispatch: () => null });

// AppPreference is an HOC
const AppPreferenceState = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(AppPreferenceReducer, initialState);

  return (
    <AppPreferenceContext.Provider value={{ state, dispatch }}>
      {children}
    </AppPreferenceContext.Provider>
  );
};

export default AppPreferenceState;
