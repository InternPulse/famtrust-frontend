import axios from 'axios';
export const VerifyCall = async () => {
  const response = await axios.get(
    'https://auth.famtrust.biz/api/v1/verify-email',
    
    {
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      withCredentials: true,
      
    },
  );
  return (response.data);
};
