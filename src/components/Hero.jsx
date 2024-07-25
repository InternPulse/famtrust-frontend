
import imageright from "/heroright.png";


const Hero = () => {
  return (
    <div className='md:flex ga
     mt-4  justify-between px-6'>
      <div className='md:px-24 px-6'>
        <h1 className='font-lato md:text-4xl text-4xl font-bold md:pt-11 pb-6 text-black text-'>Empower Your <span className='text-txtblue '>Family&apos;s Financial</span> Future</h1>
        <p className='font-lato md:text-xl text-[13px] font-semibold text-black '>Experience real-time alerts and streamline your family&apos;s finances with FamTrust. Effortlessly manage all your family’s banking needs in one place.</p>
        <div className='md:py-8 py-6'>
            <button className='bg-bluey px-5 py-2 rounded-lg text-white'>Start Free Trial Today</button>
        </div>

      </div>
      <div className='md:w-[2000px] md:mt-8 w-[100%]'>
        <img className="text-center mx-auto" src={imageright} alt="imageright" />
      </div>
    </div>
  )
}

export default Hero
