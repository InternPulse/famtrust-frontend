import React from 'react';
import UserInfo from '../components/UserInfo';
import BalanceCard from '../components/AdminBalanceCard';
import SavingsProgress from '../components/SavingsProgress';
import AccountsOverview from '../components/AccountsOverview';
import SearchAndSort from '../components/SearchAndSort';
import SubAccountsTable from '../components/SubAccountsTable';
import TransactionHistoryTable from '../components/TransactionHistoryTable';

const AdminDashboard = () => {
  return (
    // Use a responsive container with padding
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top section: User info, balance, and savings progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left column */}
        <div className="space-y-6">
          <UserInfo name="Ritji Ishaku" id="8327642732" />
          <BalanceCard balance={3500000} growth={10.08} />
          <AccountsOverview />
        </div>
        {/* Right column */}
        <div>
          <SavingsProgress monthlyIncome={50000} spent={14500} left={35500} totalSavings={1000} />
        </div>
      </div>
      
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

export default AdminDashboard;