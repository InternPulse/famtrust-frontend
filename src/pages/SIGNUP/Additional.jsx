
import Button from "../../components/Button";
import { MdEmail } from "react-icons/md";


const Additional = ({onClickHandler}) => {
  return (
    <div className="md:px- 16 py-4 px-6 w-[50%]">
      
        <MdEmail className='text-3xl text-center mr-2 pt-2'/>
        
    <h1 className='text-txtblue  font-lato text-2xl font-normal pb-4'>Email Verification</h1>
    <p className='pb-4'>A verification email has been sent to your email address: user@example.com, Please check your  inbox and follow the instructions to verify your account.</p>
    <form action="">
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">Enter Your Verification ID:</label>
                <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" />
            </div>
           
            
            <div onClick={onClickHandler} className='text-white font-lato text-base font-semibold my-2' >
            <Button>Verify ID</Button>
            </div>
           
        </form>
      <div className='text-center py-4'>
      <a className='text-txtblue  font-lato text-base font-semibold my-2 ' href="#">Resend Link</a>
      </div>

  
</div>
  )
}

export default Additional
