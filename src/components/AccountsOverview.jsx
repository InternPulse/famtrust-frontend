import React from 'react';

const AccountsOverview = () => {
  return (
    <div className=" w-full flex justify-between items-center border-slate-200 bg-purple-50 p-8 -mt-8 mb-4">
      {/* Display total number of accounts */}
     <div>
     <h3 className="font-semibold">All Accounts</h3>
     <p className="text-sm text-gray-600">2 accounts</p>
     </div>
     <button className="bg-sb-hover-text text-white text-sm px-2 py-2 rounded-lg hover:bg-blue-800 ">
            Create Sub-Account
      </button>
    
    </div>
  );
};

export default AccountsOverview;