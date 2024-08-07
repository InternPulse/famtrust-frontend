import React from 'react'

const BalanceCard = ({ balance, growth }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            {/* Total balance section */}
            <h3 className="text-lg text-lightGrey font-medium mb-2">Total balance</h3>
            <div className='flex flex-row space-x-2'>
                <p className="text-2xl font-bold mb-2 text-lightBlue">₦{balance.toLocaleString()}</p>
                <p className="text-base text-green-600 mb-4 font-semibold">↑ {growth}%</p>
            </div>
            {/* Action buttons */}
            <div className="flex justify-between font-semibold">
                <button className="bg-sb-hover-text text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                    Add Funds
                </button>
                <button className="bg-darkerGrey text-text-color px-4 py-2 rounded-lg hover:bg-faint-blue">
                    Request Funds
                </button>
            </div>
        </div>
    )
}

export default BalanceCard
