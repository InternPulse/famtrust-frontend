
import imageright from "/heroright.png";


const Hero = () => {
  return (
    <div className='flex justify-between
     mt-4'>
      <div className='md:px-24 px-6 h-screen'>
        <h1 className='font-lato md:text-5xl text-4xl font-bold md:pt-11 pb-6 text-black text-'>Empower Your <br /> <span className='text-txtblue '>Familys Financial</span> <br /> Future</h1>
        <p className='font-lato md:text-xl text-[13px] font-semibold text-black '>Experience real-time alerts and streamline your family’s finances with FamTrust. Effortlessly manage all your family’s banking needs in one place.</p>
        <div className='md:py-8 py-16'>
            <button className='bg-bluey px-5 py-2 rounded-lg text-white'>Start Free Trial Today</button>
        </div>

      </div>
      <div className='w-[100%]'>
        <img src={imageright} alt="imageright" />
      </div>
    </div>
  )
}

export default Hero
