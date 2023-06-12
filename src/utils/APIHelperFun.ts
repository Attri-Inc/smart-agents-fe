import apiClient from "./http-common"

export const fetchTrendingTopics = async (): Promise<any> => {
  const data = await apiClient.get('/get_trending_success');
  return data;
};
export const getNetworHighlights = async (): Promise<any> => {
  const data = await apiClient.get('/network_highlights');
  return data;
};
export const getTopConnections = async (): Promise<any> => {
  const data = await apiClient.get('/top_connections');
  return data;
};
export const getcustomerCommonInterest = async (): Promise<any> => {
  const data = await apiClient.get('/common_interest');
  return data;
};
export const getNetworkContacts = async (intervalDays: number): Promise<any> => {
  const data = await apiClient.get(`/network_growth?interval_days=${intervalDays}`);
  return data;
};
export const getTimeLines = async (): Promise<any> => {
  const data = await apiClient.get(`/scheduled_items?registered_email=aaron@acleelaw.com`);
  return data;
};