import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = ({benar}) => {
  const {name, setName} = benar
  const {siap, setSiap} = benar
  const {sapa, setSapa} = benar

function orang() {
  setName ("Amanda Sofie Indriani");
}
function kerja() {
  setSiap ("Rekayasa Perngkat Lunak")
}
function hai(){
  setSapa("HALLO")
}
  return (
    <header>
      <div className="container header__container">
        <div className='title'>
          <h5>{sapa}</h5>
          <h1>{name}</h1>
          <h5>{siap}</h5>
        </div>
        <button className='btn btn-primary' onClick={() => {hai(); orang(); kerja(); }}><i><b>TEKAN</b></i></button>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header