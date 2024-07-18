import { useState } from "react";

const TransSearch = ({ data, setData }) => {

    const [amount,setAmount] = useState("");

  const pushFilter = () => {
    const filter = data.filter((db) => db.amount === amount);
    setData(filter);
  };

  return (
    <div>

      <form className="flex items-center justify-between m-8" action="" method="post">
        <input
          className="p-1 w-2/4 border-2 rounded-lg border-gray-300"
          type="text"
          placeholder="🔍 search"
        />
        <div>
          <button
            onClick={pushFilter}
            className="filter py-1 px-6 rounded-lg border-2 mr-4"
          >
            filter
          </button>
          <button className="sort py-1 px-6 mr-4  rounded-lg border-2">
            sort
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransSearch;
