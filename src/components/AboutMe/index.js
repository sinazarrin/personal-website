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
        <div className="w-3/4 text-left mt-12">
          <h3 className='font-semibold text-3xl mb-5'>Get to know me!</h3>
          <p className='text-lg'>I like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
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