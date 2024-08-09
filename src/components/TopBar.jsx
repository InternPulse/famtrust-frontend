import React from 'react';
import ProfileImage from '../assets/Ellipse1.png';

// Declared user object
const user = {
  firstName: "Ritji",
  lastName: "Ishaku",
  profilePicture: ProfileImage
};

const TopBar = () => {
  return (
    <div className="bg-sb-bg w-full h-20 px-4 sm:px-6 flex justify-between items-center">
      <h1 className="text-xl lg:text-2xl md:text-2xl font-semibold">Welcome {user.firstName}!</h1>
      <div className="flex items-center space-x-2 sm:space-x-4 text-text-color font-semibold">
        <span className="text-sm sm:text-base">{`${user.firstName} ${user.lastName}`}</span>
        <img 
          src={user.profilePicture} 
          alt="Profile" 
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default TopBar;