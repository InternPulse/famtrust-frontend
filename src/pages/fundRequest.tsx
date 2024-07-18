import { useState } from 'react';

const FundRequest = () => {
  const [search, setSearch] = useState('');
  const [request, setRequest] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [reasons, setReasons] = useState('');

  const submitClick = (event) => {
    event.preventDefault();

    setSearch('')
    setRequest('');
    setEmail('');
    setAmount('');
    setDate('');
    setReasons('');
  };

  return (
    <div>
      <div className="flex items-center justify-between mx-6 py-6">
        <h2>Transaction History</h2>
        <div className="flex items-center ">
          <input
            className=" border rounded-md  pl-2 mr-2"
            type="text"
            placeholder="search"
            value={search}
            onChange={(event) => {
                setSearch(event.target.value)
            }}
          />
          <img src="" alt="icon" />
          <img src="" alt="icn2" />
        </div>
      </div>
      <div className="bg-white m-6 p-4 rounded-lg">
        <h2 className=" text-4xl text-blue-400 font-semibold">
          Request Funds Form
        </h2>
        <form onSubmit={submitClick} className="block my-6" action="">
          <label htmlFor="">Request Funds from</label>
          <select
            className="w-full rounded border m-1 mx-auto block"
            name="hh"
            id=""
            value={request}
            onChange={(event) => setRequest(event.target.value)}
          >
            <option value="que1"></option>
            <option value="que2"></option>
            <option value="que3"></option>
          </select>
          <label htmlFor="">Email</label>
          <input
            className="w-full rounded border m-1 mx-auto block p-2"
            type="email"
            placeholder="Enter Family Member Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="flex justify-">
            <label className="flex-1" htmlFor="">
              Request Amount
              <input
                className="w-full rounded border m-1 block p-2"
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </label>

            <label className="ml-6 flex-1 " htmlFor="">
              Request Date
              <input
                className="w-full rounded border p-2 m-1  block  "
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>
          <label htmlFor="">
            Reasons for request
            <input
              className="w-full p-2 text-start rounded border m-1  block pb-28 "
              type="text"
              placeholder="Enter the reason for your request"
              value={reasons}
              onChange={(event) => setReasons(event.target.value)}
            />
          </label>
          <div className="w-2/4 my-10 text-white rounded-md p-3  text-center m-auto bg-blue-600">
            <button className="bg-red-300" type="submit">
              submit request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundRequest;
