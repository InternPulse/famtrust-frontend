import React, { useState, useEffect } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWifi, MdAttachMoney, MdTransferWithinAStation, MdPayment, MdLogout } from 'react-icons/md';

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePage, setActivePage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const pageTitle = pathSegments.length > 0 
      ? pathSegments[pathSegments.length - 1].split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      : 'Sub-Account List';
    setActivePage(pageTitle);
  }, [location]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white w-full h-16 px-6 flex justify-between items-center border-b">
      <h1 className="text-xl font-semibold">{activePage}</h1>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div onClick={toggleDropdown} className="flex items-center cursor-pointer space-x-2">
            <img src="/src/assets/Ellipse 1.png" alt="Profile" className="h-8 w-8 rounded-full" />
            <IoIosArrowDown />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
              <div className="mb-2 font-semibold">Ritji Ishaku</div>
              <div className="text-sm text-gray-500 mb-2">ritjiishaku@gmail.com</div>
              <hr className="my-2" />
              <a href="/airtime-data" className="flex items-center py-2 hover:bg-gray-100">
                <MdOutlineWifi className="mr-2" /> Airtime & Data
              </a>
              <a href="/fund-sub-account" className="flex items-center py-2 hover:bg-gray-100">
                <MdAttachMoney className="mr-2" /> Fund Sub Account
              </a>
              <a href="/fund-transfer" className="flex items-center py-2 hover:bg-gray-100">
                <MdTransferWithinAStation className="mr-2" /> Fund Transfer
              </a>
              <a href="/pay-bill" className="flex items-center py-2 hover:bg-gray-100">
                <MdPayment className="mr-2" /> Pay Bill
              </a>
              <a href="/logout" className="flex items-center py-2 hover:bg-gray-100">
                <MdLogout className="mr-2" /> Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;