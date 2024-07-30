import React from 'react'
import SubAccountCard from '../components/SubaccountCard'

const SubAccountList = () => {
  return (
    <div>
    <div className='grid grid-cols-1 p-8  gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2  '>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
    </div>
        <div className='flex justify-center px-12 md:justify-end'>
            <button className='px-8 py-2 text-white rounded-md bg-add-sub-acc '>Add more</button>
        </div>
    </div>
  )
}

export default SubAccountList