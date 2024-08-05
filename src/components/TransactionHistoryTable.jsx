import React from 'react';

const TransactionHistoryTable = () => {
  // Mock data for transactions
  const transactions = [
    { name: 'Ritji Ishaku', username: 'ritji89', email: 'ritji26@gmail.com', amount: 50000, description: 'Transfer Funds, Request Funds', status: 'Approved' },
    { name: 'Shalom Ritji', username: 'Shalom56', email: 'shalom67@gmail.com', amount: 50000, description: 'Transfer Funds, Request Funds', status: 'Pending' },
    { name: 'Temi Ritji', username: 'Temi89', email: 'temi45@gmail.com', amount: 50000, description: 'Transfer Funds, Request Funds', status: 'Approved' },
  ];

  return (
    <div>
      <h3 className="font-semibold mb-4">Transaction History</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Transaction Type</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                <td className="px-4 py-2">{transaction.name}</td>
                <td className="px-4 py-2">{transaction.username}</td>
                <td className="px-4 py-2">₦{transaction.amount}</td>
                <td className="px-4 py-2">{transaction.description}</td>
                <td className="px-4 py-2">
                  {/* Status badge */}
                  <span className={`px-2 py-1 rounded ${
                    transaction.status === 'Approved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistoryTable;