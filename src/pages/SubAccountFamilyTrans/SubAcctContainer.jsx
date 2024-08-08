// import React from 'react';
// import { useState } from 'react';
// import SubAcctfamTrans from './SubAcctfamTrans';
// import ModalCardDetails from './ModalCardDetails';
// import ModalConfirmTrans from './ModalConfirmTrans';
// import ModalFundWallet from './ModalFundWallet';
// import ModalSubAcct from './ModalSubAcct';
// import ModalSecurityVerify from './ModalSecurityVerify';
// import ModalTransDetail from './ModalTransDetail';
// import ModalVerification from './ModalVerification';
// import ModalTransType from './ModalTransType';
// import ModalWithdraw from './ModalWithdraw';
// import {useState} from 'react';
// import Button from '../../components/Button';

// const SubAcctContainer = () => {
//     const [increase, setIncrease] = useState(1)
//     const [show, setShow] = useState(false)
//     const OnSubmitHandler = ()=>{
//         setShow(true)
//     }
//     const onClickHandler = ()=>{
//         setIncrease((prev) => prev + 1);
//     }
//   return(
//     <div>
//         <div >
//             <Button>Initiate new transaction</Button>
//         </div>
//         {increase === 1 && <SubAcctfamTrans/>}
//         <ModalCardDetails/>
//         <ModalConfirmTrans/>
//         <ModalFundWallet/>
//         <ModalSecurityVerify/>
//         <ModalTransDetail/>
//         <ModalVerification/>
//         {increase === 2 && <ModalTransType/>}<ModalTransType/>
//         <ModalWithdraw/>
//         <ModalSubAcct/>
        
      
//     </div>
//   )
// }

// export default SubAcctContainer
