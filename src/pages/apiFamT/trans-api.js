const API_URL = 'htpps://core.famtrust.biz/api/v1';

// const API_KEY = 'apikey';

const getTransaction = async () => {
  try {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${API_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error('failed to fetch transaction');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error fetching transaction data:', error);
    throw error;
  }

  // return (  );
};

export default getTransaction;
