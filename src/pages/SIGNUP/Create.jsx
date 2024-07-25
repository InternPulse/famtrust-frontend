
import Button from "../../components/Button"

const Create = ({onClickHandler}) => {
  return (
    <div className="md:px-16 px-6">
    <h1 className="text-txtblue text-center font-lato text-xl font-bold py-4">Create Password & Username</h1>
    <p>
    A unique username and strong password protect your account by ensuring only you can access it, safeguarding your personal information and providing a secure user experience.
    </p>
   
    <form action="">
        <div>
            <label className="font-lato text-base font-semibold" htmlFor="username">First Name</label>
            <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" placeholder='  username' />
        </div>
        <div>
            <label className="font-lato text-base font-semibold" htmlFor="username">Choose Password</label>
            <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="password" name="username" id="username" placeholder='  choose password' />
        </div>
        <div>
            <label className="font-lato text-base font-semibold" htmlFor="username">Confirm Password</label>
            <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="password" name="username" id="username" placeholder ='  confirm password'/>
        </div>
        
       
        
        <div onClick={onClickHandler} className='text-white font-lato text-base font-semibold my-6' >
        <Button>Verify ID</Button>
        </div>
       
    </form>
  
</div>
  )
}

export default Create
