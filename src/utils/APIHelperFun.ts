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