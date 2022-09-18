import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Banner = () => {
    const [typingEffect, setTypingEffect] = useState(false)
    useEffect(() => {
        setTimeout(() => {
        setTypingEffect(!typingEffect)
      }, typingEffect ? 8000 : 1000)
    }, [typingEffect])
    

    return (
        <div>
            <div className="w-full h-screen bg-[url('images/sandro-katalina-k1bO_VTiZSs-unsplash.jpg')] bg-cover bg-center relative">
                <div className='w-full h-full bg-black/25 relative'>
                    <div className='container mx-auto sm:px-10 px-3'>
                        <nav className='flex w-full items-baseline flex-wrap p-2 justify-between mx-auto'>
                            <div>
                                <h1>
                                    <Link to="/" className='text-white text-[30px]'>Sinzo.prog</Link>
                                </h1>
                            </div>

                            <ul className='sm:flex hidden space-x-6 '>
                                <li>
                                    <Link to="#" className="text-white relative group">Home
                                        <div className="absolute left-2 w-2/3 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className='text-white relative group'>Contact
                                        <div className="absolute left-2 w-2/3 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className='flex items-baseline justify-between'>
                            <div className='text-white uppercase absolute left-[5%] bottom-[8%] leading-[70px]'>
                                <p className='lg:text-[50px] md:text-[30px] sm:text-[20px] text-[15px] '>i'm</p>
                                <h1 className="w-full lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold custom">sina zarrin</h1>
                                <h3 className={`${typingEffect ? ' lg:text-[40px] md:text-[30px] sm:text-[20px] text-[15px] font-medium overflow-x-hidden whitespace-nowrap typewriter mt-2' : ' text-[40px] font-medium overflow-x-hidden whitespace-nowrap opacity-0 mt-2'} `}>i love front-end develope ...</h3>
                            </div>
                        </div>

                        <div className='text-white absolute right-[5%] bottom-[10%]'>
                            <a href="https://www.instagram.com/sina_zch.pv/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 flex flex-col mt-2 font-thin" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/#inbox">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 flex flex-col mt-2 font-thin" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            </a>
                            <a href="https://github.com/sinazarrin">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 flex flex-col mt-2 font-thin" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner