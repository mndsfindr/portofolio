import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsTelephoneFill} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://instagram.com' target="_blank"><FiInstagram></FiInstagram></a>
        <a href='https://telphonefill.com' target="_blank"><BsTelephoneFill></BsTelephoneFill></a>
        <a href='https://dribbble.com' target="_blank"><FiDribbble></FiDribbble></a>
    </div>
  )
}

export default HeaderSocials