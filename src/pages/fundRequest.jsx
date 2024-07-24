import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { VscArrowSmallDown } from 'react-icons/vsc';

const FundRequest = () => {
  const [search, setSearch] = useState('');
  const [request, setRequest] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [reasons, setReasons] = useState('');

  const submitClick = (event) => {
    event.preventDefault();

    setSearch('');
    setRequest('');
    setEmail('');
    setAmount('');
    setDate('');
    setReasons('');
  };

  return (
    <div>
      <div className="flex items-center justify-between mx-6 py-6">
        <h2 className="text-xl font-semibold mr-8">
          <Link to="/"> Fund Request</Link>
        </h2>
        <div className="flex items-center ">
          <input
            className=" border rounded-md w-full  pl-2 mr-2"
            type="text"
            placeholder="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
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
      <div className="bg-secondary-grey2 m-6 p-4 rounded-lg">
        <h2 className=" text-2xl text-primary-blue font-semibold mb-10">
          Request Funds Form
        </h2>
        <form onSubmit={submitClick} className="block my-6" action="">
          <label className="mb-6" htmlFor="">
            Request Funds from
            <select
              className="w-full rounded-xl border m-1 mb-6 mx-auto block p-2"
              name="hh"
              id=""
              value={request}
              onChange={(event) => setRequest(event.target.value)}
            >
              <option className="text-secondary-grey" value="" disabled>
                Select your first question
              </option>
              <option
                className="rounded-r-xl border-0 bg-transparent"
                value="que1"
              >
                q
              </option>
              <option value="que2"></option>
              <option value="que3"></option>
            </select>
          </label>
          <label htmlFor="">Email</label>
          <input
            className="w-full rounded-xl border m-1 mb-8  mx-auto block p-2"
            type="email"
            placeholder="Enter Family Member Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="flex flex-wrap mb-8">
            <label className="flex-1" htmlFor="">
              Request Amount
              <input
                className="w-full rounded-xl border m-1 block p-2 flex-1"
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </label>

            <label className="ml-6 flex-1 truncate " htmlFor="">
              Request Date
              <input
                className="w-full  rounded-xl border p-2 m-1  block  "
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>
          <label htmlFor="">
            Reasons for request
            <input
              className="w-full p-2 text-start rounded-xl border m-1  block pb-28 "
              type="text"
              placeholder="Enter the reason for your request"
              value={reasons}
              onChange={(event) => setReasons(event.target.value)}
            />
          </label>
          <div className="w-3/4 my-10 text-white rounded-xl p-3  text-center m-auto bg-blue-600 hover:scale-105">
            <Link to="/submit.jsx">
              <button className=" transition" type="submit">
                submit request
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundRequest;
