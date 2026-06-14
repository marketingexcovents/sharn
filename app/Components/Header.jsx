import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import LinkTag from './LinkTag';


const Header = () => {
    return (

        <>

            <div className='bg-gradient-hero bg-[radial-gradient(circle_at_85%_15%,rgba(120,190,255,0.35)_0%,rgba(120,190,255,0.18)_25%,transparent_50%),radial-gradient(circle_at_10%_90%,rgba(120,190,255,0.25)_0%,transparent_45%),linear-gradient(135deg,#f4f6f8_0%,#edf2f6_45%,#e6edf5_100%)]'>
                <div className='container mx-auto py-4 '>
                    <div className='flex justify-between items-center'>
                        <Link href="">
                            <Image src="/images/Sharn Healthcare.png" alt='Sharn Healthcare' width={100} height={100} />
                        </Link>

                        <ul className='flex gap-10'>
                            <li><Link href="/">Specialties</Link></li>
                            <li><Link href="/">Global care </Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>

                        <LinkTag href="/" icon={<MdOutlineArrowOutward />} text="Book consultation" />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Header