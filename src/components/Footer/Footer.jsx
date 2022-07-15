import React from 'react'
import { FaChevronCircleRight, FaInstagram, FaFacebook } from 'react-icons/fa'
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
                        <FaChevronCircleRight style={{fontSize:24}} />
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
                        <p>Terms &#38; Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                        <p>Login</p>
                    </div>
                    <div className='socials'>
                        <div>
                            <FaInstagram style={{fontSize:22}} />
                        </div>
                        <div>
                            <FaFacebook style={{fontSize:22}}  />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer