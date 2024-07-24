import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-hover-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className='bg-white h-auto w-auto rounded-2xl mb-4'>
              <img src="src\assets\FamTrustlogo.png" alt="FamTrust Logo" className=" p-6" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-2/3 flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
              <h4 className="font-medium mb-4">GET STARTED</h4>
              <ul className='space-y-4'>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Sitemap</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms and Condition</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
              <h4 className="font-bold mb-4">SUPPORT</h4>
              <ul className='space-y-4'>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
              <h4 className="font-bold mb-4">CONTACT INFO</h4>
              <div className='space-y-4'>
                <ul className='flex space-x-4'>
                  <li className='text-lg'><AiFillMail /></li>
                  <li>info@famtrust.com</li>
                </ul>
                <ul className='flex space-x-4'>
                  <li className='text-lg'><FaPhone /></li>
                  <li>202-221-4876</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links and Social Icons */}
      <div className="border-t border-blue-500 mt-8 ml-auto pt-4 text-center text-sm flex lg:space-x-96 pl-24">
        <div className="flex space-x-4">
          {/* social media icons  */}
          <a href="#" className="hover:text-gray-300"><IoLogoYoutube /></a>
          <a href="#" className="hover:text-gray-300"><FaXTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
        </div>
        <div className='text-right'>
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;