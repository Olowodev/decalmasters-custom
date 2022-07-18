import React from 'react'
import './Section.css'

const Section = ({bg, reverse, title, image, text}) => {
  return (
    <div className={`${bg} section`}>
      <div className={reverse ? `flex sectionCont items-center justify-center mx-36 py-16 flex-row-reverse gap-16` : `flex sectionCont items-center justify-center mx-36 py-16 gap-16`}>
        <div className='flex flex-col writeup items-start gap-4 text-white'>
          <h1 className='text-5xl'>{title}</h1>
          <p className={reverse ? 'max-w-6xl' : null}>{text}</p>
          <a href='#form' className='bg-white text-slate-800 px-8 py-3 border border-white hover:bg-transparent cursor-pointer hover:text-white'>GET YOURS</a>
        </div>
        <div className='sectionImg'>
          <img src={image}/>
        </div>
      </div>
    </div>
  )
}

export default Section