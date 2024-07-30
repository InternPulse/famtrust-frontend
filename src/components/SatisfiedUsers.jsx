import React from 'react'

const SatisfiedUsers = () => {
  return (    
    <div className='max-w-full h-[120px] bg-hover-text flex text-xs justify-between items-center  gap-[10px] lg:text-2xl md:px-[120px] md:h-[160px] '>
        <div className=' w-[160px] h-[160px] flex flex-col items-center justify-center md:text-lg md:text-nowrap'>
            <h2 className='font-semibold' >15k+</h2> <p className='text-xs text-center md:text-lg'>Customer Service Points</p>
        </div>
        <div className=' w-[160px] h-[160px] flex flex-col items-center justify-center md:text-lg'>
            <h2 className='font-semibold' >75</h2> <p className='text-xs text-center md:text-lg'>Countries Served</p>
        </div>
        <div className='bg-hover-bg ring-offset-8 ring-1 ring-slate-200 rounded-full  p-4 flex flex-col items-center text-white 
        justify-center md:rounded-full md:h-[140px] md:w-[140px] md:text-lg md:text-nowrap'>
            <h2 className='font-semibold' >5m</h2> <p className='text-xs text-center md:text-lg'>Satisfied Users</p>
        </div>
        <div className='w-[160px] h-[160px] flex flex-col items-center justify-center text-center md:text-lg'>
            <h2 className='font-semibold' >850+</h2> <p className='text-xs md:text-lg'>Financial Advisors</p>
        </div>
        <div className='w-[160px] h-[160px] flex flex-col items-center justify-center text-center md:text-lg'>
            <h2 className='font-semibold' >300+</h2> <p className='text-xs md:text-lg '>Innovative Banking Solutions</p>
        </div>
    </div>
  )
}

export default SatisfiedUsers