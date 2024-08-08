import React from 'react';

const SearchAndSort = () => {
  // const [searchText, setSearchText] = useState('')
  return (
    <div className="flex flex-col sm:flex-row  items-center mb-4 overf">
      {/* Search input and button */}
      <div className="flex w-full sm:w-auto mb-4 sm:mb-0">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="flex-grow p-2 border border-slate-200 rounded-lg"
        />
        <button className="bg-blue-600 text-white mx-4 px-4 py-2 rounded-xl">
          Search
        </button>
      </div>
      {/* Sort dropdown */}
      <select className="px-4 py-3 rounded-xl bg-darkerGrey text-blue-600">
        <option>Sort by</option>
      </select>
    </div>
  );
};

export default SearchAndSort;