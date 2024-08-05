import React from 'react';

const BalanceCard = ({ balance, growth }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      {/* Total balance section */}
      <h3 className="text-lg font-semibold mb-2">Total balance</h3>
      <p className="text-2xl font-bold mb-2">₦{balance.toLocaleString()}</p>
      <p className="text-sm text-green-600 mb-4">↑ {growth}%</p>
      {/* Action buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Transfer Funds
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;