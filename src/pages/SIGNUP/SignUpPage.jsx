
import Additional from "./Additional";
import Create from "./Create";
import SecretQuestions from "./SecretQuestions";
import SignUp from "./SignUp";
import Verification from "./Verification";
import login from "/login.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate()
    const[increase, setIncrease] = useState(1);
    const onClickHandler = (()=>{
      if(increase >= 5){
        navigate("/login")
        
      } else{
        setIncrease((prev) => prev + 1);
      }
      
    }
        
    ) 
    
  return (
    <div className=" md:flex justify-between md:mx-36 md:my-20 bg-neutrall rounded">
      {increase === 1 && <Verification onClickHandler={onClickHandler} />}
      {increase === 2 && <SignUp onClickHandler={onClickHandler} />}
      {increase === 3 && <Additional onClickHandler={onClickHandler} />}
      {increase === 4 && <Create onClickHandler={onClickHandler} />}
      {increase === 5 && <SecretQuestions onClickHandler={onClickHandler} />}


      <div >
        <img className="w-[500px] md:h-fit" src={login} alt="login" />
      </div>
    </div>
  );
};

export default SignUpPage;
