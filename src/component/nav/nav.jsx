import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'> <AiOutlineHome className='object'/> Home</Link></li>
        <li><Link to='about'> <AiOutlineUser className='object'/> About</Link></li>
        <li><Link to='experience'> <BiBook className='object'/> Experience</Link></li>
        <li><Link to='portfolio'> <RiServiceLine className='object'/> Portfolio</Link></li>
        <li><Link to='contact'> <BiMessageSquareDetail className='object'/> Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav