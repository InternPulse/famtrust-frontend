import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=' flex flex-col gap-4 justify-center items-center'>
       <h1 className="text-3xl text-red-400">Oops!</h1>
       
<p className='text-xl'>404 Page Not Found</p>


<Link className='bg-blue-100 rounded-lg text-center w-28' to={'/'}> 
Return Home
</Link>

    </div>
  )
}

export default NotFound