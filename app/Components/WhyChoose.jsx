import React from 'react'
import Image from 'next/image'
import { MdOutlineArrowOutward } from "react-icons/md";

import LinkTag from './LinkTag'

const WhyChoose = () => {

    const AboutPoints = [
        {
            id: "Aboutpoints1",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope h-5 w-5" aria-hidden="true"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>,
            heading: "Free Medical Opinion",
            content: "Share reports. Get a personalised treatment plan from top global specialists within 24 hours"
        },
        {
            id: "Aboutpoints2",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog h-5 w-5" aria-hidden="true"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg>,
            heading: "Dedicated Case Manager",
            content: "Your personal coordinator manages everything from arrival to discharge and follow-up."
        },
        {
            id: "Aboutpoints3",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign h-5 w-5" aria-hidden="true"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
            heading: "Transparent Pricing",
            content: "No hidden costs. Fixed treatment packages with the best value in the market."
        },
        {
            id: "Aboutpoints4",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane h-5 w-5" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>,
            heading: "End-to-End Support",
            content: "Visa, airport pickup, hotel accommodation, hospital admission — all handled for you."
        },
        {
            id: "Aboutpoints5",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>,
            heading: "100+ Expert Staff",
            content: "Professional, experienced staff ready to help you 24/7 in multiple languages."
        },
        {
            id: "Aboutpoints6",
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-5 w-5" aria-hidden="true"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>,
            heading: "48+ Partner Hospitals",
            content: "Partnering with JCI & NABH accredited institutions across 21 countries."
        }
    ]
    return (
        <>
            <div className='container py-10 md:py-20 mx-auto'>
                <div className='grid grid-cols-2 gap-36'>

                    <div className='flex  items-center justify-center'>
                        <Image
                            src="/images/hero-doctor.jpg"
                            alt="hero doctor"
                            width={500}
                            height={500}
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="w-full h-[550px] object-cover rounded-lg"
                            priority
                        />
                    </div>
                    <div>
                        <p className=' uppercase text-[0.9rem]  bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text pb-8'>Why Choose Us</p>
                        <h1 className='text-5xl leading-tight pb-8'>At Sharn, we go
                            <span className=' bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> beyond connecting you</span>  to hospitals.
                        </h1>

                        <p className='text-[1.2rem] text-[#54657a] pb-8'>From enquiry to treatment, we handle it all — reports, opinions, consults, hospitals, visa, travel and stay.  </p>

                        <div className='grid grid-cols-2 gap-4'>
                            {
                                AboutPoints.map((data) =>
                                    <div key={data.id} className='flex gap-4 '>
                                        <div className='border h-13 border-[#d6e0e7] flex justify-center items-center p-4 rounded-2xl bg-linear-to-l from-[#c2e4f8] to-[#e2f5ff]'>
                                            {data.svg}
                                        </div>

                                        <div>
                                            <h2 className='text-[1.2rem] pb-2 font-semibold'>{data.heading}</h2>
                                            <p className='text-[0.9rem] w-52'>{data.content}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <div className='flex mt-10 gap-4'>

                            <LinkTag href="/" icon={<MdOutlineArrowOutward />} text="Know More" />
                            <LinkTag href="/" text="About Sharn" style="bg-white bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text text-black" />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default WhyChoose