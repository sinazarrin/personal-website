import React from 'react'
import AboutImage from '../../images/about-image.jfif'

const AboutMe = () => {
  return (
    <div className='container flex items-center flex-col bg-[#fff] mx-auto my-48'>
      <div className='text-center '>
        <h4 className='text-violet-500 text-3xl mb-6'>About Me</h4>
        <h3 className='text-[#1B1B1B] tracking-[7px] '>BIOGRAPHY</h3>
        <div className='w-14 h-1 bg-violet-500 mb-10 mt-4 mx-auto'></div>
      </div>
      <div>
        <img src={AboutImage} alt="amoo sina" className='w-40 h-40 rounded-full' />
      </div>
      <div>
        <p className='text-left px-24 text-lg mt-10'>Chuck  venison alcatra ham turducken  shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter brisket meatloaf short ribs frankfurter brisket meatloaf.  venison alcatra ham turducken short ribs frankfurter brisket meatloaf. shankle drumstick pancetta venison alcatra ham turducken short ribs frankfurter brisket meatloaf.</p>
      </div>
      <div className="flex justify-center mt-24">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>
      </div>
    </div>
  )
}

export default AboutMe