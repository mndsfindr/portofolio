import { useState } from 'react'
import * as React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';

const array = [
    <ul>
      <li><Link to='/'> <AiOutlineHome className='object' /> Home</Link></li>
      <li><Link to='about'> <AiOutlineUser className='object' /> About</Link></li>
      <li><Link to='experience'> <BiBook className='object' /> Experience</Link></li>
      <li><Link to='portfolio'> <RiServiceLine className='object' /> Portfolio</Link></li>
      <li><Link to='contact'> <BiMessageSquareDetail className='object' /> Contact</Link></li>
    </ul>
];

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (<Box>
    <List>
      <ListItem divider>
         <ListItemButton onClick={() => setOpen(true)}>
          <ListItemIcon>{"="}</ListItemIcon>
          <ListItemText primary={"Menu"} />
        </ListItemButton> 
      </ListItem>
    </List>
    <Collapse in={open}>
      <List sx={{ width: 0, }}>
        {array?.map((listElm, index) => (
          <ListItem divider key={index}>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={listElm} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Collapse>
  </Box>)
}

export default Nav