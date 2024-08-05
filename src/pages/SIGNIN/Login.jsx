import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Login as LoginApi } from "../../assets/AuthApiRequest/Login";


const Login = ({onClickHandler}) => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const NavRecovery = () => {
    navigate("/login/recovery")

  }
  const OnChangeHandler = (e)=>{
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  
  }
  const onSubmitHandler = async(e)=> {
    e.preventDefault();
   try{
    if(login.email && login.password){
      const Response = await LoginApi(login)
      navigate("/overview")
      console.log(Response, "from LOGIN")
      if(Response.status === "success"){
        localStorage.setItem("token",Response.token)
        onClickHandler()
      }
      
    }
   
    
   }
   catch {
    console.log("error")
   }
    
  }


  
  return (
    <div className="md:px-16 px-6">
        <h1 className="text-txtblue text-center font-lato text-3xl font-bold py-4">Login</h1>
        <p className="text-center font-lato text-base font-normal py-3">Input you Username and Password to Login into your Account</p>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">Email</label>
                <input className="w-full py-2 rounded-xl border-[1px] border-slate-700" type="email" name="email" id="email" value={login.email} onChange={OnChangeHandler} />
            </div>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="password">Password</label>
                <input className="w-full py-2  border-slate-700 rounded-xl border-[1px]" type="password" name="password" id="password" value={login.password} onChange={OnChangeHandler}  />
            </div>
            <div className="relative py-5 ">
            <NavLink className="text-txtblue " to="/recovery">Forgot Password?</NavLink>
            </div>
            
            <Button type="submit">SIGN IN</Button>
           
            <p className="text-center font-lato text-base font-normal pb-3">You dont have an account? <a className="text-txtblue" href="signup">Sign up</a></p>
        </form>
      
    </div>
  )
}

export default Login
