
import Button from '../Component/Button';
import { useState } from 'react';
const SignUp = ({onClickHandler}) => {
  
  return (
    <div className="md:px-16 px-6">
        <h1 className="text-txtblue text-center font-lato text-xl font-bold py-4">Enter Additional Details</h1>
       
        <form action="">
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">First Name</label>
                <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" />
            </div>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">Last Name</label>
                <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" />
            </div>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">BVN/NIN</label>
                <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" />
            </div>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">Email</label>
                <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" />
            </div>
            <div>
                <label className="font-lato text-base font-semibold" htmlFor="username">Phone Number</label>
                <input className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700" type="text" name="username" id="username" />
            </div>
           
            
            <div onClick={onClickHandler} className='text-white font-lato text-base font-semibold my-6' >
            <Button>Submit</Button>
            </div>
           
        </form>
      
    </div>
  )
}

export default SignUp
