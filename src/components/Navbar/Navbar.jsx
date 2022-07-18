import React from 'react'
import logo from '../../images/logo.png'
import {FaInstagram, FaPhoneAlt, FaTiktok, FaWhatsapp, FaEtsy} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="bg-[#f1f1f1] navbar">
        <div className='flex justify-between items-center  mx-20 py-2 navbarCont'>
            <div>
                <img src={logo} width={70} alt='logo' />
            </div>
            <div className='rightNav flex items-center gap-8'>
                <div className='flex items-center gap-4'>
                    <FaPhoneAlt />
                    <p>+44 7459773774</p>
                </div>
                <a href='https://www.tiktok.com/@thedecalmasters' target='_blank' aria-label='tiktok'><FaTiktok size={30} /></a>
                <a href='https://www.instagram.com/thedecalmasters' target='_blank' aria-label='instagram'><FaInstagram size={30} /></a>
                <a href='https://wa.me/447450085724' target='_blank' aria-label='whatapp'><FaWhatsapp size={30} /></a>
                <a href='https://www.etsy.com/uk/shop/TheDecalMasters' target='_blank' aria-label='etsy'><FaEtsy size={30} /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar