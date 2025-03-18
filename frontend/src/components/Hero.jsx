import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-400">
            {/* LEFT SIDE */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="font-medium text-sm md:text-base">FIND YOUR RIGHT CAR</p>
                    </div>
                    <h1 className="playfair-display text-3xl sm:py-3 lg:text-5xl leading-relaxed">Great Deals & Offers</h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base">BUY NOW</p>
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    </div>
                </div>
            </div>
            {/* RIGHT SIDE */}
            <img className="w-full sm:w-1/2" src='https://i.pinimg.com/736x/c0/54/de/c054de81843506eee90523a4fac59196.jpg' />
        </div>
    )
}

export default Hero