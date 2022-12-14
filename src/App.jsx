import React, { useState } from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Portfolio from './component/portfolio/portfolio'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  const [sapa, setSapa] = useState('')
  const [name, setName] = useState('SIAP?')
  const [siap, setSiap] = useState ('')

  const benar = {
    name, setName, siap, setSiap, sapa, setSapa
  }

  return (
    <Router>
    <>
       <Nav/>
       <Routes >
       <Route exact path='/' element={<Header benar={benar} />} />
       <Route exact path='/about' element={<About/>}/>
       <Route exact path='/experience' element={<Experience />} />
       <Route exact path='/portfolio' element={<Portfolio />} />
       <Route exact path='/contact' element={<Contact />} />
       </Routes>
       <Footer />
    </>
    </Router>
  )
}

export default App