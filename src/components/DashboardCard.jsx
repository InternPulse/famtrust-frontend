import React from 'react'
import { useState } from 'react';
import ModalWithdraw from '../pages/SubAccountFamilyTrans/ModalWithdraw';

const DashboardCard = ({
  name,
  id,
  profileImg,
  growth,
  Transfer,
  Withdraw,
  balance,
  SubacctTransfer,
  RequestFunds
}) => {

  const [nextModal, setNextModal] = useState(null);
  const [show, setShow] = useState(false);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNextModal((prev) => prev + 1);
    setShow(true);
    console.log("submitted")

  }

  return (
    <div className=' shadow rounded-lg py-8 px-8'>
      <div className="flex items-center mb-4">
        {/* User avatar */}
        <img src={profileImg} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          {/* User name and ID */}
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-xs text-gray-600">{id}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg">
        {/* Total balance section */}
        <h3 className="text-sm text-lightGrey font-medium mb-2">Total balance</h3>
        <div className='flex flex-row space-x-2'>
          <p className="text-2xl font-bold mb-2 text-lightBlue">₦{balance}</p>
          <p className="text-base text-green-600 mb-4 font-semibold">↑ {growth}%</p>
        </div>
        {/* Action buttons */}
        <div className="flex  font-semibold">
          {/* Button for Admin transactions */}
          {
            Transfer ? (
              <div>
                <button className="bg-sb-hover-text text-white mr-12 px-4 py-2 rounded-lg hover:bg-blue-800" onClick={onSubmitHandler}>
                  {Transfer}
                </button>
                <div>
                  {/* Pass in modals for Admin Transactions */}

                </div>
              </div>
            ) : ('')
          }
          {
            Withdraw ? (
              <div>
                <button className="bg-darkerGrey  px-4 py-2 rounded-lg hover:bg-faint-blue" onClick={onSubmitHandler}>
                  {Withdraw}
                </button>
                <div>
                  {/* Pass in modals for Withdrawal */}
                  {nextModal === 1 && <ModalWithdraw setShow={setShow} />}
                </div>
              </div>
            ) : ('')
          }
          {/* Button for sub acccount transactions */}
          {
            SubacctTransfer ? (
              <div>
                <button className="bg-sb-hover-text text-white mr-12 px-4 py-2 rounded-lg hover:bg-blue-800" onClick={onSubmitHandler}>
                  {SubacctTransfer}
                </button>
                <div>
                  {/* Pass in modals for Sub account transactions */}
                </div>
              </div>
            ) : ('')
          }
          {
            RequestFunds ? (
              <div>
                <button className="bg-darkerGrey  px-4 py-2 rounded-lg hover:bg-faint-blue" onClick={onSubmitHandler}>
                  {RequestFunds}
                </button>
                <div>
                  {/* Pass in modals for Fund Request*/}
                  
                </div>
              </div>
            ) : ('')
          }
        </div>
      </div>
    </div>
  )
}

export default DashboardCard