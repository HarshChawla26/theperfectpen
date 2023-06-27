import React from 'react'
import '@styles/footer.css'
import Link from 'next/link'

function Footer({setshow}) {
  return (
    <footer className='bg-sec font-sans text-prim flex h-80 flex-col items-center gap-5 md:gap-16'>
      <h1 className='text-4xl md:text-5xl mt-6'>Contacts</h1>
      <div className='flex flex-col items-center md:flex-row w-3/4 h-44 gap-3 md:h-10'>
        <div className='flex w-1/2 md:w-1/3 justify-center items-baseline text-lg h-full md:h-10'><a className='soc-id' href='https://instagram.com/theperfectpen_?igshid=ZDc4ODBmNjlmNQ==' target='_blank'>Instagram</a></div>
        <div className='flex w-1/2 md:w-1/3 justify-center items-baseline text-lg h-full md:h-10'>theperfectpen21@gmail.com</div>
        <div className='flex w-1/2 md:w-1/3 justify-center items-baseline text-lg h-full md:h-10'>+91-9996774750</div>
      </div>
      <div className='flex w-3/4 justify-center items-baseline mb-4 h-10'><a role='button' onClick={()=>{setshow(true)}} className='soc-id'>Terms of Services</a></div>
    </footer>
  )
}

export default Footer