import axios from 'axios';
import { Tag } from 'types/api';
import { ApiSource, API_BASE_URLS, DEFAULT_API_SOURCE } from 'config';


export const fetchTags = async (
  source: ApiSource = DEFAULT_API_SOURCE,
): Promise<Tag[]> => {
  const baseURL = API_BASE_URLS[source];
  console.log(baseURL, source);
  try {
    const response = await axios.get<Tag[]>(`${baseURL}/tags`);
    return response.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};
