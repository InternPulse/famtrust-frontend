import React from 'react'

const DashboardCard = ({
    name, id, growth, Transfer, Withdraw, balance
}) => {
  return (
    <div>
    <div className="flex items-center mb-4">
      {/* User avatar */}
      <img src="/path-to-user-image.jpg" alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        {/* User name and ID */}
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{id}</p>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      {/* Total balance section */}
      <h3 className="text-lg text-lightGrey font-medium mb-2">Total balance</h3>
      <div className='flex flex-row space-x-2'>
      <p className="text-2xl font-bold mb-2 text-lightBlue">₦{balance}</p>
      <p className="text-base text-green-600 mb-4 font-semibold">↑ {growth}%</p>
      </div>
      {/* Action buttons */}
      <div className="flex justify-between font-semibold">
        {
            Transfer? <button className="bg-sb-hover-text text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            {Transfer}
          </button>:''
        }
        {
            Withdraw? <button className="bg-sb-hover-text text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            {Withdraw}
          </button>:''
        }
      </div>
      <div className="mt-4">
      {/* Display total number of accounts */}
      <h3 className="font-semibold">All Accounts</h3>
      <p className="text-sm text-gray-600">2 accounts</p>
    </div>
    </div>
    </div>
  )
}

export default DashboardCard