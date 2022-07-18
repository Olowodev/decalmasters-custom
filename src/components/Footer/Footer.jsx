import React from 'react'
import { FaChevronCircleRight, FaInstagram, FaTiktok, FaWhatsapp, FaEtsy } from 'react-icons/fa'
import masterCard from '../../images/mastercard.png'
import visa from '../../images/visa.png'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footcontainer'>
                <div className='leftfoot'>
                    <h1>GET UPDATES ON</h1>
                     <h1 className='shift'>MORE CREATIVE AND</h1>
                      <h1>EXPRESSING DECALS</h1>
                    <div className='input'>
                        <input type='text' placeholder='Email address' />
                        <button><FaChevronCircleRight style={{fontSize:24}} /></button>
                    </div>
                    <div className='payment'>
                        <div>
                            <img src={masterCard} />
                        </div>
                        <div>
                            <img src={visa} />
                        </div>
                    </div>
                </div>
                <div className='rightfoot'>
                    <h1>Support</h1>
                    <div className='footlinks'>
                        <p><a href='#form'>Contact Form</a></p>
                    </div>
                    <div className='socials'>
                        <div>
                            <a href='https://www.instagram.com/thedecalmasters' target='_blank'><FaInstagram style={{fontSize:22}} /></a>
                        </div>
                        <div>
                            <a href='https://www.tiktok.com/@thedecalmasters' target='_blank'><FaTiktok style={{fontSize:22}}  /></a>
                        </div>
                        <div> 
                            <a href='https://wa.me/447450085724' target='_blank'><FaWhatsapp style={{fontSize:22}}  /></a>
                        </div>
                        <div>
                            <a href='https://www.etsy.com/uk/shop/TheDecalMasters' target='_blank'><FaEtsy style={{fontSize: 22}} /></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer