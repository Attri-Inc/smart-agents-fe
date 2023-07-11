import apiClient from "./http-common";
export const signUp = async (formData: any): Promise<any> => {
  const data = await apiClient.post(`/sign_up`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};
export const login = async (formData: any): Promise<any> => {
  const data = await apiClient.post(`/login`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};
export const userSetting = async (formData: any): Promise<any> => {
  const data = await apiClient.post(`/user-setting`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};
