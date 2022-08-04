import React from 'react'
import './footer.css'
import {RiInstagramLine} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'

const footer = () => { 
return (
  <footer id='footer'>
    <a href='#' className='footer__logo'>AMANDA SOFIE INDRIANI SMKN 1 KOTA BEKASI</a>

    <div className='footer__social'>
      <a href="https://instagram.com/mndsff?igshid=YmMyMTA2M2Y=" target="_blank"><RiInstagramLine/></a>
      <a href="https://mail.google.com/" target="_blank"><MdEmail/></a>
      <a href="https://www.youtube.com/watch?v=qHNjROVkTiQ" target="_blank"><BsYoutube/></a>
    </div>

    <div className='footer__kopirek'>
      <small>&copy; Amanda Sofie Indriani<br/>All right reserved.</small>
    </div>
  </footer>
)
}

export default footer