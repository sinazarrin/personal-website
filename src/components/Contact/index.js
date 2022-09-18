import React from 'react'

const Contact = () => {
    return (
        <div className='flex juctify-center bg-white my-28'>
            <div className='container flex flex-col items-center sm:px-24 px-5 mx-auto my-28'>
                <div className='text-center '>
                    <h4 className='text-violet-500 text-3xl mb-6'>Contact</h4>
                    <h3 className='text-[#1B1B1B] tracking-[7px] leading-8'>I'AM READY FOR WORK, PLEASE CONTACT ME.</h3>
                    <div className='w-14 h-1 bg-violet-500 mb-10 mt-6 mx-auto'></div>
                </div>

                <div class="flex mt-12">
                    <button type="button" class="bg-[#1B1B1B] text-white py-5 px-9 uppercase text-[11px] tracking-[3px] shadow-2xl">sinazarin01@gmail.com</button>
                </div>

                <div className='w-full flex md:flex-row flex-col md:justify-around justify-center mt-28 md:mr-8 '>
                    <div className='flex flex-col items-center md:mb-0 mb-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-8" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <h3 className='my-2 tracking-[1px]'>Phone</h3>
                        <h4 className='text-gray-500'>0903 349 2560</h4>
                    </div>
                    <div className='flex flex-col items-center md:mb-0 mb-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-8" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        <h3 className='my-2 tracking-[1px]'>Email</h3>
                        <h4 className='text-gray-500'>sinazarin01@gmail.com</h4>
                    </div>
                    <div className='flex flex-col items-center md:mb-0 mb-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-16 h-8" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <h3 className='my-2 tracking-[1px]'>Address</h3>
                        <h4 className='text-gray-500'>Tehran</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact