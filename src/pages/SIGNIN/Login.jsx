import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Login = ({onClickHandler}) => {
  const navigate = useNavigate()

  const NavRecovery = () => {
    navigate("/login/recovery")

  }
  return (
    <div className="md:px-16 px-6">
        <h1 className="text-txtblue text-center font-lato text-3xl font-bold py-4">Login</h1>
        <p className="text-center font-lato text-base font-normal py-3">Input you Username and Password to Login into your Account</p>
        <form action="">
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">Username/Email</label>
                <input className="w-full py-2 rounded-xl border-[1px] border-slate-700" type="text" name="username" id="username" />
            </div>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="password">Password</label>
                <input className="w-full py-2  border-slate-700 rounded-xl border-[1px]" type="email" name="password" id="password" />
            </div>
            <div className="relative py-5 ">
            <NavLink className="text-txtblue " to="/recovery">Forgot Password?</NavLink>
            </div>
            <div onClick={onClickHandler} >
            <Button>SIGN IN</Button>
            </div>
            <p className="text-center font-lato text-base font-normal pb-3">You dont have an account? <a className="text-txtblue" href="signup">Sign up</a></p>
        </form>
      
    </div>
  )
}

export default Login
