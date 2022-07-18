import React from 'react'
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {api} from '../../requestMethods'
import {toast} from 'react-toastify'

import './Form.css'
import { useState } from 'react';

const Form = () => {

    const form = useRef()

    const [errorMessage, setErrorMessage] = useState('')
    const [ischecked, setChecked] = useState(false)

    const { register, handleSubmit, watch, formState: {errors}, reset } = useForm();
    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;

    const checkbox = () => {
        if (ischecked == false) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }  
    
    const onChange = () => {
        setErrorMessage('')
    }

    async function onSubmit(data) {
        setErrorMessage('')
        if (ischecked === true) {
            try {
                const res = await api.post('/api/lead/', {email: data.email})
                console.log(res)
                if (res.status === 201 ) {
                    emailjs.sendForm('service_ictjxj3', 'template_xi9vhpl', form.current, 'cLz3hQDmEbQo1n_H-')
                    .then((result) => {
                        console.log(result.text);
                        toast.success('ENQUIRY SENT', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        reset()    
                    }, (error) => {
                        console.log(error.text);
                    }
                );
                }
                
              } catch (err) {
                  if (err.response.status === 409 ) {
                    setErrorMessage('This email is already subscribed');
                  } 
                  console.log(err)
              } 
        } else {
            emailjs.sendForm('service_he1x9df', 'template_xi9vhpl', form.current, 'cLz3hQDmEbQo1n_H-')
                .then((result) => {
                    console.log(result.text);
                    toast.success('ENQUIRY SENT', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    reset()    
                }, (error) => {
                    console.log(error.text);
                }
            );
        }

    }

  return (
    <div id='form' className='bg-teal-600 py-16'>
        <div className='flex flex-col gap-8 formCont items-center justify-center'>
            <h1 className='text-center text-4xl font-black'>CUSTOM ORDER ENQUIRY</h1>
            <form ref={form} id='contact-form' className='flex-col flex gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>
                    <label>Name</label>
                    <input className='px-3 py-2 focus:outline-0 w-[450px] rounded-lg inputSpace' name='name' maxLength={30} aria-invalid={errors.name ? true : false} {...register("name", { required: true})} type='text' placeholder='Name' />
                    {errors.name && errors.name.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Name is required</small>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Email</label>
                    <input onFocus={()=>onChange()} className='px-3 emailinput py-2 focus:outline-0 w-[450px] rounded-lg inputSpace' name='email' aria-invalid={errors.email ? true : false} {...register("email", { required: true})} type='email' placeholder='Email' />
                    <span className='error text-red-700'>{errorMessage}</span>
                    {errors.email && errors.email.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Email is required</small>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Mobile number</label>
                    <input className='px-3 py-2 focus:outline-0 w-[450px] rounded-lg inputSpace' name='phone' aria-invalid={errors.phone ? true : false} {...register("phone", { required: true})} type='tel' placeholder='Mobile number' />
                    {errors.phone && errors.phone.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Mobile number is required</small>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='textarea'>Message</label>
                    <textarea maxLength={1500} id='textarea'  className=' focus:outline-0 p-3 rounded-lg h-48' name='message' aria-invalid={errors.message ? true : false} {...register("message", {required: true})} />
                    <div className='flex justify-between'>
                    {errors.message && errors.message.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Enter a message</small>
                    )}
                    <p className='text-right'>{messageCharsLeft}</p>
                    </div>
                    

                </div>

                <div className='flex items-center checkbox gap-2'>
                    <input className='cursor-pointer' checked={ischecked} onChange={()=>checkbox()}  id='check' type='checkbox' />
                    <label htmlFor='check' className='cursor-pointer' onClick={()=>checkbox()}>Subscribe to our newsletter for amazing design</label>
                </div>

                <input value='SUBMIT' className='mt-2 bg-white self-start py-3 px-8 text-lg border-white cursor-pointer border hover:bg-transparent hover:text-white' type='submit' />
            </form>

            <a className='text-2xl text-center underline hover:text-white cursor-pointer' href='https://www.etsy.com/uk/shop/TheDecalMasters' target='_blank'><p>Shop ready made designs at my ETSY shop</p></a>
        </div>
    </div>
  )
}

export default Form