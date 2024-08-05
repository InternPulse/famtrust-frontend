import Button from '../../components/Button';
// import { NavLink } from "react-router-dom";

const PassWordRecovery = ({ clickRecovery }) => {
  return (
    <div className="md:px-16 overflow-hidden px-6 md:w-[50%]">
      <h1 className="text-txtblue font-lato text-3xl font-bold pt-8 pb-3 text-center">
        Password Recovery
      </h1>
      <p className="pb-5 font-lato text-2xl text-center">
        Enter your email
      </p>
      <form action="">
        <label className="font-lato text-base font-semibold" htmlFor="email">Email Adress</label>
        <input className="bg-white w-full py-2 rounded-xl border-[1px] mt-1" type="email" placeholder="Enter your registered email address" />
        <div className="mt-6" onClick={clickRecovery}>
        <Button >Submit</Button>
      </div>
      </form>
    
    </div>
  );
};

export default PassWordRecovery;
