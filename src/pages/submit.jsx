import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgArrowsScrollV } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FaRegCheckCircle } from 'react-icons/fa';

import { useState } from 'react';

const Submit = (search, setSearch) => {
  const okPush = (event) => {
    event.preventDefault();

    setSearch('');
  };

  return (
    <div>
      {/* <h2>jdjhdjdjhdjh</h2> */}
      <div className="flex items-center justify-between mx-6 py-6">
        <h2 className="text-xl font-semibold mr-6">
          <Link to="/">DashBoard</Link>
        </h2>
        <div className="flex items-center">
          <input
            className=" pl-2 border rounded-md w-full mr-2"
            type="text"
            placeholder="search"
          />
          <div>
            <img src="bell.svg" alt="" />
          </div>
          <div className="mx-1">
            <img src="./Profile.svg" alt="" />
            {/* <CgProfile />{' '} */}
          </div>
          <div>
            <img src="scroll-dwn.svg" alt="" />
            {/* <VscArrowSmallDown /> */}
          </div>
        </div>
      </div>
      <div className="bg-secondary-grey2 te m-6 p-1 rounded-lg p-4  ">
        <div className="flex justify-center text-center mt-4">
          <p className="animate-spi">
            <FaRegCheckCircle />
          </p>
        </div>
        <h2 className="lato-thin text-center text-primary-blue text-xl font-semibold m-6">
          Request Submited
        </h2>
        <p className="mx-2 text-left">
          Thank You for submitting your refund request. Your Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Perspiciatis, error
          consequuntur? Dolore minus sequi veritatis.
        </p>

        <ul className="my-4 ">
          <li className="list-disc list-inside ml-5">
            {' '}
            Requested Amount #500{' '}
          </li>
          <li className="list-disc list-inside ml-5">
            {' '}
            Reason for Request: School supplies and books{' '}
          </li>
        </ul>
        <p>
          if you have any question or need any assistance, please contact our
          support team at{' '}
          <a className='underline text-primary-blue hover:text-primary-red'  href="">support@farmtrust.com</a> or call 1-800-123-4567
        </p>
        <div className=" w-3/4 my-10 text-white rounded-xl p-3  text-center m-auto bg-blue-600 transition hover:scale-105">
          <button className=" ">
            <Link to="/">Back to DashBoard</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
