import React from 'react'
import decal1 from '../../images/decal1.png'
import decal2 from '../../images/decal2.png'
import decal3 from '../../images/decal3.png'
import './Header.css'


const Header = () => {
  return (
    <div className='h-[85vh] header overflow-hidden relative flex items-center justify-center'>
        <div className='flex headWriteup items-center justify-center flex-col gap-3'>
            <h1 className='text-5xl max-w-2xl text-center font-bold'>CUSTOM DESIGNED DECAL AND VINYL STICKERS, BANNERS &amp; MORE</h1>
            <p className='text-2xl text-center'>Get your creative designs printed today.</p>
            <a href='#form' className='bg-[#15921a] border border-[#15921a] cursor-pointer hover:text-[#15921a] hover:bg-white hover:border px-5 py-3 text-3xl text-white mt-4'>Contact Us</a>
        </div>
        <div className='absolute headerImg img1 top-4 -left-24 rotate-[120deg]'>
            <img width={400} height={400} src={decal1} />
        </div>
        <div className='absolute top-4 headerImg img2 -right-24 -rotate-[120deg]'>
            <img width={400} height={400} src={decal2} />
        </div>
        <div className='absolute -bottom-52 img3'>
            <img width={600} height={600} src={decal3} />
        </div>
    </div>
  )
}

export default Header