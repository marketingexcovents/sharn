import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from 'next/image'

const CountryContent = () => {
    return (
        <div className='container mx-auto py-10 md:py-20'>
            <div className='grid grid-cols-2 gap-32 items-start'>
                {/* Image column */}
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

                {/* Content column */}
                <div>
                    <p className='bg-gradient-to-r from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text uppercase text-sm font-medium pb-6'>
                        Global care, local presence
                    </p>

                    <h1 className='text-4xl font-bold pb-6 leading-tight'>
                        A single medical record. Forty-eight hospitals. Twenty-one countries.
                    </h1>

                    <p className='text-base text-[#54657a] pb-8 leading-relaxed'>
                        Travel for a second opinion in Zurich, recover at home in Lagos, follow up by video from Tokyo. Your care follows you — quietly, securely, completely.
                    </p>

                    {/* Feature items */}
                    <div className='space-y-0'>
                        <div className='flex items-start justify-between border-b border-[#d6e0e7] py-6 gap-4'>
                            <div>
                                <h3 className='font-semibold text-base'>24/7 international concierge</h3>
                                <p className='text-sm text-[#54657a]'>Visa, transfer & translation handled</p>
                            </div>
                            <MdOutlineArrowOutward className='flex-shrink-0 mt-1' />
                        </div>

                        <div className='flex items-start justify-between border-b border-[#d6e0e7] py-6 gap-4'>
                            <div>
                                <h3 className='font-semibold text-base'>Unified clinical records</h3>
                                <p className='text-sm text-[#54657a]'>Encrypted across every site</p>
                            </div>
                            <MdOutlineArrowOutward className='flex-shrink-0 mt-1' />
                        </div>

                        <div className='flex items-start justify-between border-b border-[#d6e0e7] py-6 gap-4'>
                            <div>
                                <h3 className='font-semibold text-base'>Outcomes published annually</h3>
                                <p className='text-sm text-[#54657a]'>Audited by independent boards</p>
                            </div>
                            <MdOutlineArrowOutward className='flex-shrink-0 mt-1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryContent