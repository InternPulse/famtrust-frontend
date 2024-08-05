import axios from 'axios';
export const VerifyEmail = async (code) => {
  try {
    const response = await axios.get(
      `https://auth.famtrust.biz/api/v1/verify-email/verify?code=${code}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
    
  } catch (error) {
    console.log(error, "from verify email")
    
  }
};
