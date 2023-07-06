'use client'
import FloatingBar from '@Components/FloatingBar'
import Footer from '@Components/Footer'
import { Navbar } from '@Components/Navbar'
import Tos from '@Components/Tos'
import '@styles/globals.css'

import { Provider } from 'react-redux'
import store from '../store/store';

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export async function generateMetadata({params,searchParams}){
//   return {title:params}
// }

export const metadata = {
  title: 'theperfectpen - Home',
  description: 'The website is owned by Parul, who specializes in elevating personalization experiences through calligraphy and hand engraving. Parul offers personalized items on various surfaces, using hand-lettering or hand-engraving techniques. The focus is on creating a unique and sentimental value for clients or guests. The website serves several types of clients, including brands looking to enhance customer relationships, corporates seeking personalized gifts for their employees, event planners and couples aiming to provide memorable guest experiences, and thoughtful gifters who want to give unique and sentimental gifts. The services provided include handwritten letters, envelope addressing, place cards and tags, commissioned frame work, event signages, on-site activation, custom engraving, and also offer learning opportunities for hand engraving and copperplate calligraphy. The terms of service emphasize the need for accurate information, liability for delivery mistakes, and user responsibility when using the website. The conditions of sale and invitation of offer are also mentioned for product orders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Dancing+Script"/>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Courgette"/>
        <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Patrick+Hand"/>
      </head>
      <body className=''>
        <Provider store={store}>  
          <Navbar/>
          <FloatingBar></FloatingBar>
          <Tos />
          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  )
}
