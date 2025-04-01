import React from 'react'
import { assets } from '../assets/assets'
import { FaCreditCard } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20  text-xs sm:text-sm md:text-base'>

            <div>
                <FaCreditCard className='w-12 h-12 m-auto mb-5' />
                <p className='font-semibold'>
                    Easy Financing Options
                </p>
                <p>
                    Affordable EMI options to suit your budget.
                </p>
            </div>

            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>
                    Certified Quality Assurance
                </p>
                <p>
                    All cars undergo rigorous quality checks to ensure top performance.
                </p>
            </div>

            <div>
                <FaHeadphonesAlt className='w-12 h-12 m-auto mb-5' />
                <p className='font-semibold'>
                    Expert Customer Support
                </p>
                <p>
                    Our team is here to help you with any query.
                </p>
            </div>

        </div>
    )
}

export default OurPolicy