import React, { useState, useEffect } from 'react';
import { RxDashboard } from "react-icons/rx";
import { RiTeamLine } from "react-icons/ri";
import { GrLineChart } from "react-icons/gr";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineLogout, MdOutlineHelpOutline } from "react-icons/md";
import FamTrustLogo from '../assets/FamTrustlogo.png';
import FamTrustSmallLogo from '../assets/FamTrustSmallLogo.png';

const Sidebar = () => {
    // State to manage the open/closed state of dropdown menus
    const [openDropdown, setOpenDropdown] = useState(null);
    // State to track if the screen is small (mobile)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Effect to handle screen size changes
    useEffect(() => {
        const handleResize = () => {
            // Set isSmallScreen to true if width is less than 768px (md breakpoint)
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to handle mouse enter for dropdown on non-small screens
    const handleMouseEnter = (menu) => {
        if (!isSmallScreen) {
            setOpenDropdown(menu);
        }
    };

    // Function to handle mouse leave for dropdown on non-small screens
    const handleMouseLeave = () => {
        if (!isSmallScreen) {
            setOpenDropdown(null);
        }
    };

    // Function to toggle dropdown on click (for small screens)
    const toggleDropdown = (menu) => {
        if (isSmallScreen) {
            setOpenDropdown(openDropdown === menu ? null : menu);
        }
    };

    // Array containing menu items with their icons, labels, and sub-items
    const menuItems = [
        {
            icon: <RxDashboard />,
            label: 'Dashboard',
            href: '/dashboard',
            subItems: []
        },
        {
            icon: <RiTeamLine />,
            label: 'Family Account Management',
            href: '/family-access-management',
            subItems: [
                { icon: <RxDashboard />, label: 'Family Access Management', href: '/family-access-management' },
                { icon: <RxDashboard />, label: 'Family Transaction Management', href: '/family-transaction-management' },
            ]
        },
        // {
        //     icon: <GrLineChart />,
        //     label: 'Finance Management',
        //     subItems: [
        //         { icon: <RxDashboard />, label: 'Transaction History', href: '/transaction-history' },
        //         { icon: <RxDashboard />, label: 'Fund Request', href: '/fund-request' },
        //         { icon: <RxDashboard />, label: 'Verify ID', href: '/verify-id' }
        //     ]
        // },
        {
            icon: <IoMdNotifications />,
            label: 'Notifications',
            href: '/notifications',
            subItems: []
        },
        {
            icon: <IoMdSettings />,
            label: 'Settings',
            href: '/settings',
            subItems: []
        },
        {
            icon: <MdOutlineHelpOutline />,
            label: 'Help & Support',
            href: '/help-support',
            subItems: []
        },
        {
            icon: <MdOutlineLogout className='text-red-700'/>,
            label: 'Logout',
            href: '/logout',
            subItems: []
        }
    ];

    return (
        <div className={`bg-sb-bg text-sb-text-color ${isSmallScreen ? 'w-1/6' : 'w-1/4'} h-full fixed flex flex-col items-center font-bold transition-all duration-300`}>
            {/* Logo section */}
            <div className="w-full text-center">
                {isSmallScreen ? (
                    // Small logo for small and medium screens
                    <img src={FamTrustSmallLogo} alt="FamTrust Small Logo" className="w-12 h-12 mx-auto my-4" />
                ) : (
                    // Large logo for large screens
                    <img src={FamTrustLogo} alt="FamTrust Logo" className="pl-6 pr-12 py-5 lg:pl-10 lg:pr-16" />
                )}
            </div>

            {/* Navigation menu */}
            <nav className={`font-bold text-sm space-y-4 mt-8 ${isSmallScreen ? 'w-full' : 'text-center justify-between'}`}>
                {menuItems.map((item, index) => (
                    <div 
                        key={index} 
                        onMouseEnter={() => handleMouseEnter(index)} 
                        onMouseLeave={handleMouseLeave}
                        onClick={() => toggleDropdown(index)}
                        className={`p-2 ${isSmallScreen ? 'text-center' : ''}`}
                    >
                        {/* Menu item */}
                        <div className={`flex ${isSmallScreen ? 'justify-center' : 'justify-between'} items-center cursor-pointer hover:text-sb-hover-text hover:bg-sb-hover-bg hover:rounded hover:px-2.5 hover:py-2 ${isSmallScreen ? '' : 'lg:space-x-16'}`}>
                            <ul className={`flex items-center ${isSmallScreen ? 'justify-center' : 'space-x-2'}`}>
                                <li className={isSmallScreen ? 'text-2xl' : ''}><a href={item.href}>{item.icon}</a></li>
                                {/* Show label on medium and large screens */}
                                {!isSmallScreen && <li><a href={item.href}>{item.label}</a></li>}
                            </ul>
                            {/* Show dropdown arrows only on medium and large screens */}
                            {!isSmallScreen && item.subItems.length > 0 && (
                                openDropdown === index ? <IoIosArrowUp className='text-2xl' /> : <IoIosArrowDown className='text-2xl' />
                            )}
                        </div>

                        {/* Dropdown menu */}
                        {openDropdown === index && item.subItems.length > 0 && (
                            <div className={`mt-2 space-y-2 ${isSmallScreen ? 'absolute left-16 bg-sb-bg p-2 rounded' : 'px-7 lg:px-16'}`}>
                                {item.subItems.map((subItem, subIndex) => (
                                    <ul key={subIndex} className='flex justify-between items-center hover:text-sb-hover-text hover:bg-sb-hover-bg hover:rounded hover:px-1 hover:py-1 cursor-pointer'>
                                        <li>{subItem.icon}</li>
                                        <li className=''><a href={subItem.href}>{subItem.label}</a></li>
                                    </ul>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;