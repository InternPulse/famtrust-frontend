import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp } from "react-icons/md";

import { FaRegUserCircle } from "react-icons/fa";


import   { useState, useEffect } from 'react';
import { testimonialContent } from './testimonialData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

 
useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector('.testimonial-container');
      if (container) {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 768) {
          setCardWidth(container.offsetWidth);
        } else {
          setCardWidth(container.offsetWidth / 3);
        }
      }
    };
  
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonialContent.length ? 0 : prevIndex + 3
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(testimonialContent.length - 3, 0) : prevIndex - 3
    );
  };

  return (
    <div className="bg-purple-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
      <p className="text-center mb-8">Don&apos;t just take our word for it - see what our actual users have to say about their experience.</p>
      
      <div className="relative overflow-hidden testimonial-container">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {testimonialContent.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 px-2 w-[380px] h-[240px]" >
              <div className="bg-white rounded-lg flex flex-col shadow-md justify-between p-6 h-full">
                <p className="mb-4 text-sm">{testimonial.content}</p>
                <div className="flex items-center -mb-2">
                  <FaRegUserCircle className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button onClick={prevTestimonials} className="mx-2 p-2 bg-white rounded-full shadow">
          <MdOutlineKeyboardArrowUp size={30} className="-rotate-90"/>
        </button>
        <button onClick={nextTestimonials} className="mx-2 p-2 bg-white rounded-full shadow">
        <MdOutlineKeyboardArrowDown size={30} className="-rotate-90"/>

        </button>
      </div>
    </div>
  );
};

export default Testimonials;