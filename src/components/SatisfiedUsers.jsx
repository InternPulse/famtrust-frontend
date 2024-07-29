import React from 'react'

const SatisfiedUsers = () => {
  return (    
    <div className='w-full h-[208px] bg-hover-text flex justify-between items-center p-8 gap-[88px]'>
        <div className=' w-[160px] h-[160px] flex flex-col items-center justify-center'>
            <h2 className='font-semibold' >15k+</h2> <p className='text-sm'>Customer Service Points</p>
        </div>
        <div className=' w-[160px] h-[160px] flex flex-col items-center justify-center'>
            <h2 className='font-semibold' >75</h2> <p className='text-sm'>Countries Served</p>
        </div>
        <div className='bg-blue-400 ring-offset-8 ring-1 ring-gray   rounded-full w-[160px] h-[160px] flex flex-col items-center text-white justify-center'>
            <h2 className='font-semibold' >5m</h2> <p className='text-sm '>Satisfied Users</p>
        </div>
        <div className=' w-[160px] h-[160px] flex flex-col items-center justify-center'>
            <h2 className='font-semibold' >850+</h2> <p className='text-sm'>Financial Advisors</p>
        </div>
        <div className='w-[160px] h-[160px] flex flex-col items-center justify-center text-nowrap'>
            <h2 className='font-semibold' >300+</h2> <p className='text-sm'>Innovative Banking Solutions</p>
        </div>
    </div>
  )
}

export default SatisfiedUsers