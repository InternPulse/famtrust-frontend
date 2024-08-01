import axios from 'axios';
export const VerifyCall = async () => {
  const response = await axios.get(
    'https://auth.famtrust.biz/api/v1/verify-email',
    
    {
      headers: {
        'Content-Type': 'multipart/form-data', 
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      
    },
  );
  return (response.data);
};
