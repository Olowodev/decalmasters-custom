import React from 'react'
import {useForm} from 'react-hook-form'

const Form = () => {

    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data)
  return (
    <div id='form' className='bg-teal-600 py-16'>
        <div className='flex items-center justify-center'>
            <form id='contact-form' className='flex-col flex gap-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>
                    <label>Name</label>
                    <input className='px-3 py-2 focus:outline-0 w-[450px] rounded-lg' name='name' maxLength={30} aria-invalid={errors.name ? true : false} {...register("name", { required: true})} type='text' placeholder='Name' />
                    {errors.name && errors.name.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Name is required</small>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Email</label>
                    <input maxLength={1500} className='px-3 py-2 focus:outline-0 w-[450px] rounded-lg' name='email' aria-invalid={errors.email ? true : false} {...register("email", { required: true})} type='email' placeholder='Email' />
                    {errors.email && errors.email.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Email is required</small>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Mobile number</label>
                    <input className='px-3 py-2 focus:outline-0 w-[450px] rounded-lg' name='phone' aria-invalid={errors.phone ? true : false} {...register("phone", { required: true})} type='tel' placeholder='Mobile number' />
                    {errors.phone && errors.phone.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Mobile number is required</small>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Message</label>
                    <textarea className=' focus:outline-0 p-3 rounded-lg h-48' name='message' {...register("message", {required: true})} />
                    {errors.phone && errors.phone.type === 'required' && (
                        <small className='text-red-700 text-base' role='alert'>Enter a message</small>
                    )}
                </div>

                <input value='SUBMIT' className='bg-white self-start py-3 px-8 text-lg border-white cursor-pointer border hover:bg-transparent hover:text-white' type='submit' />
            </form>
        </div>
    </div>
  )
}

export default Form