import React from 'react';
import Button from '../../components/Button';
import { FaTimes } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const Transactions = [
  {
    id: 1,
    Name: 'Airtime',
  },
  {
    id: 2,
    Name: 'Data',
  },
  {
    id: 3,
    Name: 'StarLink',
  },
  {
    id: 4,
    Name: "DSTV",
  },
];

const ModalOtherTrans = ({ Toggle, show, delModal }) => {
  return (
    <div className="bg-[rgba(18,18,18,0.50)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6 w-[60%] mx-auto bg-[#F9F8FF] border-[1px] border-[solid] border-[#E2E2E2] rounded md:text-base font-lato ">
        <div className="flex justify-between items-center">
          <h1 className="text-txtblue  font-lato md:text-3xl font-bold py-2">
            Other Transaction
          </h1>
          <div onClick={delModal}>
            <FaTimes />
          </div>
        </div>

        <form className="">
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
            />
          </div>
          <div className='mt-2'>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="enter amount"
              className="w-[100%] py-2 rounded-xl border-[1px] border-slate-300"
            />
          </div>
          <div className="bg-white rounded py-2 flex md:justify-between items-center md:px-2 border-[1px] border-slate-300 mt-2">
            <input
              className="rounded-2xl "
              type="text"
              name=""
              id=""
              placeholder="  Select category"
            />
            <div onClick={Toggle}>
              {show ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>
          <div>
            {Transactions.map((transaction) => (
              <div key={transaction.id}>
                <p className="border-b-[1px] border-b-slate-300 py-2 cursor-pointer bg-white text-base font-lato text-[#14183B]">
                  {transaction.Name}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p>Note</p>
            <textarea
              className="w-[100%]"
              name="note"
              id="note"
              rows={3}
              cols="10"
            ></textarea>
          </div>

          

          <Button>Confirm</Button>
        </form>
      </div>
    </div>
  );
};

export default ModalOtherTrans;
