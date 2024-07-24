import React from 'react'
import SubAccountCard from '../components/SubaccountCard'

const SubAccountList = () => {
  return (
    <div className='grid grid-cols-1 relative gap-4 lg:grid-cols-2'>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
        <SubAccountCard/>
        <div className='flex absolute  right-0 -bottom-16'>
            <button className='px-4 py-2  text-white rounded-md bg-add-sub-acc '>Add more</button>
        </div>
    </div>
  )
}

export default SubAccountList