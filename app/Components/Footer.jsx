import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";



export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                        <Link href="">
                            <Image src="/images/Sharn Healthcare.png" alt='Sharn Healthcare' width={100} height={100} />
                        </Link>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">India's trusted healthcare partner for international patients — connecting you with the finest doctors, hospitals and care.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"> <FaFacebook /> </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"><FaLinkedin /> </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"> <FaInstagram /></a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"><FaSquareWhatsapp className='text-green-600' /> </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-base font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Home</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">About Us</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Specialities</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Our Doctors</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Hospitals</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Medical Visa</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Blogs</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Treatments */}
                <div>
                    <h3 className="text-base font-semibold mb-6">Treatments</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Dental Care</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Dermatology</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Orthopedic</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Plastic Surgery</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Hematology</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Neurology</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Rhinology</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Ophthalmology</a></li>
                        <li><a href="#" className="text-slate-400 hover:text-white text-sm transition">Pulmonary</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-base font-semibold mb-6">Contact Us</h3>
                    <div className="space-y-5">
                        <div className="flex gap-3 text-sm">
                            <i className="ti ti-map-pin flex-shrink-0 text-cyan-400 mt-0.5"></i>
                            <span className="text-slate-400"> Delhi-NCR, India</span>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <i className="ti ti-phone flex-shrink-0 text-cyan-400 mt-0.5"></i>
                            <a href="tel:+919818560909" className="text-slate-400 hover:text-white transition">+91 9999999999</a>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <i className="ti ti-mail flex-shrink-0 text-cyan-400 mt-0.5"></i>
                            <a href="mailto:support@heydocta.com" className="text-slate-400 hover:text-white transition">support@sharn.com</a>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <i className="ti ti-message-circle-2 flex-shrink-0 text-cyan-400 mt-0.5"></i>
                            <span className="text-slate-400">WhatsApp — Available 24/7</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-slate-800 px-8 py-6 flex justify-between items-center">
                <p className="text-slate-500 text-xs">Copyright © 2025-26 Sharn · Healing With Care.</p>

            </div>
        </footer>
    );
}