import React from 'react'
import logo from '../../images/logo.png'
import {FaInstagram, FaPhoneAlt, FaTiktok, FaWhatsapp} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="bg-[#f1f1f1]">
        <div className='flex justify-between items-center  mx-24 py-2'>
            <div>
                <img src={logo} />
            </div>
            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-4'>
                    <FaPhoneAlt />
                    <p>+44 7459773774</p>
                </div>
                <FaTiktok size={30} />
                <FaInstagram size={30} />
                <FaWhatsapp size={30} />
            </div>
        </div>
    </div>
  )
}

export default Navbar