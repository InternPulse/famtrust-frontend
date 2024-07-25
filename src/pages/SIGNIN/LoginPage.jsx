import Login from "./Login";
import Selection from "./Selection";
import TwoFactor from "./TwoFactor";
import login from "../../assets/login.png";
import { useState } from "react";
const LoginPage = () => {
  const [increase, setIncrease] = useState(1);
  const onClickHandler = ()=>{
    if(increase === 3){
      setIncrease(1)
    } else{
      setIncrease((prev) => prev + 1);
    }
    

  }

 
  return (
    <div className=" md:flex justify-between block md:mx-36 md:my-20 bg-neutrall rounded"> 
      {increase === 1 && <Login onClickHandler={onClickHandler}/>}
      {increase === 2 && <Selection onClickHandler={onClickHandler}/>}
      {increase === 3 && <TwoFactor onClickHandler={onClickHandler}/>}

      <div className="mx-auto text-center flex justify-center">
        <img className="md:w-[300px] md:h-fit" src={login} alt="login" />
      </div>
    </div>
  );
};

export default LoginPage;
