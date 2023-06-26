import { ActionType, InitialStateType } from "./preferenceContext";

const AppPreferenceReducer = (state: InitialStateType, action: ActionType) => {
    switch (action.type) {
      case "THEME": {
        const updatedTheme = {
            ...state,
            theme: {
              ...state.theme,
              selectedTheme: {
                ...state.theme.selectedTheme,
                id: action.payload.id,
                name: action.payload.name,
              },
            },
          };
        return updatedTheme;
      }
      case "TIME_FORMAT": {
        const updatedTime = { 
            ...state,
            timeFormat: {
              ...state.timeFormat,
              selectedTimeFormat: {
                ...state.timeFormat.selectedTimeFormat,
                id: action.payload.id,
                name: action.payload.name,
              },
            }}
        return updatedTime;
      }
      case "DATE_FORMAT": {
        const updatedDate = { ...state,
            dateFormat: {
              ...state.dateFormat,
              selectedDateFormat: {
                ...state.dateFormat.selectedDateFormat,
                id: action.payload.id,
                name: action.payload.name,
              },
            }}
        return updatedDate;
      }
      default:
        return state;
    }
  };
  
  export default AppPreferenceReducer;
  