import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { RxHamburgerMenu } from "react-icons/rx"
import { CiSearch } from "react-icons/ci"

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { setShowSearch } = useContext(ShopContext)

    return (
        <div className='flex items-center justify-between py-4 font-medium'>
            <Link to='/'><img src={assets.logo_2} className='w-70' alt='' /></Link>
            <ul className='hidden sm:flex gap-4 text-l'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>

                <NavLink to='/reviews' className='flex flex-col items-center gap-1'>
                    <p>REVIEWS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <CiSearch onClick={() => setShowSearch(true)} className='w-6 h-6 cursor-pointer' />
                <RxHamburgerMenu onClick={() => setVisible(true)} className='w-6 h-6 cursor-pointer sm:hidden' />
            </div>

            {/* SIDE BAR MENU */}
            <div className={`absolute z-50 top-0 right-0 bottom-0 overflow-hidden bg-gray-900 transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-white' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-white' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-white' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-white' to='/contact'>CONTACT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border border-white' to='/reviews'>REVIEWS</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
