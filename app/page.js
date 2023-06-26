import Display from '@Components/Display'
import Footer from '@Components/Footer'
import Home from '@Components/Home'
import { Navbar } from '@Components/Navbar'
export default function MainPage() {
  return (
    <main className="bg-prim text-sec">
      <Home/>
      <Display/>
    </main>
  )
}
