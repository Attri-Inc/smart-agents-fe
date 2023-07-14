import apiClient from "./http-common";

export const fetchTrendingTopics = async (): Promise<any> => {
  const data = await apiClient.get("/get_trending_success");
  return data;
};
export const getNetworHighlights = async (): Promise<any> => {
  const data = await apiClient.get("/network_highlights");
  return data;
};

export const getNetworHighlightsByEmail = async (
  email: string
): Promise<any> => {
  const data = await apiClient.get(
    `/network_highlights?registered_email=${email}`
  );
  return data;
};

export const getTopConnections = async (): Promise<any> => {
  const data = await apiClient.get("/top_connections");
  return data;
};
export const getcustomerCommonInterest = async (): Promise<any> => {
  const data = await apiClient.get("/common_interest");
  return data;
};
export const getNetworkContacts = async (
  intervalDays: number
): Promise<any> => {
  const data = await apiClient.get(
    `/network_growth?interval_days=${intervalDays}`
  );
  return data;
};

export const getTimeLines = async (): Promise<any> => {
  const data = await apiClient.get(
    `/interaction_items?registered_email=aaron@acleelaw.com`
  );
  return data;
};
export const getEmailCommunicationDetails = async (
  email: string,
  type: string
): Promise<any> => {
  const data = await apiClient.get(
    `/activity_extract?customer_email=${email}&activity_type=${type}`
  );
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
export const getCustomerNextMeetDetails = async (email: string): Promise<any> => {
  const data = await apiClient.get(`/next_meeting?registered_email=${email}`);
  return data;
};

export const addToWorkflow = async (formData: any): Promise<any> => {
  const data = await apiClient.post(`manual_workflow/`, formData);
  return data;
};

export const customerChat = async (query: string): Promise<any> => {
  const data = await apiClient.get(`/chat?query=${query}`);
  return data;
};
export const getFollowUp = async (alert: boolean): Promise<any> => {
  const data = await apiClient.get(`/workflow?with_alert=${alert}`);
  return data;
};
export const getEvents = async (): Promise<any> => {
  const data = await apiClient.get(`/get_events`);
  return data;
};
export const generateEmailSubject = async (message: string): Promise<any> => {
  const data = await apiClient.get(`/generate_subject?message=${message}`);
  return data;
};
export const sendEmailToSingleContact = async (
  message: string,
  recipient: string | string[]
): Promise<any> => {
  const data = await apiClient.get(
    `send_email?recipient=${recipient}&message=${message}`
  );
  return data;
};
export const cancelFollowUpAPI = async (
  all: boolean,
  registered_email: string
): Promise<any> => {
  const data = await apiClient.get(
    `cancel_follow_up?all=${all}&registered_email=${registered_email}`
  );
  return data;
};
export const sendFollowUp = async (formData: any): Promise<any> => {
  const data = await apiClient.put(`/workflow`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};
export const scheduleFollowUp = async (formData: any): Promise<any> => {
  const data = await apiClient.put(`/workflow`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return data;
};

export const getChatData = async (): Promise<any> => {
  const data = await apiClient.get(`/chat_history`);
  return data;
};
export const getChatDataByDate = async (date: string): Promise<any> => {
  const data = await apiClient.get(`/chat_history?date=${date}`);
  return data;
};
