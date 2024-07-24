import React from 'react';
import ProfileCard from './ProfileCard';
import CardSection from './cardsection/CardSection';
import RecentTransactions from './RecentTransactions';
import ExpenseCard from './ExpenseCard';
import ProgressCard from './ProgressCard';

const Overview = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:ml-[330px] p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <ProfileCard />
        <ProgressCard />
      </div>
      <div className="px-6">
        <CardSection />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 ml-[330px] m-6 pl-6">
        <RecentTransactions />
        <ExpenseCard />
      </div>
    </div>
  );
};

export default Overview;
