import React from 'react'
import { MdContentCopy } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";


const SubAccountCard = () => {
  return (
    <div className="w-96 shadow-xl bg-sidebar-bg rounded-[16px]">
    <div className='max-h-sm bg-white rounded-xl p-8'>
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
       <div className='pt-8'>
       <p className='text-gray text-sm'>Total Account</p>
        <div className='flex justify-between items-center'>
            <span className='text-lg font-bold text-hover-bg'>&#8358;1000</span>
           <span className='text-xs mb-4 text-up-arrow font-extrabold'>&#8593; 80.08%</span>
           <div className='flex items-center text-xs '>
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
    

export default SubAccountCard