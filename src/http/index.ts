import apiClient from './axios';

export const getUser = async (id: number) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};