import React from 'react'
import '@styles/contact.css'
import '@styles/about.css'
function about() {
  return (
    <div className='about-container bg-prim flex flex-wrap justify-center items-center'>
      <div className='about-box mt-28 flex flex-col md:flex-row bg-hglt'>
        <div className='w-full home-left md:w-3/5 md:h-full flex justify-center items-center  '>
          <img className='w-60 mt-10 md:w-80 ' src='./images/ownerDisplay.JPG'></img>
        </div>
        <div className='w-full mt-6 md:mt-0 md:w-3/5 md:h-full flex justify-start items-center flex-col md:item-start home-right  '>
          <h1 className='fon text-sec'>About me</h1>
            <p className='font-serif text-sec text-sm md:text-base overflow-scroll ' >Hey, I'm Parul
I love elevating personalization experience through calligraphy and hand engraving. I personalize items on many different surfaces either by hand-lettering or hand-engraving .<br/><br/>

Weaving my unique style of calligraphy into the personalization experience for your clients or guests, I leave a trail of appreciation that is high in sentimental value in my wake.<br/><br/>

High level of customer engagement, unforgettable sentimental value, unique personalized experience. These are my pillars.<br/><br/>

These are the clients I serve with my whole heart:<br/><br/>

Brands who are looking to make an impact on advancing customer relationships by adding a sentimental element to the event.<br/><br/>

Corporates who are looking to appreciate their employees for their hard work and loyalty with memorable and personalized gifts.<br/><br/>

Event planners and couples who love details and are looking to provide memorable guest experience on their special occasions (Wedding, Bridal shower, Birthday party, etc.)<br/><br/>

Thoughtful gifters who are looking to give someone a one-of-a-kind gift with sentimental value that the recipient will forever cherish.
          </p>
        </div>
      </div>
    </div>
  )
}

export default about