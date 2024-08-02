import axios from 'axios';
export const Login = async (data) => {
  try {
    const response = await axios.post(
        'https://auth.famtrust.biz/api/v1/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json', 
          },
          
        },
      );
      return (response.data);
    
  } catch (error) {
    console.log(error, "tis is the errror")
    return error
    
  }
};
