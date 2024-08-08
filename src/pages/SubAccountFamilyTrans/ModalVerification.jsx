import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';



const ModalVerification = () => {
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[40%] mx-auto bg-[#F9F8FF] py-3 border-[1px] border-[solid] border-[#E2E2E2] rounded-xl my-10 text-base font-lato ">
        <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato text-3xl font-bold py-4">
            Verification
          </h1>
          <div>
            <FaTimes />
          </div>
        </div>
        <p> Enter the Verification Code Sent to your Phone/Email</p>

        <form className='py-4'>
            <div className='mb-2'>
              <label htmlFor="OTP"> OTP</label>
              <input type="tel" name="OTP" id="OTP" placeholder='  Enter OTP' className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300" />
            </div>
          
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ModalVerification;

