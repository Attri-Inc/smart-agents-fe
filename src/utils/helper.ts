import { useQuery } from "react-query";

import apiClient from "./http-common"
export const randomId = function(length = 6): string {
    return Math.random().toString(36).substring(2, length+2);
  };

  export const useFetch = function (query:string) {
    const { isLoading, error, data } = useQuery({
      queryKey: ["queryData", query],
      queryFn: () => apiClient.get(`${import.meta.env.VITE_BASE_URL}/chat?query=${query}`)
    });
  
    return { isLoading, error, data };
  };

  export const transformChatData = (data: any) => {
    var transformedData: any = [];
    
    data.forEach(function(item: any) {
      var botMessage = {
        bot: true,
        id: item.timestamp,
        message: item.Assistant
      };
      var userMessage = {
        bot: false,
        id: item.timestamp,
        message: item.User
      };
      
      transformedData.push(userMessage);
      transformedData.push(botMessage);
    });
    
    return transformedData;
  }
  