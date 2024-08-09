import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const SavingsProgress = ({ monthlyIncome, spent, left, totalSavings }) => {
  // Calculate the percentage of income spent
  const percentage = (spent / monthlyIncome) * 100;

  return (
    <div className=" bg-white p-4 rounded-lg shadow">
      {/* New progress bar */}
      <div className="flex">
      <div className="w-32 flex justify-center items-center">
      <CircularProgressbar
            value={75}
            styles={buildStyles({
              pathColor: '#4C6FFF',
              trailColor: '#E5E7EB',
              trailWidth: 500,
              strokeLinecap: 'butt',
              rotation: 0.75,
            })}
          />
            <div className="absolute w-24 items-center flex justify-center text-center">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
            width={50}
            height={50}
            className='rounded-full'
            alt="" />
            </div>
      </div>
      {/* Monthly income and spending breakdown */}
      <div className="flex flex-col mb-4 px-8">
        <h3 className="font-semibold py-2">Monthly Income: ₦{monthlyIncome}</h3>
          <div className="flex py-2 items-center">
          <div className="w-4 h-4 mr-2 bg-red-500 rounded-full "/>
          <span>Spent: ₦{spent}</span>
          </div>
          <div className='flex py-2 items-center'>
          <div className="w-4 h-4 mr-2 bg-blue-500 rounded-full"/>
          <span>Left: ₦{left}</span>
          </div>
          <p className="text-sm">Total savings so far: ₦{totalSavings}</p>
        </div>
      </div>
     
      {/* Progress bar */}
      {/* <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap
           text-white justify-center bg-blue-500"></div>
        </div>
      </div> */}

      {/* Total savings and encouragement message */}
      <div className='text-center'>
      <hr className='my-4 opacity-10'/>
      <p className="text-sm ">Great job! You've almost reached your goal!</p>
      </div>
    </div>
  );
};

export default SavingsProgress;