import Image from 'next/image'
import React from 'react'
import LinkTag from '../Components/LinkTag'
import { MdOutlineArrowOutward } from "react-icons/md";
import MultiSpecialtyFocus from '../Components/MultiSpecialtyFocus';
import WhyChoose from '../Components/WhyChoose';
import CountryContent from '../Components/CountryContent';
import HeyDoctaJourney from '../Components/Journey';
import FocusOnHealth from '../Components/FocusOnHealth';
import FreeOpinionForm from '../Components/FreeOpinionForm';
import ContactUs from '../Components/ContactUs';

const page = () => {
  return (

    <>
      <div className='h-auto md:h-screen bg-[radial-gradient(circle_at_85%_15%,rgba(120,190,255,0.35)_0%,rgba(120,190,255,0.18)_25%,transparent_50%),radial-gradient(circle_at_10%_90%,rgba(120,190,255,0.25)_0%,transparent_45%),linear-gradient(135deg,#f4f6f8_0%,#edf2f6_45%,#e6edf5_100%)]'>
        <div className='container mx-auto'>
          <div className='py-6 md:py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
              <div className='mb-8 md:mb-0'>
                <p className='bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text uppercase text-[0.9rem] pb-8'>Est. 1974 · 48 hospitals · 21 countries</p>
                <h1 className='text-7xl pb-8'>World-class care, <span className=' bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'>gently</span>  delivered.
                </h1>

                <p className='text-[1.2rem] text-[#54657a] pb-8'>A global network of award-winning physicians, quiet hospitals, and evidence-based medicine — built around the patient, wherever they are in the world.
                </p>

                <div className='flex gap-4'>

                  <LinkTag href="/" icon={<MdOutlineArrowOutward />} text="Find your specialist" />
                  <LinkTag href="/" text="Explore specialties" style="bg-white text-black" />
                </div>

                <div className='pt-10 md:pt-28 flex gap-8'>
                  <div>
                    <p className='pb-1 uppercase text-[0.8rem]'>Patients / yr</p>
                    <p className='font-semibold text-2xl bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> 2.4M+
                    </p>
                  </div>

                  <div>
                    <p className='pb-1 uppercase text-[0.8rem]'>Specialists</p>
                    <p className='font-semibold text-2xl bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'>1,800
                    </p>
                  </div>

                  <div>
                    <p className='pb-1 uppercase text-[0.8rem]'> Satisfaction</p>
                    <p className='font-semibold text-2xl bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text'> 98.6%</p>
                  </div>
                </div>
              </div>
              <FreeOpinionForm />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[radial-gradient(circle_at_85%_15%,rgba(120,190,255,0.35)_0%,rgba(120,190,255,0.18)_10%,transparent_50%),radial-gradient(circle_at_10%_90%,rgba(120,190,255,0.25)_0%,transparent_45%),linear-gradient(180deg,#f4f6f8_0%,#edf2f6_80%,#e6edf5_100%)]'>
        <MultiSpecialtyFocus />

        <WhyChoose />

        <HeyDoctaJourney />


        <CountryContent />

        <FocusOnHealth />

        <ContactUs />

      </div>


    </>

  )
}

export default page