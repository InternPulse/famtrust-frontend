import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from "/logofarm.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickShow = () => {
    setShow((show) => !show);
  };
  const closeShow = () => {
    setShow(false)
  }
  return (
    <div className={`py-4 ${clickShow && " overflow-hidden"} `}>
      <div className="flex justify-between items-center bg-blueyy md:px-24 px-6">
        <div>
          <NavLink className="flex gap-1 items-center" to="/">
            <img className="" src={logo} alt="logo" />
            {/* <p className="font-montesarrat text-2xl lg:text-4xl font-normal text-txtblue">
              famTrust
            </p> */}
          </NavLink>
        </div>
        <div onClick={clickShow}>
          {show ? (
            <FaTimes />
          ) : (
            <GiHamburgerMenu className="text-tx md:hidden text-2xl" />
          )}
        </div>
        <div className="text-txtblue md:flex gap-5 hidden font-semibold">
          <HashLink smooth to="#about">About Us</HashLink>
          <HashLink smooth to="#services">Services</HashLink>
          <HashLink smooth to="#resources">Resources</HashLink>
          <HashLink smooth to="#help">Help & Support</HashLink>
        </div>
        <div className="md:flex gap-5 hidden">
          <NavLink className="bg-white text-txtblue border-solid border-[1px] border-blue-600  rounded-lg" to="login">
            <button className="px-5 py-2 font-semibold">Log In</button>
          </NavLink>
          <NavLink
            className="bg-bluey px-5 py-2 rounded-lg text-white"
            to="signup"
          >
            <button className="font-semibold">Sign Up</button>
          </NavLink>
        </div>
      </div>
      <div className={`md:hidden flex flex-col text-center px-6 h-screen mt-4 transition-all py-4 bg-black text-white ${show ? "block" : "hidden"} font-semibold`}>
        <div onClick={closeShow} className="flex flex-col py-6">
          <HashLink smooth className="py-4" to="#about">About Us</HashLink>
          <HashLink smooth className="py-4" to="#services">Services</HashLink>
          <HashLink smooth className="py-4" to="#resources">Resources</HashLink>
          <HashLink smooth className="py-4" to="#help">Help & Support</HashLink>
        </div>
        <div onClick={closeShow} className="flex flex-col py-4 ">
          <NavLink className="bg-white text-txtblue my-6 rounded-lg" to="login">
            <button className="px-3 py-4 font-semibold">Login</button>
          </NavLink>
          <NavLink className="bg-bluey px-3 py-4 rounded-lg text-white" to="signup">
            <button className="font-semibold">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
