import React from 'react'
import '@styles/contact.css'
function page() {
  return (
    <div className='contact-container flex justify-center items-center'>
      <div className='contact-box flex flex-col justify-start items-start md:flex-row bg-hglt text w-100 h-100'>
        <div className='w-full hidden md:w-2/5 home-left  md:flex justify-center items-center  '>
          <img className='w-60 ' src='./images/ownerDisplay2.JPG'></img>
        </div>
        <div className='w-full md:w-3/5 md:border md:border-sec flex md:justify-center flex-col items-center md:item-start home-right  '>
          <span className='text-4xl mt-5 mb-10'>Contact us</span>
          <form className=' '>
            <input type='text'></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page