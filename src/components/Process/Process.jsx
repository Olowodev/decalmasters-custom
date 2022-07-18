import React from 'react'
import './Process.css'

const Process = () => {
  return (
    <div className='py-16 bg-slate-800 text-white'>
        <div className='flex mx-56 processCont flex-col justify-center gap-10'>
            <h1 className='text-6xl text-center'>Our Design Process</h1>
            <p className='text-center text-2xl'>We aim to deliver your custom designs perfectly and as fast as possible be it wall decals, car stickers, shirt branding and so on.</p>
            <div className='flex flex-col gap-10'>
                <div className='flex processRow justify-between'>
                    <div className='flex flex-col items-center gap-8'>
                        <div className='border-4 rounded-[50%] text-5xl px-14 py-10'><p>1</p></div>
                        <h3 className='text-2xl'>FILL IN THE FORM BELOW</h3>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                        <div className='border-4 rounded-[50%] text-5xl px-14 py-10'><p>2</p></div>
                        <h3 className='text-2xl'>WE CONTACT YOU</h3>
                    </div>
                </div>
                <div className='self-center flex flex-col items-center gap-8'>
                    <div className='border-4 rounded-[50%] text-5xl px-14 py-10'><p>3</p></div>
                    <h3 className='text-2xl'>WE DELIVER YOUR DECAL AND VINYL STICKERS</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process