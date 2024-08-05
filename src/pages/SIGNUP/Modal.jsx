import React from 'react'
import Button from '../../components/Button'
import { Navigate, useNavigate } from 'react-router-dom'



const Modal = () => {
    const navigate = useNavigate()
    const ModalClick = () => {
        navigate("/login")
    }
  return (
    <div className='bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0'>
        <div className='text-white text-center px-4 py-4 border-[1px] border-b-zinc-500 my-2'>
            <p>Additonal information has been <br />successfully updated</p>
        </div>
        <Button onNext={ModalClick}>CLOSE</Button>
      
    </div>
  )
}

export default Modal
