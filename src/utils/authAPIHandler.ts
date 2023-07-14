import apiClient from "./http-common";
import apiDEVClient from "./http-common";

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
export const gooogleLogin = async (): Promise<any> => {
  const data = await apiDEVClient.get(`/google_authorize`);
  return data;
};
export const userSetting = async (formData: any, token: string | null): Promise<any> => {
  const data = await apiClient.put(`/user_setting`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      'x-access-token': token,
    },
  });
  return data;
};
