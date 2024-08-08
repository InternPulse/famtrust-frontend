import React from 'react'
import Button from '../../components/Button';
import { useState } from 'react';
import ModalCreateNewSub from './ModalCreateNewSub';

const SuBAcctCreation = () => {
    const [createNext, setCreateNext] = useState(null)
    const [show, setShow] = useState(false)
    const CreateNext = ()=>{
        setCreateNext((prev) => prev + 1);
        setShow(true)
        
    }
  return (
    <div>
      <Button onNext={CreateNext}>Create New Sub-Account</Button>
      <div>
      {createNext === 1 && <ModalCreateNewSub setShow={setShow}/>}
      </div>
    </div>
       
   
  )
}

export default SuBAcctCreation
