import Link from 'next/link'
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";


const LinkTag = ({ href, icon, text, style }) => {
    return (
        <Link href={href} className={`
  capitalize flex items-center gap-2 px-6 py-3  font-semibold rounded-3xl
  ${style
                ? style
                : "bg-linear-to-l from-[#00b6e6] to-[#002e73] text-white"
            }
`} >
            <span className='text-[0.9rem]'>{text}</span> {icon}
        </Link>
    )
}

export default LinkTag