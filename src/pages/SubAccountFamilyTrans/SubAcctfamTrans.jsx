
import Button from '../../components/Button'
import ModalCardDetails from './ModalCardDetails'
import ModalConfirmTrans from './ModalConfirmTrans'
import ModalFundWallet from './ModalFundWallet'
import ModalOtherTrans from './ModalOtherTrans'
import ModalSecurityVerify from './ModalSecurityVerify'
import ModalSubAcct from './ModalSubAcct'
import ModalTransDetail from './ModalTransDetail'
import ModalTransType from './ModalTransType'
import ModalVerification from './ModalVerification'
import ModalWithdraw from './ModalWithdraw';
import { useState } from 'react'
import MoSubRequestFund from './MoSubRequestFund'
import MoSubTransType from './MoSubTransType'

const SubAcctfamTrans = () => {
    const[nextModal, setNextModal] = useState(null);
    const [show, setShow] = useState(false);
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setNextModal((prev) => prev + 1);
        setShow(true);
        console.log("submitted")
        
    }
  return (
    <div>
        <Button onNext={onSubmitHandler}>Initiate a family transaction</Button>
      <div>
        {/* {nextModal === 1 && <ModalCardDetails setShow={setShow}/>} */}
        {/* {nextModal === 1 && <ModalConfirmTrans setShow={setShow}/>} */}
        {/* {nextModal === 1 && <ModalFundWallet setShow={setShow}/>} */}
        {/* {nextModal === 1 && <ModalSecurityVerify setShow={setShow}/>} */}
        {/* {nextModal === 1 && <ModalSecurityVerify setShow={setShow}/>} */}
        {/* {nextModal === 1 && <MoSubTransType setShow={setShow}/>} */}
        {/* {nextModal === 1 && <MoSubRequestFund setShow={setShow}/>} */}
        {nextModal === 1 && <ModalOtherTrans setShow={setShow}/>}
        {nextModal === 5 && <ModalVerification setShow={setShow}/>}
        {nextModal === 2 && <ModalTransType setShow={setShow}/>}
        {/* {nextModal === 2 && <ModalWithdraw setShow={setShow}/>} */}
        {/* {<ModalSubAcct setShow={setShow}/>} */}
      


      </div>
    </div>
  )
}

export default SubAcctfamTrans
