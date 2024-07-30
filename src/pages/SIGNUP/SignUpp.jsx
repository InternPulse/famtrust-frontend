import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../../assets/AuthApiRequest/SignUp';
import { NavLink } from 'react-router-dom';

const SignUpp = ({ onClickHandler }) => {
  const [signup, setSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {

    e.preventDefault()

    if(signup.password === signup.confirmPassword){
      try {
        const Response = await SignUp(signup);
  
        console.log(Response);
        onClickHandler()
      } catch (err) {
        console.log(err);
      }

    }
    else{
      <div>
        <p>Invalid</p>
      </div>
    }
    
  };

  return (
    <div className="md:px-16 px-6">
      <h1 className="text-txtblue text-center font-lato text-3xl font-bold py-4">
        SIGN UP
      </h1>
      <p className="text-center font-lato text-base font-normal py-3">
        Input your Email and Password to Sign Up
      </p>
      <form onSubmit={onSubmitHandler}>
        <div className="py-2">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px] border-slate-700"
            type="email"
            name="email"
            id="email"
            value={signup.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="py-2">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full py-2  border-slate-700 rounded-xl border-[1px]"
            type="password"
            name="password"
            id="password"
            value={signup.password}
            onChange={onChangeHandler}
          />
        </div>
        <div className="py-2">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="w-full py-2  border-slate-700 rounded-xl border-[1px]"
            type="password"
            name="confirmPassword"
            id="passwordtwo"
            value={signup.confirmPassword}
            onChange={onChangeHandler}
          />
        </div>

        <Button type="submit">SIGN UP</Button>

        <p className="text-center font-lato text-base font-normal pb-3">
          Already have an account?{' '}
          <a className="text-txtblue" href="signup">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpp;
