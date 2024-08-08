import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const Transaction = [
    {
      id: 1,
      Name: 'Transfer to Sub Account',
    },
    {
      id: 2,
      Name: 'Fund Your Wallet',
    },
    {
      id: 3,
      Name: 'Withdraw To Bank',
    },
  ];




const MoSubRequestFund = () => {
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[40%] mx-auto bg-[#F9F8FF] py-3 border-[1px] border-[solid] border-[#E2E2E2] rounded-xl my-10 text-base font-lato ">
        <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato text-3xl font-bold py-4">
            Request Funds Form
          </h1>
          <div>
            <FaTimes />
          </div>
        </div>

        <form className='py-4'>
          <div className=" py-2">
          <div className="bg-white rounded py-2 flex justify-between items-center px-2 border-[1px] border-slate-300"> 
          <input
            className="rounded-2xl"
            type="text"
            name="question"
            id="question"
           
            placeholder="Select "
            
          />
          <div>
            <IoIosArrowUp /> 
          </div>
        </div>
        <div>
          {
            Transaction.map((transaction) => (
              <div key={transaction.id}>
                <p className="border-b-[1px] border-slate-300 py-2 px-1 cursor-pointer bg-white">
                  {transaction.Name}
                </p>
              </div>
              
            ))
          }
        </div>
            <div>
              <label htmlFor="amount">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='  Enter Email'
                className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
              />
            </div>

          </div>
          <div className='flex justify-between gap-6'>
            <div>
              <label htmlFor="expiry">Request amount</label>
              <input type="tel" name="amount" id="amount" placeholder='Amount' className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300 " />
            </div>
            <div className='mb-2'>
              <label htmlFor="date">Request Date</label>
              <input type="date" name="date" id="date" placeholder='  Enter Date' className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300" />
            </div>
            
          </div>
          <div>
          <p>Reasons for request</p>
          <textarea className='w-[100%]' name="note" id="note" cols="30"></textarea>
          </div>
          <Button>Submit Request</Button>
        </form>
      </div>
    </div>
  );
};

export default MoSubRequestFund;

