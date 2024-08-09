import React from 'react';
import { PiPiggyBank, PiReceipt } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import SubaccountsLogo from '../assets/3dcube.svg';
import People from '../assets/people.svg';
import FinancialEdu from '../assets/UserArrows.svg';

const services = [
  {
    icon: <img src={People} alt="Logo" />,
    title: 'Unified Family Account Management',
    link: '#'
  },
  {
    icon: <img src={SubaccountsLogo} alt="Logo" />,
    title: 'Individual Sub-Accounts or Wallet',
    link: '#'
  },
  {
    icon: <PiPiggyBank />,
    title: 'Automated Savings Plans (FamSave)',
    link: '#'
  },
  {
    icon: <PiReceipt />,
    title: 'Expense Categorization & Tracking Expense',
    link: '#'
  },
  {
    icon: <img src={FinancialEdu} alt="Logo" />,
    title: 'Financial Education For Children',
    link: '#'
  }
];

const ServiceCard = ({ icon, title, link }) => (
  <div className="bg-lightestGrey p-4 rounded-lg border border-lightBlue flex flex-col h-full">
    <div className="text-5xl mb-2 text-lightBlue">{icon}</div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <a href={link} className="text-darkestGrey font-medium mt-auto underline flex flex-row items-center">
      View details <BsArrowRight className="text-2xl text-black ml-2" />
    </a>
  </div>
);

const Services = () => {
  return (
    <div className="bg-lightestGrey w-full px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;