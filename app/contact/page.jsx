import ContactForm from '@Components/ContactForm';
// import React from 'react'
import '@styles/contact.css'
function page() {
  
  return (
    <div className='contact-container w-full min-h-[700px] md:h-[650px] bg-prim flex justify-center items-center'>
      <div className='contact-box flex w-[85%] md:w-[70%] md:h-[70%] flex-col justify-start items-start md:flex-row bg-hglt text-sec'>
        <div className='w-full hidden md:w-2/5 h-full home-left  md:flex justify-center items-center  '>
          <img className='w-60 ' src='./images/ownerDisplay2.JPG'></img>
        </div>
        <div className='w-full contact-page h-full md:h-full md:w-3/5 flex flex-col md:justify-start  items-center md:items-center home-right  '>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default page