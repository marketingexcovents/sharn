import React from 'react';

const HeyDoctaJourney = () => {
    const steps = [
        {
            id: 1,
            title: "Doctor's Opinion",
            description: "We review your reports and share a free expert opinion with Sharn trusted doctors.",
            icon: '👨‍⚕️'
        },
        {
            id: 2,
            title: "Treatment Planning",
            description: "We connect you with hospitals and create a personalised treatment plan.",
            icon: '📋'
        },
        {
            id: 3,
            title: "Get Treatment",
            description: "From visa to travel, airport pickup, stay and hospital care – we manage it all 24x7.",
            icon: '✈️'
        },
        {
            id: 4,
            title: "Follow Up Care",
            description: "Our support continues with follow-up consultations after you return home.",
            icon: '🔄'
        }
    ];

    return (
        <div className="relative ">

            {/* Main container */}
            <div className="flex flex-col items-center justify-center  py-10 md:py-20">
                {/* Eyebrow text */}
                <p className="bg-linear-to-l from-[#00b6e6] to-[#002e73] text-transparent bg-clip-text text-2xl mb-8 font-light">
                    From Opinion to Recovery
                </p>

                {/* Main heading */}
                <h1 className="text-5xl md:text-6xl font-semibold mb-16 text-center">
                    <span className="text-black">Your Journey</span>
                    <span className="text-black block md:inline md:ml-4">With Sharn</span>
                </h1>

                {/* Steps container */}
                <div className="w-full max-w-6xl">
                    {/* Connecting line - visible on desktop only */}
                    

                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        <div className="hidden lg:block absolute left-1/2 top-3/12 -translate-y-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-[#00b6e6] to-transparent transform -translate-x-1/2"></div>
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center">
                                {/* Circle icon */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-l from-[#00b6e6] to-[#e2f5ff] flex items-center justify-center shadow-lg relative z-10">
                                        <span className="text-4xl md:text-5xl">{step.icon}</span>
                                    </div>

                                    {/* Connecting dots for mobile/tablet */}
                                    {index < steps.length - 1 && (
                                        <div className="lg:hidden absolute -right-8 top-1/2 w-4 h-1 bg-teal-400 transform -translate-y-1/2"></div>
                                    )}
                                </div>

                                {/* Step content */}
                                <h3 className="text-xl font-semibold text-black text-center mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-center text-[#54657a] text-sm leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeyDoctaJourney;