import apiClient from "./http-common"

export const fetchTrendingTopics = async (): Promise<any> => {
  const data = await apiClient.get('/get_trending_success');
  return data;
};
export const getNetworHighlights = async (): Promise<any> => {
  const data = await apiClient.get('/network_highlights');
  return data;
};

export const getNetworHighlightsByEmail = async (email: string): Promise<any> => {
  const data = await apiClient.get(`/network_highlights?registered_email=${email}`);
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
  const data = await apiClient.get(`/interaction_items?registered_email=aaron@acleelaw.com`);
  return data;
};
export const getEmailCommunicationDetails = async (email: string, type: string): Promise<any> => {
  const data = await apiClient.get(`/activity_extract?customer_email=${email}&activity_type=${type}`);
  return data;
};

export const getCustomerList = async (): Promise<any> => {
  const data = await apiClient.get(`/customer`);
  return data;
};

export const getCustomerDetails = async (email: string): Promise<any> => {
  const data = await apiClient.get(`/customer?registered_email=${email}`);
  return data;
};


export const customerChat = async (query: string): Promise<any> => {
  const data = await apiClient.get(`/chat?query=${query}`);
  return data;
};