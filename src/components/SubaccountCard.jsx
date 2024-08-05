import React from 'react'
import { MdContentCopy } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";


const SubAccountCard = () => {
  return (
    <div className="w-64 text-sm shadow-xl bg-sidebar-bg rounded-[16px] md:w-full  lg:w-full">
    <div className='bg-white h-[150px] rounded-xl p-4 '>
       <div className='flex'>
       <div>
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt='avatar'
            height={50}
            width={50}
            className='rounded-full'
            />
        </div>
            <div className='px-4'>
                <h2>Sharon Ishaku</h2>
                <p className='text-gray text-sm'>Sub Account</p>
            </div>
       </div>
       <div className='pt-2  '>
       <p className='text-gray text-sm'>Total Account</p>
        <div className='flex flex-col justify-start items-left md:flex md:flex-col'>
            <span className='text-lg font-bold text-hover-bg'>&#8358;1000</span>
           <span className='text-xs -my-2  text-up-arrow font-extrabold'>&#8593; 80.08%</span>
           <div className='flex flex-row -mt-2 justify-end items-center text-xs '>
            <span> 8327642732 </span>
            <div className='mx-2 text-hover-bg '>
            <MdContentCopy/>
            </div>
            <div className='text-hover-bg '>
            <CiShare2 />
            </div>

           </div>
        </div>
    </div>
    </div>
    
    <div className="flex p-4 rounded-[8px] bg-[#C0BDFF]  justify-center items-center text-center">
      <button className='bg-hover-text p-2 rounded-xl'> View </button>
    </div>
    
    </div>
)
}
    

export default SubAccountCard;