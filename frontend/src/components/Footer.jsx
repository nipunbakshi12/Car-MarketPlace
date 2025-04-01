import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <br /><br /><hr />
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
                <div>
                    <img src={assets.logo_2} className='mb-5 w-80' alt='Logo' />
                    <p className='w-full md:w-2/3'>
                        At Bhagwati Motors (Regd), we’re committed to offering you the best quality used cars and a hassle-free buying experience. Explore our wide range of certified pre-owned vehicles and drive home your dream car today!

                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1'>
                        <li>sales@bhagwaticars.com</li>
                        <li><a href="https://wa.me/9999226647" className="hover:underline">+91 9999226647</a></li>
                        {/* <li>+91 7777999963</li> */}
                        <li>
                            <a href="https://maps.app.goo.gl/Dp5VCVKxRu2CJDQd8" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                1017, Main Arya Samaj Road,<br />
                                Karol Bagh, New Delhi - 110005
                            </a>
                        </li>
                        {/* <li>1017, Main Arya Samaj Road,<br />
                            Karol Bagh, New Delhi - 110005</li> */}
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    Copyright 2025@www.bhagwaticars.com - All Rights Reserved
                </p>
            </div>


        </div>
    )
}

export default Footer