import React from 'react';
import { Plane, Car, Hotel, Phone, MessageCircle, FileCheck, ArrowRight } from 'lucide-react';
import LinkTag from './LinkTag';
import { MdOutlineArrowOutward } from "react-icons/md";


export default function FocusOnHealth() {
    return (
        <div className="container mx-auto ">
            {/* Yellow asterisk top right */}

            {/* Main container */}
            <div className=" py-10 lg:py-20">

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* LEFT SECTION - 3 columns width */}
                    <div className="lg:col-span-3 space-y-8 lg:space-y-12">

                        {/* Header Label */}
                        <div>
                            <span className="bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text text-xs sm:text-sm font-bold tracking-widest uppercase">
                                — International Patient Center
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight tracking-tight">
                                Everything Arranged.
                            </h1>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light  bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text leading-tight">
                                You Just Focus on Health.
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-[#54657a] text-sm sm:text-base lg:text-base leading-relaxed max-w-md">
                            From the moment you contact us to returning home healthy — we handle every detail.
                        </p>

                        {/* Services Grid - 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 lg:pt-8">
                            {/* Service 1 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Plane size={60} className="text-black rounded-2xl p-4 bg-linear-to-l from-[#00b6e6] to-[#e2f5ff]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-sm lg:text-base">Visa Assistance</h3>
                                    <p className="text-[#54657a] text-xs lg:text-sm mt-1">Medical visa support</p>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Car size={60} className="text-black rounded-2xl p-4 bg-linear-to-l from-[#00b6e6] to-[#e2f5ff]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-sm lg:text-base">Airport Transfers</h3>
                                    <p className="text-[#54657a] text-xs lg:text-sm mt-1">All pickups arranged</p>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Hotel size={60} className="text-black rounded-2xl p-4 bg-linear-to-l from-[#00b6e6] to-[#e2f5ff]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-sm lg:text-base">Accommodation</h3>
                                    <p className="text-[#54657a] text-xs lg:text-sm mt-1">Near-hospital stays</p>
                                </div>
                            </div>

                            {/* Service 4 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <MessageCircle size={60} className="text-black rounded-2xl p-4 bg-linear-to-l from-[#00b6e6] to-[#e2f5ff]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-sm lg:text-base">Interpreter Services</h3>
                                    <p className="text-[#54657a] text-xs lg:text-sm mt-1">Arabic, French, Swahili</p>
                                </div>
                            </div>

                            {/* Service 5 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <Phone size={60} className="text-black rounded-2xl p-4 bg-linear-to-l from-[#00b6e6] to-[#e2f5ff]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-sm lg:text-base">24/7 Support</h3>
                                    <p className="text-[#54657a] text-xs lg:text-sm mt-1">Local SIM & helpline</p>
                                </div>
                            </div>

                            {/* Service 6 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <FileCheck size={60} className="text-black rounded-2xl p-4 bg-linear-to-l from-[#00b6e6] to-[#e2f5ff]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="text-black font-semibold text-sm lg:text-base">Post-Treatment Follow-up</h3>
                                    <p className="text-[#54657a] text-xs lg:text-sm mt-1">Recovery monitored at home</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION - 2 columns width */}
                    <div className="lg:col-span-2">
                        {/* Info Card */}
                        <div className="bg-linear-to-l from-[#58d9fd] to-[#58d9fd] backdrop-blur-sm  rounded-2xl p-8 lg:p-10 space-y-8 sticky top-24">

                            {/* Card Title */}
                            <h3 className="text-2xl lg:text-2xl font-bold text-black leading-tight">
                                Why India for Treatment?
                            </h3>

                            {/* Benefit 1 */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#2a4a66]/60 rounded-lg px-3 py-2 w-16 text-center">
                                        <span className="text-white font-bold text-base">80X</span>
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm">Lower Costs Than USA/UK</p>
                                        <p className="text-[#54657a] text-xs mt-0.5">Without compromise on quality</p>
                                    </div>
                                </div>
                            </div>

                            {/* Benefit 2 */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#2a4a66]/60 rounded-lg px-3 py-2 w-16 text-center">
                                        <span className="text-white font-bold text-base">500+</span>
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm">JCI/NABH Accredited Hospitals</p>
                                        <p className="text-[#54657a] text-xs mt-0.5">International quality standards</p>
                                    </div>
                                </div>
                            </div>

                            {/* Benefit 3 */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#2a4a66]/60 rounded-lg px-3 py-2 w-16 text-center">
                                        <span className="text-white font-bold text-base">#3</span>
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm">Medical Tourism Destination</p>
                                        <p className="text-[#54657a] text-xs mt-0.5">Globally ranked, most preferred</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}

                            <LinkTag href="/" icon={<MdOutlineArrowOutward />} text="Start My Jounary Today" />

                        </div>
                    </div>
                </div>
            </div>

    
        </div>
    );
}
