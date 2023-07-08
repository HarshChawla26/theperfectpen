import { Analytics } from '@vercel/analytics/react';

import FloatingBar from '@Components/FloatingBar'
import Footer from '@Components/Footer'
import { Navbar } from '@Components/Navbar'
import Tos from '@Components/Tos'

import '@styles/globals.css'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import ReduxProvider from '@redux/Prvidr'

// export async function generateMetadata({params,searchParams}){
//   return {title:params}
// }

export const metadata = {
  title: 'theperfectpen',
  description: 'The website is owned by Parul, who specializes in elevating personalization experiences through calligraphy and hand engraving. Parul offers personalized items on various surfaces, using hand-lettering or hand-engraving techniques. The focus is on creating a unique and sentimental value for clients or guests. The website serves several types of clients, including brands looking to enhance customer relationships, corporates seeking personalized gifts for their employees, event planners and couples aiming to provide memorable guest experiences, and thoughtful gifters who want to give unique and sentimental gifts.',
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
         <ReduxProvider>
            <Navbar/>
            <FloatingBar></FloatingBar>
            <Tos />
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              />
            <Footer />
            <Analytics />
         </ReduxProvider>
      </body>
    </html>
  )
}
