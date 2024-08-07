import React from 'react';

const SubAccountsTable = () => {
  // Mock data for sub-accounts
  const accounts = [
    { name: 'Ritji Ishaku', username: 'ritji89', email: 'ritji26@gmail.com', phone: '09000000000', permissions: 'Transfer Funds, Request Funds', status: 'Approved' },
    { name: 'Shalom Ritji', username: 'Shalom56', email: 'shalom67@gmail.com', phone: '09000000000', permissions: 'Transfer Funds, Request Funds', status: 'Pending' },
  ];

  return (
    <div className="mb-8 ">
      <h3 className="font-semibold mb-4">Manage sub-accounts and permissions</h3>
      <div className="overflow-x-auto ">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Permissions</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                <td className="px-4 py-2">{account.name}</td>
                <td className="px-4 py-2">{account.username}</td>
                <td className="px-4 py-2">{account.email}</td>
                <td className="px-4 py-2">{account.phone}</td>
                <td className="px-4 py-2">{account.permissions}</td>
                <td className="px-4 py-2">
                  {/* Status badge */}
                  <span className={`px-2 py-1 rounded ${
                    account.status === 'Approved' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {account.status}
                  </span>
                </td>
                <td className="px-4 py-2">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubAccountsTable;