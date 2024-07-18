import axios from './axios';

export const getData = async () => {
  try {
    const response = await axios.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
