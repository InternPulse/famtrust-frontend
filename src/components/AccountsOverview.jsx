import React from 'react';

const AccountsOverview = ({CreateSubAccount}) => {
  return (
    <div className=" w-full flex justify-between items-center border-slate-200 bg-purple-50 p-8 -mt-8 mb-4">
      {/* Display total number of accounts */}
     <div>
     <h3 className="font-semibold text-darkestGrey">All Accounts</h3>
     <p className="text-medium text-lightBlue">2 accounts</p>
     </div>
      <div className="font-medium ">
        {
            CreateSubAccount? <button className="bg-sb-hover-text text-white mr-12 px-4 py-2 rounded-lg hover:bg-blue-800">
            {CreateSubAccount}
          </button>:''
        }
      </div>
    </div>
  );
};

export default AccountsOverview;