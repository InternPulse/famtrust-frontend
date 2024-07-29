import { useState } from 'react';

const TransSearch = ({ data, setData, setSearch }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const pushFilter = (event) => {
    // setTimeout(() => {

    // }, 3000);
    event.preventDefault();
    const filter = [...data].filter(
      (db) =>
        (amount === '' || db.Category.toLocaleLowerCase() === amount.toLocaleLowerCase()) &&
        (description === '' || db.Description === description),
    );

    if (amount === '' && description === '') {
      setData(data);
    } else {
      setData(filter);
    }
    setDescription('');
    setAmount('');
    setSearch('');
  };
  //   const pushFilter = () => {
  //   event.preventDefault();
  //   const filter = [...data].filter((db) => db.Amount === amount);
  //   if (amount === '') {
  //     setData(data);
  //   } else {
  //     setData(filter);
  //   }
  //   setAmount('');
  //   setSearch('');
  // };

  const pushSort = (event) => {
    event.preventDefault();
    const sorted = [...data].slice().sort((a, b) => a.ID - b.ID);
    setData(sorted);
  };

  return (
    <div>
      <form
        className="flex items-center justify-between m-8"
        action=""
        method="post"
      >
        <input
          className="p-1 mr-10  w-2/4 border-2 rounded-lg border-gray-300"
          type="text"
          placeholder="🔍 filter by category"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <div className='flex'>
          <button
            onClick={pushFilter}
            className="filter py-1 px-6 rounded-lg border-2 mr-4 text-primary-blue"
          >
            filter
          </button>
          <button
            onClick={pushSort}
            className="sort py-1 px-6 mr-0 md:mr-4 text-primary-blue rounded-lg border-2"
          >
            sort
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransSearch;
