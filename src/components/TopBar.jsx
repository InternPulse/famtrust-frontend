import React, { useState, useEffect } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineWifi, MdAttachMoney, MdTransferWithinAStation, MdPayment, MdLogout } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // State to manage dropdown open/close
  const [activePage, setActivePage] = useState(''); // State to store the current page name
  const [searchQuery, setSearchQuery] = useState(''); // State to manage the search input
  const location = useLocation(); // Hook to get the current location

  // Update the active page name whenever the location changes
  useEffect(() => {
    const pathName = location.pathname.split('/').filter(Boolean).join(' ');
    setActivePage(pathName ? pathName.charAt(0).toUpperCase() + pathName.slice(1) : 'Home');
  }, [location]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery('');
  };

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  // Configuration array for top bar items
  const topbarItems = [
    {
      icon: <AiOutlineBell className="text-xl cursor-pointer" />,
      label: '',
    },
    {
      icon: <img src="src\assets\Ellipse 1.png" alt="Profile" className="h-8 w-8 rounded-full" />,
      label: '',
      dropdownItems: [
        { label: 'Ritji Ishaku' },
        { label: 'divider' },
        { icon: <MdOutlineWifi />, label: 'Airtime & Data', href: '/airtime-data' },
        { icon: <MdAttachMoney />, label: 'Fund Sub Account', href: '/fund-sub-account' },
        { icon: <MdTransferWithinAStation />, label: 'Fund Transfer', href: '/fund-transfer' },
        { icon: <MdPayment />, label: 'Pay Bill', href: '/pay-bill' },
        { icon: <MdLogout />, label: 'Log out', href: '/logout' },
      ],
    },
  ];

  return (
    <div className="bg-white pt-8 pl-8 h-auto flex gap-20 lg:space-x-52 items-center">
      {/* Display the current active page name */}
      <div className="flex flex-row space-x-6 text-lg font-semibold">{activePage}</div>
      <div className="flex flex-row space-x-10">
        {/* Search input and button */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="border rounded-lg py-1 px-2 w-80 h-9"
          />
        </div>
        {/* Map through topbar items to create notifications and profile dropdowns */}
        {topbarItems.map((item, index) => (
          <div key={index} className="relative">
            <div onClick={() => toggleDropdown(index)} className="flex items-center cursor-pointer space-x-2">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
              {isDropdownOpen === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {/* Render dropdown menu if open */}
            {isDropdownOpen === index && item.dropdownItems.length > 0 && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                  dropdownItem.label === 'divider' ? (
                    <hr key={dropdownIndex} className="my-2" />
                  ) : (
                    <a
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2"
                    >
                      <span>{dropdownItem.label}</span>
                      {dropdownItem.icon}
                    </a>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
