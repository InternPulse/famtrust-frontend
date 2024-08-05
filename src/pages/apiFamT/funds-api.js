const API_URL = 'https://core.famtrust/api/v1';
// const API_KEY = 'apikey';

const getFundsRequest = async () => {
  try {
    const response = await fetch(`${API_URL}/funds-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/Json',
        // Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(),
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('bad request from api');
      }
      throw new Error('failed to fecth funds');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error posting requuest:', error);
    throw error;
  }
  // return (  );
};

export default getFundsRequest;
