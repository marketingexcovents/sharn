import { MdOutlineArrowOutward } from "react-icons/md";

import React from 'react'
import FreeOpinionForm from './FreeOpinionForm'
import LinkTag from './LinkTag'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";




const ContactUs = () => {
    return (
        <>
            <div className='h-screen bg-[radial-gradient(circle_at_85%_15%,rgba(120,190,255,0.35)_0%,rgba(120,190,255,0.18)_25%,transparent_50%),radial-gradient(circle_at_10%_90%,rgba(120,190,255,0.25)_0%,transparent_45%),linear-gradient(135deg,#f4f6f8_0%,#edf2f6_45%,#e6edf5_100%)]'>
                <div className='container mx-auto'>
                    <div className='py-6 md:py-20'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <p className='bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text uppercase text-[0.9rem] pb-8'>Don't Hesitate to Contact Us

                                </p>
                                <h1 className='text-5xl pb-8'>Looking for  <span className=' bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'>Trusted Doctors & World-Class Healthcare</span>  in India?
                                </h1>

                                <p className='text-[1.2rem] text-[#54657a] pb-8'>Connect with Sharn today.


                                </p>

                                <div className='pt-4'>
                                    <div className="flex gap-4 items-center">
                                        <FaPhoneAlt className="w-10 h-10 rounded-2xl text-black bg-linear-to-l from-[#00b6e6] to-[#e2f5ff] flex items-center justify-center transition p-3" />
                                        <a href="tel:+919818560909" className='font-semibold text-[1.2rem] bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> +91 9818560909
                                        </a>
                                    </div>


                                    <div className="flex mt-4 gap-4 items-center">
                                        <IoMail className="w-10 h-10 rounded-2xl text-black bg-linear-to-l from-[#00b6e6] to-[#e2f5ff] flex items-center justify-center transition p-3" />
                                        <a href="mailto:support@heydocta.com" className='font-semibold text-[1.2rem] bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> support@heydocta.com
                                        </a>
                                    </div>


                                    <div className="flex mt-4 gap-4 items-center">
                                        <FaLocationDot className="w-10 h-10 rounded-2xl text-black bg-linear-to-l from-[#00b6e6] to-[#e2f5ff] flex items-center justify-center transition p-3" />
                                        <a  className='font-semibold text-[1.2rem] bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> Delhi-NCR, India
                                        </a>
                                    </div>


                                    <div className="flex mt-4 gap-4 items-center">
                                        <IoLogoWhatsapp className="w-10 h-10 rounded-2xl text-black bg-linear-to-l from-[#00b6e6] to-[#e2f5ff] flex items-center justify-center transition p-3" />
                                        <a href="+919818560909" className='font-semibold text-[1.2rem] bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> WhatsApp — Available 24/7
                                        </a>
                                    </div>


                                </div>
                            </div>
                            <FreeOpinionForm />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs