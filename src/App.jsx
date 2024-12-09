import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './componets/Navbar.jsx'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'
import Portfolio from './componets/Portfolio.jsx'
import Experiance from './componets/Experiance.jsx'
import Contact from './componets/Contact.jsx'
import Footer from './componets/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
