import Link from 'next/link'
import React from 'react'
function Home() {
  return (
    <section className='home flex-col-reverse md:flex-row'>
      <div className='home-left left'>
        <div className='pic-div-flex'>
          <div><img src={'./images/display1.jpg'} alt= 'Image1'/></div>
          <div><img src={'./images/display4.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display6.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display3.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display2.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display5.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display1.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display4.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display3.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display3.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display3.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display5.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display1.jpg'} alt='Image1'/></div>
          <div><img src={'./images/display1.jpg'} alt= 'Image1'/></div>
          <div><img src={'./images/display4.jpg'} alt='Image1'/></div>
        </div>
      </div>
      <div className='home-right right flex justify-center text-md items-center'>
        <div>
          <p>Unleash the power of personalization with exquisite calligraphy and hand engraving, creating cherished moments and unforgettable experiences.</p>
          <Link className='btn-prim-outline border border-sec rounded-md hover:bg-sec hover:text-prim' href='/services'>
            {/* <Link > */}
            Explore
            {/* </Link> */}
          </Link>
        </div>
        {/* <p>Unforgettable moments crafted with personalized artistry, leaving a lasting impression.</p> */}

      </div>
    </section>
  )
}

export default Home