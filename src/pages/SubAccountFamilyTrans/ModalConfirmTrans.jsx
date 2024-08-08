import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';

const ModalConfirmTrans = () => {
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[40%] mx-auto bg-[#F9F8FF] py-3 border-[1px] border-[solid] border-[#E2E2E2] rounded my-10 text-base font-lato">
      <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato text-2xl font-bold pt-6">
            Confirm Transaction
          </h1>
          <div>
            <FaTimes />
          </div>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Name</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>Shallom Kanu</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Amount</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>₦100,000</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Date</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>2024/07/30</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Description</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>Purchased groceries</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Transaction Type</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>Transfer/Withdrawal</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Note</h1>
          <p className=' text-base font-lato font-normal text-[#1B1B1B]'>For Electricity</p>
        </div>
        {/* <Button className="bg-[#655c94]" >Confirm</Button> */}
        <button className='w-full py-2 rounded-xl bg-[#E2DDFF] my-2' type="submit">Confirm</button>
        
      </div>
      
    </div>
  );
};

export default ModalConfirmTrans;
