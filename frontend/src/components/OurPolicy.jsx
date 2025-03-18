import React from 'react'
import { assets } from '../assets/assets'
import { FaCreditCard } from "react-icons/fa";

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20  text-xs sm:text-sm md:text-base text-gray-700'>

            <div>
                <FaCreditCard className='w-12 h-12 m-auto mb-5' />
                <p className='font-semibold'>
                    Easy Financing Options
                </p>
                <p className='text-gray-400'>
                    Affordable EMI options to suit your budget.
                </p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>
                    Certified Quality Assurance
                </p>
                <p className='text-gray-400'>
                    All cars undergo rigorous quality checks to ensure top performance.
                </p>
            </div>

            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>
                    Expert Customer Support
                </p>
                <p className='text-gray-400'>
                    Our team is here to help you with any query.
                </p>
            </div>

        </div>
    )
}

export default OurPolicy