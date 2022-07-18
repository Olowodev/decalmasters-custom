import React from 'react'
import { FaChevronCircleRight, FaInstagram, FaTiktok, FaWhatsapp, FaEtsy } from 'react-icons/fa'
import masterCard from '../../images/mastercard.png'
import visa from '../../images/visa.png'
import './Footer.css'
import {useForm} from 'react-hook-form'
import { useRef } from 'react';
import {toast} from 'react-toastify'
import { useState } from 'react';
import {api} from '../../requestMethods'




const Footer = () => {

    const form = useRef()

    const [errorMessage, setErrorMessage] = useState('')

    const { register, handleSubmit, watch, formState: {errors}, reset } = useForm();

    const onChange = () => {
        setErrorMessage('')
    }

    async function onSubmit(data) {
        setErrorMessage('')
            try {
                const res = await api.post('/api/lead/', {email: data.email})
                if (res.status === 201) {
                    toast.success('SUBSCRIBED', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset()
                }
              } catch (err) {
                  if (err.response.status === 409 ) {
                    setErrorMessage('This email is already subscribed');
                  } 
                  toast.error('ENQUIRY NOT SENT', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                  console.log(err)
              } 

    }

  return (
    <div className='footer'>
        <div className='footcontainer'>
                <div className='leftfoot'>
                    <h1>GET UPDATES ON</h1>
                     <h1 className='shift'>MORE CREATIVE AND</h1>
                      <h1>EXPRESSING DECALS</h1>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className='input'>
                            <input onFocus={()=>onChange()} name='email' aria-invalid={errors.email ? true : false} {...register("email", { required: true})} type='email' placeholder='Email address' />
                            <button aria-label='send'><FaChevronCircleRight style={{fontSize:24}} /></button>
                        </div>
                        <span className='error text-red-700'>{errorMessage}</span>
                    {errors.email && errors.email.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Email is required</small>
                    )}
                    </form>
                    
                    <div className='payment'>
                        <div>
                            <img src={masterCard} alt='mastercard logo' />
                        </div>
                        <div>
                            <img src={visa} alt='visa logo' />
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
                            <a href='https://www.instagram.com/thedecalmasters' target='_blank' aria-label='instagram'><FaInstagram style={{fontSize:22}} /></a>
                        </div>
                        <div>
                            <a href='https://www.tiktok.com/@thedecalmasters' target='_blank' aria-label='tiktok'><FaTiktok style={{fontSize:22}}  /></a>
                        </div>
                        <div> 
                            <a href='https://wa.me/447450085724' target='_blank' aria-label='whatsapp'><FaWhatsapp style={{fontSize:22}}  /></a>
                        </div>
                        <div>
                            <a href='https://www.etsy.com/uk/shop/TheDecalMasters' target='_blank' aria-label='etsy'><FaEtsy style={{fontSize: 22}} /></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer