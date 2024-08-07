import axios from 'axios';

const API_URL = 'https://api.famtrust.com/v1'; // Replace with the actual base URL from the Postman documentation

// Function to fetch account details
export const fetchAccountDetails = async () => {
  try {
    const response = await axios.get(`${API_URL}/accounts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account details:', error);
  }
};

// Function to fetch sub-account permissions
export const fetchPermissions = async () => {
  try {
    const response = await axios.get(`${API_URL}/account/permissions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching permissions:', error);
  }
};

// Function to fetch transaction history
export const fetchTransactionHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transaction history:', error);
  }
};

// Add more API functions as needed
