import { useState } from 'react';
import TransList from './transList';
import TransSearch from './transSearch';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { VscArrowSmallDown } from 'react-icons/vsc';

const Transaction = () => {
  const [data, setData] = useState([
    {
      date: '11th july',
      Amount: '#2000',
      Description: 'Olawale Johanna',
      Category: 'Data',
      ID: 1001,
      status: 'pending',
    },
    {
      date: '10th july',
      Amount: '#5000',
      Description: 'MTN Airtime',
      Category: 'Data',
      ID: 1002,
      status: 'Approved',
    },
    {
      date: '8th july',
      Amount: '#2000',
      Description: 'Mustapha Glory',
      Category: 'Groceries',
      ID: 1003,
      status: 'Approved',
    },
    {
      date: '8th july',
      Amount: '#2000',
      Description: 'Prestige Stores',
      Category: 'Groceries',
      ID: 1004,
      status: 'Declined',
    },
    {
      date: '1th july',
      Amount: '#1000',
      Description: 'John Chukwu',
      Category: 'Shopping',
      ID: 1005,
      status: 'Approved',
    },
    {
      date: '11th july',
      Amount: '#2000',
      Description: 'Olawale Johanna',
      Category: 'Data',
      ID: 1001,
      status: 'pending',
    },
    {
      date: '10th july',
      Amount: '#5000',
      Description: 'MTN Airtime',
      Category: 'Data',
      ID: 1002,
      status: 'Approved',
    },
    {
      date: '8th july',
      Amount: '#2000',
      Description: 'Mustapha Glory',
      Category: 'Groceries',
      ID: 1003,
      status: 'Approved',
    },
    {
      date: '8th july',
      Amount: '#2000',
      Description: 'Prestige Stores',
      Category: 'Groceries',
      ID: 1004,
      status: 'Declined',
    },
    {
      date: '1th july',
      Amount: '#1000',
      Description: 'John Chukwu',
      Category: 'Shopping',
      ID: 1005,
      status: 'Approved',
    },
  ]);
  const [search, setSearch] = useState('');

  return (
    <div className="">
      <div className="flex items-center justify-between mx-6 py-6">
        <h2 className="mr-10 text-xl font-semibold">
          <Link to="/">Transaction History</Link>
        </h2>
        <div className="flex items-center">
          <input
            className="w-full pl-2  rounded-md mr-2"
            type="text"
            placeholder="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div>
            <img src="bell.svg" alt="" />
          </div>
          <div className="mx-1">
            <img src="./Profile.svg" alt="" />
            {/* <CgProfile />{' '} */}
          </div>
          <div>
            <img src="scroll-dwn.svg" alt="" />
            {/* <VscArrowSmallDown /> */}
          </div>
        </div>
      </div>

      <div className="bg-secondary-grey2 m-6 p-1 rounded-lg ">
        <TransSearch data={data} setData={setData} setSearch={setSearch} />
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
