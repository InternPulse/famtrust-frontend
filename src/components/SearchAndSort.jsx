import React from 'react';

const SearchAndSort = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      {/* Search input and button */}
      <div className="flex w-full sm:w-auto mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow p-2 border rounded-l-lg"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
          Search
        </button>
      </div>
      {/* Sort dropdown */}
      <select className="border p-2 rounded">
        <option>Sort by</option>
      </select>
    </div>
  );
};

export default SearchAndSort;