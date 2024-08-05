import React from 'react';

const SavingsProgress = ({ monthlyIncome, spent, left, totalSavings }) => {
  // Calculate the percentage of income spent
  const percentage = (spent / monthlyIncome) * 100;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Monthly income and spending breakdown */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Monthly Income: ₦{monthlyIncome}</h3>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
          <span>Spent: ₦{spent}</span>
          <div className="w-4 h-4 bg-blue-500 rounded-full ml-4 mr-2"></div>
          <span>Left: ₦{left}</span>
        </div>
      </div>
      {/* Progress bar */}
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
        </div>
      </div>
      {/* Total savings and encouragement message */}
      <p className="text-sm">Total savings so far: ₦{totalSavings}</p>
      <p className="text-sm text-green-600">Great job! You've almost reached your goal!</p>
    </div>
  );
};

export default SavingsProgress;