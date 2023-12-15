'use client'

import Link from 'next/link'
import React, {useState} from 'react'

export const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    const mobileMenuIcon = () =>{
        setMenuIcon(!menuIcon)
    }
  
    return (
        <header className='w-full sticky top-0 bg-black'>
            <nav className='flex justify-between py-4 px-8 lg:py-6 lg:px-24'>
                <div className='flex items-center'>
                    <a href='/'><img className='mr-6' src="logo2.png" alt="" width={130}/></a>
            {/* Desktop Nav Version */}
                    <ul className='hidden md:flex space-x-6'>
                        <li className='font-bold text-[#f1f1f1]'><a href='/products'>Shop</a></li>
                        <li className='font-bold text-[#f1f1f1]'><a>Support</a></li>
                        <li className='font-bold text-[#f1f1f1]'><a>Tracking</a></li>
                    </ul> 
                </div>

        {/*Mobile Nav Version */}
                <div onClick={ mobileMenuIcon } className='md:hidden'>
                    {menuIcon ? 
                    (                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) 
                    : 
                    (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )
                    }
                </div>

                <div className={menuIcon? 
                "md:hidden absolute top-[0px] right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#f1f1f1] ease-in duration-300" 
                : 
                "md:hidden absolute right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#f1f1f1] ease-in duration-300 text-center"}>

                    <div className='h-full flex justify-center items-center'>
                        <ul className='font-bold text-2xl space-y-6 mb-40'>
                            <li>
                                <Link href='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link href="/About">About</Link>
                            </li>
                            <li>
                                <Link href="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}
