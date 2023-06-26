import React from 'react'
import '@styles/footer.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-sec font-sans text-prim flex flex-col items-center gap-20'>
      <h1 className='text-5xl mt-6'>Contacts</h1>
      <div className='flex w-3/4 h-10'>
        <div className='flex w-1/3 justify-center items-baseline text-lg h-10'><a className='soc-id' href='https://instagram.com/theperfectpen_?igshid=ZDc4ODBmNjlmNQ==' target='_blank'>Instagram</a></div>
        <div className='flex w-1/3 justify-center items-baseline text-lg h-10'>theperfectpen21@gmail.com</div>
        <div className='flex w-1/3 justify-center items-baseline text-lg h-10'>+91-9996774750</div>
      </div>
      <div className='flex w-40 justify-center items-baseline  h-10'><Link className='soc-id' href='#'>Terms of Services</Link></div>
    </footer>
  )
}

export default Footer