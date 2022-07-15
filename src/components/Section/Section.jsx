import React from 'react'

const Section = ({bg, reverse, title, image}) => {
  return (
    <div className={bg}>
      <div className={reverse ? `flex items-center justify-center mx-36 py-16 flex-row-reverse gap-16` : `flex items-center justify-center mx-36 py-16 gap-16`}>
        <div className='flex flex-col items-start gap-4 text-white'>
          <h1 className='text-5xl'>{title}</h1>
          <p className={reverse ? 'max-w-6xl' : null}>Culpa aliquip consequat deserunt adipisicing aliquip tempor id sint labore laboris. Velit occaecat ullamco anim laboris deserunt exercitation esse deserunt ipsum. In excepteur non voluptate ex non fugiat pariatur velit ullamco. Sunt quis in ut laboris pariatur mollit labore sunt veniam consectetur amet do. Sit esse cupidatat excepteur excepteur eu voluptate ea qui qui anim veniam. Excepteur proident irure dolor mollit ea.</p>
          <a href='#form' className='bg-white text-slate-800 px-8 py-3 border border-white hover:bg-transparent cursor-pointer hover:text-white'>GET YOURS</a>
        </div>
        <div>
          <img src={image}/>
        </div>
      </div>
    </div>
  )
}

export default Section