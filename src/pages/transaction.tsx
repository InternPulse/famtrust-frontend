import { useState } from 'react';
import TransList from './transList';
import TransSearch from './transSearch';

const Transaction = () => {
  const [data, setData] = useState([
    {
      date: '11th july',
      Amount: '#2000',
      Description: 'Olawale Johanna',
      Categoty: 'Data',
      ID: 1001,
      status: 'pending',
    },
    {
      date: '10th july',
      Amount: '#5000',
      Description: 'MTN Airtime',
      Categoty: 'Data',
      ID: 1002,
      status: 'Approved',
    },
    {
      date: '8th july',
      Amount: '#2000',
      Description: 'Mustapha Glory',
      Categoty: 'Groceries',
      ID: 1003,
      status: 'Approved',
    },
    {
      date: '8th july',
      Amount: '#2000',
      Description: 'Prestige Stores',
      Categoty: 'Groceries',
      ID: 1004,
      status: 'Declined',
    },
    {
      date: '1th july',
      Amount: '#1000',
      Description: 'John Chukwu',
      Categoty: 'Shopping',
      ID: 1005,
      status: 'Approved',
    },
  ]);

  return (
    <div className="">
      <div className="flex items-center justify-between mx-6 py-6">
        <h2>Transaction History</h2>
        <div className='flex items-center'>
        <input className=" border rounded-md mr-2" type="text" placeholder="search" />
        <img src="" alt="icon" />
        <img src="" alt="icn2" />
        </div>
      </div>

      <div className="bg-white m-6 p-1 rounded-lg">
        <TransSearch data={data} setData={setData} />
        <TransList data={data} />
        {/* {data.map((db) => (
        <div className='flex justify-around items-center text-center ' key={db.id}>
          <div>{db.date}</div>
          <div>{db.Amount}</div>
          <div>{db.Description}</div>
          <div>{db.Categoty}</div>
          <div>{db.ID}</div>
          <div>{db.status}</div>
        </div>
      ))} */}
      </div>
    </div>
  );
};
export default Transaction;
