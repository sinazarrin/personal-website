import React, { useState } from 'react'


const MySkills = () => {
    const [skills, setSkills] = useState([
        { name: 'Html', limit: 90 },
        { name: 'Css', limit: 90 },
        { name: 'JavaScript', limit: 80 },
        { name: 'ReactJs', limit: 80 },
        { name: 'Redux', limit: 80 },
        { name: 'Tailwind', limit: 90 },
        { name: 'TypeScript', limit: 60 },
        { name: 'Scss', limit: 50 },
    ])

  return (
    <div className='flex juctify-center mt-20 bg-[#1B1B1B] '>
      <div className='container flex flex-col items-center sm:px-24 mx-auto my-44'>
        <div className='text-center '>
          <h4 className='text-violet-500 text-3xl  mb-6'>My Skills</h4>
          <h3 className='text-white tracking-[7px]'>WHAT I DO</h3>
          <div className='w-14 h-1 bg-violet-500 mb-10 mt-4 mx-auto'></div>
        </div>


        <div className='flex justify-center w-full mt-16 '>
          <div className=' flex flex-wrap justify-around'>
            {
              skills.map(item =>( 
                <div className="mb-8 sm:w-[500px] w-full">
                  <div class="flex justify-between mb-1">
                    <span class="sm:text-base text-sm font-medium text-blue-700 dark:text-white">{item.name}</span>
                    {/* <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span> */}
                  </div>
                  <div class=" bg-gray-200 rounded-md h-1 dark:bg-gray-700">
                    <div class="bg-violet-500 h-1 rounded-md" style={{ width: item.limit + '%' }}></div>
                  </div>
                </div>

              ))
            }
          </div>


        </div>
        <div className='flex justify-center sm:flex-row flex-col mt-16'>
            <a href='سینا_زرین.pdf' download>
              <button className="bg-white text-[#1b1b1b] sm:py-3.5 sm:px-9 py-2 px-6 sm:mb-0 mb-2 uppercase sm:text-[12px] text-[10px] tracking-[3px] sm:mr-10">Download Resume</button>
            </a>
          <button type="button" className="bg-violet-500 text-white sm:py-3.5 sm:px-9 py-2 px-6 sm:mb-0 mb-2 uppercase sm:text-[12px] text-[10px] tracking-[3px] ">Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default MySkills