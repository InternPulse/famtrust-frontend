
import PassWordRecovery from "./PassWordRecovery";
import PassWordReset from "./PassWordReset";
import { useNavigate } from "react-router-dom";
import login from "/src/assets/login.png";
import { useState } from "react";

const Recovery = () => {
    const navigate = useNavigate()
    const [navRecovery, setNavRecovery] = useState(1)
    const clickRecovery = () => {
        if(navRecovery === 2 ){
            navigate("/login")
            
        } else{
            setNavRecovery((prev) => prev+1)

        }
    }

    
  return (
    <div className=" md:flex justify-between block md:mx-36 md:my-20 bg-neutrall rounded">
      {navRecovery === 1 && <PassWordRecovery clickRecovery={clickRecovery} />}
      {navRecovery === 2 &&<PassWordReset clickRecovery={clickRecovery}  />}
      <div className="mx-auto text-center flex justify-center">
        <img className="w-[300px] h-fit" src={login} alt="login" />
      </div>
    </div>
  );
};

export default Recovery;
