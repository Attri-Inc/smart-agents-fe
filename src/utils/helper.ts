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