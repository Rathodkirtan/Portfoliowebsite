import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import About from './componets/About'
import Portfolio from './componets/Portfolio'
import Experiance from './componets/Experiance'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

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
