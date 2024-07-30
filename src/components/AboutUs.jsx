import React from 'react'
import about from '../assets/landingpageImages/about.png'
import mission from '../assets/landingpageImages/mission.png'

const AboutUs = () => {
  return (
    <div className='flex w-full  flex-col items-center justify-center gap-[100px] mt-24'>
        <div className='flex flex-col text-sm md:flex-row '>
            <div className='flex flex-col bg-white w-full 
            md:w-[650px] md:text-xl px-4 py-12 justify-center'>
                <h1 className='text-2xl pb-8 font-semibold md:text-4xl'>About FamTrust</h1>
                <p>FamTrust is dedicated to helping families 
                    achieve financial security and freedom. 
                    Our platform simplifies financial 
                    management, offering tools and resources 
                    tailored to your family's needs.</p>
            </div>
            <img src={about} alt="" className='w-full md:w-[650px]'/>
        </div>
        <div className='flex flex-col text-sm md:flex-row '>
            <div className='flex flex-col bg-white w-full 
            md:w-[650px] md:text-xl px-4 py-12 justify-center'>
                <h1 className='text-2xl pb-8 font-semibold md:text-4xl'>Mission</h1>
                <p>
                    Our mission is to provide families 
                    with the tools and knowledge to 
                    take control of their financial 
                    future by offering comprehensive 
                    financial education programs, 
                    developing accessible financial tools,
                     fostering a supportive community for 
                     shared experiences and advice, and 
                     continuously innovating to meet their
                      evolving financial needs.
                </p>
            </div>
            <div className=''>
            <img src={mission} alt=""
            className=''
            />
            </div>
        </div>
        
            <div>
            </div>
        </div>
  
  )
}

export default AboutUs