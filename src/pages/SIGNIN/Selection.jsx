
// import { BiBullseye } from "react-icons/bi";
import Button from "../../components/Button"

const Selection = ({onClickHandler}) => {
  return (
    <div className="md:px-16 overflow-hidden px-6">
        <h1 className='text-txtblue text-center font-lato text-3xl font-bold py-4'>Make Selection</h1>
        <p className='text-center font-lato text-base font-normal py-3'>Select which contact detail should we use to send you a verification code.</p>
        <div className='flex align-top gap-4'>
          <input type="radio" name="radio" id="radio" />
          <div>
          <h1 className='font-lato text-sm font-bold'>SMS</h1>

          <p className='font-lato text-base font-normal'>Famtrust will send you a unique verification code to a phone number of your choice via SMS.</p>
          </div>
          

        </div>
        <div className='flex align-top gap-4'>
          <input type="radio" name="radio" id="radio" />
          <div>
          <h1 className='font-lato text-sm font-bold'>Email</h1>

          <p className='font-lato text-base font-normal'>Famtrust will send you a unique verification code to an E-mail of your choice via SMS.</p>
          </div>
          

        </div>
        <div>

        </div>
      
        
        <div className='pb-4' onClick={onClickHandler}>
        <Button>Continue</Button>
        </div>
      
    </div>
  )
}

export default Selection
{/* <div className='bg-white rounded-lg px-4 py-2 mt-1'>
<div className='flex gap-4 items-center'>
<BiBullseye className="" />
<h1 className='font-lato text-sm font-bold'>SMS</h1>
</div>
<p className='font-lato text-base font-normal'>Famtrust will send you a unique verification code to a phone number of your choice via SMS.</p>
</div>
<div className='bg-white rounded-lg my-4 px-4 py-2'>
<div className='flex gap-4 items-center'>
<BiBullseye className="" />
<h1 className='font-lato text-sm font-bold'>Email</h1>
</div>
<p className='font-lato text-base font-normal'>Famtrust will send you a unique verification code to an E-mail of your choice via SMS.</p>
</div> */}