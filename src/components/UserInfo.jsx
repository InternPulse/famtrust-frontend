import React from 'react';

const UserInfo = ({ name, id }) => {
  return (
    <div className="flex items-center mb-4">
      {/* User avatar */}
      <img src="/path-to-user-image.jpg" alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        {/* User name and ID */}
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{id}</p>
      </div>
    </div>
  );
};

export default UserInfo;