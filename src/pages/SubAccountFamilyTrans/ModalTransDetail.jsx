import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';

const ModalTransDetail = () => {
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[40%] mx-auto bg-[#F9F8FF] py-3 border-[1px] border-[solid] border-[#E2E2E2] rounded my-10 text-base font-lato">
      <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato text-2xl font-bold py-4">
            Transaction Details
          </h1>
          <div>
            <FaTimes />
          </div>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Transaction Date:</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>10th July, 2024</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Transaction ID:</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>123456789</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Description</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>For School Fees</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Transaction Type</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>Transfer to Sub-Accoun</p>
        </div>
        <div className='flex justify-between items-center py-2'>
          <h1 className='text-[#1B1B1B] font-bold text-base font-lato'>Amount</h1>
          <p className='text-base font-lato font-normal text-[#1B1B1B]'>N10,000</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default ModalTransDetail;

