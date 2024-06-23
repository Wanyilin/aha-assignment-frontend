import axios from 'axios';

import { UsersResult, User } from 'types/api';
import { ApiSource, API_BASE_URLS, DEFAULT_API_SOURCE } from 'config';


export const fetchUsers = async (
  page: number = 1,
  pageSize: number = 10,
  keyword: string = '',
  source: ApiSource = DEFAULT_API_SOURCE,
): Promise<UsersResult> => {
  const baseURL = API_BASE_URLS[source];
  console.log(baseURL, source)
  try {
    const response = await axios.get<UsersResult>(`${baseURL}/users/all`, {
      params: { page, pageSize, keyword },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};

export const fetchFriends = async (
  page: number = 1,
  pageSize: number = 10,
  source: ApiSource = DEFAULT_API_SOURCE,
): Promise<User[]> => {
  const baseURL = API_BASE_URLS[source];
  try {
    const response = await axios.get<UsersResult>(`${baseURL}/users/friends`, {
      params: { page, pageSize },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};
