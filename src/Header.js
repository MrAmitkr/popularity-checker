import React from 'react';
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
  return (
    <div className='header'>
       
        <IconButton>
        <AccountCircleIcon fontSize='large' className='header_icon'/>
        </IconButton>


        <img 
            className="header__logo"
            src='https://1000logos.net/wp-content/uploads/2020/09/Naruto-Logo.png'
            alt=''
        />

<IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>

     
    </div>
  )
}

export default Header