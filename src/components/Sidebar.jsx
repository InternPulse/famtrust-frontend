import React, { useState } from 'react';
import { TbHomeFilled } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { GrLineChart } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { BsBarChartFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
    // State to manage the open/closed state of dropdown menus
    const [openDropdown, setOpenDropdown] = useState(null);

    // Function to toggle the dropdown menu
    // const toggleDropdown = (menu) => {
    //     setOpenDropdown(openDropdown === menu ? null : menu);
    // };
    const handleMouseEnter = (menu) => {
        setOpenDropdown(menu);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    // Array containing menu items with their icons, labels, and sub-items
    const menuItems = [
        {
            icon: <TbHomeFilled className='text-2xl' />,
            label: 'Home',
            href: '/home',
            subItems: [
                { icon: <TbHomeFilled className='text-lg' />, label: 'Overview', href: '/overview' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Sub-Account List', href: '/sub-account-list' }
            ]
        },
        {
            icon: <RiTeamLine className='text-2xl' />,
            label: 'Family Management',
            href: '/family-management',
            subItems: [
                { icon: <TbHomeFilled className='text-lg' />, label: 'Add Sub-Account', href: '/add-sub-account' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Individual Sub-Accounts', href: '/individual-sub-accounts' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Permissions and Roles', href: '/permissions-roles' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Family Member List', href: '/family-member-list' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Notifications', href: '/notifications' }
            ]
        },
        {
            icon: <GrLineChart className='text-2xl' />,
            label: 'Finance Management',
            subItems: [
                { icon: <TbHomeFilled className='text-lg' />, label: 'Transaction History', href: '/transaction-history' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Fund Request', href: '/fund-request' },
                { icon: <TbHomeFilled className='text-lg' />, label: 'Verify ID', href: '/verify-id' }
            ]
        },
        {
            icon: <IoMdNotifications className='text-2xl' />,
            label: 'Notifications',
            href: '/notifications',
            subItems: []
        },
        {
            icon: <IoMdSettings className='text-2xl' />,
            label: 'Settings',
            href: '/settings',
            subItems: []
        },
        {
            icon: <BsBarChartFill className='text-2xl' />,
            label: 'Help & Support',
            href: '/help-support',
            subItems: []
        }
    ];

    return (
        <div className="bg-sidebar-bg text-text-color w-2/5 lg:w-1/4 h-full fixed flex flex-col items-center font-bold">
            <div className="w-full text-center">
                <img src="src/assets/FamTrustlogo.png" alt="FamTrust Logo" className="pl-6 pr-12 py-5 lg:pl-10 lg:pr-16" />
                <hr className='w-full' />
            </div>

            <nav className="font-bold text-sm space-y-4 mt-16 text-center justify-between">
                {menuItems.map((item, index) => (
                    <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="p-2">

                        <div className="flex justify-between items-center cursor-pointer hover:text-hover-text hover:bg-hover-bg hover:rounded hover:px-2.5 hover:py-2 lg:space-x-16 hover:font-medium" key={index}>
                            <ul className="flex items-center space-x-2">
                                <li>{item.icon}</li>
                                <li>{item.label}</li>
                            </ul>
                            {openDropdown === index ? <IoIosArrowUp className='text-2xl' /> : <IoIosArrowDown className='text-2xl' />}
                        </div>

                        {openDropdown === index && item.subItems.length > 0 && (
                            <div className='px-7 lg:px-16 mt-2 space-y-2'>
                                {item.subItems.map((subItem, subIndex) => (
                                    <ul key={subIndex} className='flex items-center space-x-2 hover:text-hover-text hover:bg-hover-bg hover:rounded hover:px-1 hover:py-1 cursor-pointer'>
                                        <li> {subItem.icon}</li>
                                        <li  className='hover:font-medium'><a href={subItem.href}>{subItem.label}</a></li>
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
