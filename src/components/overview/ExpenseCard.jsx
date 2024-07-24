import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const expenses = [
  { label: 'Internet', amount: 1000, progress: 73, change: -20.08 },
  { label: 'Foodstuff', amount: 2500, progress: 80, change: 10.2 },
  { label: 'Electronics', amount: 300, progress: 90, change: -30.92 },
  { label: 'Rent', amount: 3450, progress: 60, change: 9.31 },
];

const ExpenseCard = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-md"
      style={{
        width: '293px',
        height: '360px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      <div className="space-y-4 flex-grow overflow-y-auto">
        {expenses.map((expense, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <div style={{ width: 50, height: 50 }}>
                <CircularProgressbar
                  value={expense.progress}
                  text={`${expense.progress}%`}
                  styles={{
                    path: {
                      stroke: `#4567F7`,
                    },
                    text: {
                      fill: '#4567F7',
                      fontSize: '24px',
                    },
                  }}
                />
              </div>
              <div className="ml-2 flex flex-col">
                <span
                  style={{
                    color: '#000',
                    fontFamily: 'Lato',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                  }}
                >
                  ${expense.amount.toFixed(2)}
                </span>
                <span className="expense-label">{expense.label}</span>
              </div>
            </div>
            <div
              className={`flex items-center ${
                expense.change > 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {expense.change > 0 ? <FaArrowUp /> : <FaArrowDown />}
              <span className="ml-1">
                {Math.abs(expense.change).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCard;
