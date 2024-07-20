/* eslint-disable react/prop-types */
import { FaRegCopy } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";

const FamilyMember = ({ name, balance, percentage }) => (
  <div className="bg-white p-4 rounded-lg shadow ">
    <div className="flex gap-2 items-center">
    <img src={`avatar-${name}.jpg`} alt={name} className="w-12 h-12 rounded-full mb-2 border-2" />
    <p className="font-semibold">{name}</p>
    </div>

<div className="flex justify-between items-center">
<div className="flex flex-col gap-1">
<p className="text-lg">Total Balance</p>
    <p className="text-sm">₦{balance.toFixed(2)}</p>
</div>

    <p className={`text-md ${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {percentage >= 0 ? (
        <FaArrowDownLong className="inline-block mr-1 rotate-180" size={15} />
      ) : (
        <FaArrowDownLong className="inline-block mr-1" size={15} />
      )} {Math.abs(percentage)}%
    </p>
    </div>

  </div>
);

const TransactionItem = ({ item, date, amount }) => (
  <li className="flex  justify-between items-center text-center py-2 border-b">
    <div className="flex items-center w-40">
      <div className="w-8 h-8 bg-blue-100 rounded-full mr-2"/>
      <span>{item}</span>
    </div>
    <span className="text-sm text-gray-500 text-center">{date}</span>
    <span className="font-medium text-center">₦{amount.toFixed(2)}</span>
  </li>
);

const ExpenseItem = ({ item, amount, percentage }) => (
  <li className="flex justify-between items-center py-2 border-b">
    <span>{item}</span>
    <div className="flex items-center w-28">
      <div className="w-8 h-8 bg-blue-200 rounded-full mr-2 flex items-center justify-center">
        <div className="w-6 h-6 bg-blue-500 rounded-full" />
      </div>
      <span>₦{amount.toFixed(2)}</span>
    </div>
  </li>
);

const Dashboard = () => {
  return (
    <div className="p-2 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* User Info and Balance */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="ml-4 flex items-center mb-2">
            <img src="user-avatar.jpg" alt="User" className="w-20 h-20 mb-4 border-2 rounded-full mr-4" />
             
             <div className="-ml-2 flex flex-col gap-2">

              <h2 className="text-xl font-bold">Ritji Ishaku</h2>
              <p className="text-gray-500">Basic Account</p>
             </div>
            <div>
            </div>
          </div>
          <div className="mt-6 ml-4 flex justify-between">
<div className="flex items-center gap-3">

            <div className="flex flex-col">
            <p className="text-lg text-gray-500">Total balance</p>
            <p className="text-2xl font-bold text-blue-500">₦1000.00
               </p>
</div>
<div className="flex gap-1 text-green-500">

                <FaArrowDownLong size={22} className="rotate-180"/>
               <span className=" text-md ">
                 30.09%</span>
</div>
  
            </div>
            <div className="flex gap-3 mt-6 items-center">
              <p className="text-gray-400">hsdsdjdfisdiui</p>
              <FaRegCopy  className="text-blue-500" />
              <LuShare2  className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Monthly Income Progress */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-4 ml-[18%] mb-6">

          <div className="w-32 h-32 
           bg-blue-200 border-4 border-blue-500 rounded-full"/>
           <div className="flex flex-col">

          <h3 className="text-lg font-semibold mb-2">
            Monthly Income 
            <span className="ml-2 text-blue-500">
              ₦5000
              </span>
              </h3>
          <h3 className="text-lg font-semibold mb-2">
            Monthly Income 
            <span className="ml-2 text-blue-500">
              ₦5000
              </span>
              </h3>
          <h3 className="text-lg font-semibold mb-2">
            Monthly Income 
            <span className="ml-2 text-blue-500">
              ₦5000
              </span>
              </h3>
           </div>

          </div>
          {/* Circular progress bar placeholder */}
          <p className="text-sm text-gray-500  text-center border-t p-1">Good job! You've almost reached your goal</p>
        </div>
      </div>

      {/* Family Members */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
        {[
          { name: 'Shalom Ishaku', balance: 2000, percentage: 28.12 },
          { name: 'Nathaniel Ishaku', balance: 2500, percentage: -28.68 },
          { name: 'Teeyaya Ishaku', balance: 3500, percentage: 55.00 },
          { name: 'Tina Ishaku', balance: 1500, percentage: -10.05 },
        ].map((member, index) => (
          <FamilyMember key={index} {...member} />
        ))}
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
          <div className="border-2 border-dashed border-gray-300 rounded-lg w-full h-full flex items-center justify-center">
            <span className="text-4xl text-gray-400">+</span>
          </div>
        </div>
      </div>

      {/* Recent Transactions and Expenses */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <ul className="space-y-2">
            {[
              { item: 'Internet', date: '11 July, 2024', amount: 1000 },
              { item: 'Johnson LA', date: '09 July, 2024', amount: 1000 },
              { item: 'Rent', date: '08 July, 2024', amount: 3450 },
              { item: 'Water', date: '11 July, 2024', amount: 1300 },
            ].map((transaction, index) => (
              <TransactionItem key={index} {...transaction} />
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Expenses</h3>
          <ul className="space-y-2">
            {[
              { item: 'Internet', amount: 1000, percentage: 80 },
              { item: 'Foodstuff', amount: 2500, percentage: 60 },
              { item: 'Electronics', amount: 300, percentage: 30 },
              { item: 'Rent', amount: 3450, percentage: 90 },
            ].map((expense, index) => (
              <ExpenseItem key={index} {...expense} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;