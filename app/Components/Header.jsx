'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import LinkTag from './LinkTag';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='bg-gradient-hero sticky top-0 z-40 bg-[radial-gradient(circle_at_85%_15%,rgba(120,190,255,0.35)_0%,rgba(120,190,255,0.18)_25%,transparent_50%),radial-gradient(circle_at_10%_90%,rgba(120,190,255,0.25)_0%,transparent_45%),linear-gradient(135deg,#f4f6f8_0%,#edf2f6_45%,#e6edf5_100%)]'>
                <div className='container mx-auto '>
                    <div className='flex justify-between items-center'>
                        {/* Logo */}
                        <Link href="">
                            <Image 
                                src="/images/Sharn Healthcare.png" 
                                alt='Sharn Healthcare' 
                                width={100} 
                                height={100}
                                className='w-full h-full md:w-25 md:h-25 object-contain'
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className='hidden md:flex gap-10'>
                            <li><Link href="/" className='hover:text-blue-600 transition-colors'>Specialties</Link></li>
                            <li><Link href="/" className='hover:text-blue-600 transition-colors'>Global care</Link></li>
                            <li><Link href="/" className='hover:text-blue-600 transition-colors'>Contact</Link></li>
                        </ul>

                        {/* Desktop CTA Button */}
                        <div className='hidden md:block'>
                            <LinkTag href="/" icon={<MdOutlineArrowOutward />} text="Book consultation" />
                        </div>

                        {/* Hamburger Menu Button */}
                        <button 
                            onClick={toggleMenu}
                            className='md:hidden flex items-center text-2xl transition-transform duration-300'
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <HiX className='w-6 h-6 transition-transform duration-300 rotate-90' />
                            ) : (
                                <HiMenu className='w-6 h-6 transition-transform duration-300' />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
                            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <nav className='pt-4 pb-4 border-t border-blue-200 mt-4'>
                            <ul className='flex flex-col gap-4'>
                                <li>
                                    <Link 
                                        href="/" 
                                        className='block py-2 hover:text-blue-600 transition-colors'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Specialties
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/" 
                                        className='block py-2 hover:text-blue-600 transition-colors'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Global care
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/" 
                                        className='block py-2 hover:text-blue-600 transition-colors'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className='pt-2 border-t border-blue-200'>
                                    <LinkTag href="/" icon={<MdOutlineArrowOutward />} text="Book consultation" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header