// Card.js
import React from 'react';

const Card = ({ image, name, income, incomeChange, changeColor }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-sm w-full lg:w-auto">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between gap-2 w-full">
          <img
            src={image}
            alt={`${name} profile`}
            className="w-12 h-12 rounded-full mx-auto "
          />

          <p className="card-name">{name}</p>
        </div>
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex flex-col">
            <p className="total-balance">Total Balance</p>
            <p
              className="text-income"
              style={{
                color: 'var(--Color-Style-Primary-Roles-Pri-variant, #2452D6)',
              }}
            >
              {income}
            </p>
          </div>
          <p className={`font-bold`} style={{ color: changeColor }}>
            {incomeChange}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
