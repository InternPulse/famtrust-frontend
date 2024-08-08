import React from 'react';
import UserInfo from '../components/UserInfo';
import BalanceCard from '../components/AdminBalanceCard';
import SavingsProgress from '../components/SavingsProgress';
import AccountsOverview from '../components/AccountsOverview';
import SearchAndSort from '../components/SearchAndSort';
import SubAccountsTable from '../components/SubAccountsTable';
import TransactionHistoryTable from '../components/TransactionHistoryTable';
import DashboardCard from '../components/DashboardCard';

const FamilyAccessManagement = () => {
  return (
    // Use a responsive container with padding
    <div className="container  px-12 sm:px-6 lg:px-8 ">
      {/* Top section: User info, balance, and savings progress */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  mb-8 md:text-sm  ">
        {/* Left column */}
        <div className="space-y-6">
          <DashboardCard 
          name='Ritji Ishaku'
          id='12345'
          profileImg='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
          growth='10'
          // balance={`{balance}`.toLocaleString()}
          balance='12000'
          Transfer= 'Transfer Funds'
          Withdraw='Withdraw Funds'
          
          />
          {/* I have changed the card to ensure reusability */}

          {/* <UserInfo name="Ritji Ishaku" id="8327642732" />
          <BalanceCard balance={3500000} growth={10.08} /> */}
        </div>
        {/* Right column */}
        <div className='text-xs md:text-sm '> { /* We don't need this div */}
          <SavingsProgress monthlyIncome={50000} spent={14500} left={35500} totalSavings={1000} />
        </div> 
      </div>
      <AccountsOverview 
      CreateSubAccount= 'Create Sub Account'
      />
      
      {/* Search and sort section */}    
      <div className="mb-8">
        <SearchAndSort />
      </div>
      
      {/* Sub-accounts table */}
      <div className="mb-8">
        <SubAccountsTable />
      </div>
      
      {/* Transaction history table */}
      <div>
        <TransactionHistoryTable />
      </div>
    </div>
  );
};

export default FamilyAccessManagement;