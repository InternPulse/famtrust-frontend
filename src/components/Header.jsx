import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logofarm.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickShow = () => {
    setShow((show) => !show);
  };
  const closeShow = ()=> {
    setShow(false)
  }
  return (
    <div className=" py-4">
      <div className=" flex justify-between items-center bg-blueyy md:px-24 px-6">
        <div>
          <NavLink className="flex gap-1 items-center" to="/">
            <img className="h-fit w-8" src={logo} alt="logo" />
            <p className="font-montesarrat text-base font-normal text-txtblue">
              famTrust
            </p>
          </NavLink>
        </div>
        <div onClick={clickShow}>
          {show ? (
            <FaTimes />
          ) : (
            <GiHamburgerMenu className="text-tx md:hidden" />
          )}
        </div>
        <div className="text-txtblue md:flex gap-5 hidden">
          <NavLink to="about">About Us</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="resources">Resources</NavLink>
          <NavLink to="help">Help & Support</NavLink>
        </div>
        <div className="md:flex gap-5 hidden">
          <NavLink className="bg-white text-txtblue border-solid border-[1px] border-blue-600  rounded-lg" to="login">
            <button className="px-5 py-2 ">Log In</button>
          </NavLink>
          <NavLink
            className="bg-bluey px-5 py-2 rounded-lg text-white"
            to="signup"
          >
            <button>Sign Up</button>
          </NavLink>
        </div>
      </div>
      <div className={`md:hidden flex flex-col text-center px-6 h-screen mt-4 transition-all py-4 bg-black text-white ${show ? "block" : "hidden"}`}>
        <div onClick={closeShow} className="flex flex-col py-6 ">
          <NavLink className="py-4" to="about">About Us</NavLink>
          <NavLink className="py-4" to="services">Services</NavLink>
          <NavLink className="py-4" to="resources">Resources</NavLink>
          <NavLink className="py-4" to="help">Help & Support</NavLink>
        </div>
        <div onClick={closeShow} className="flex flex-col py-4 ">
        <NavLink className="bg-white text-txtblue my-6 rounded-lg" to="login">
          <button className="px-3 py-4 ">Login</button>
        </NavLink>
        <NavLink className="bg-bluey px-3 py-4 rounded-lg text-white" to="signup">
          <button>Sign Up</button>
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
