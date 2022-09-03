import React from 'react';
import './SwipeButton.css';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CancelIcon from '@mui/icons-material/Cancel';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import IconButton from '@mui/material/IconButton';



function SwipeButtons() {
  return (
    <div className='swipeButtons'>
    <IconButton className='swipeButtons__repeat'>
        <ReplayCircleFilledIcon fontSize="large"/>
    </IconButton>
    <IconButton className='swipeButtons__left'>
        <CancelIcon fontSize="large"/>
    </IconButton>
    <IconButton className='swipeButtons__star'>
        <StarsIcon fontSize="large"/>
    </IconButton>
    <IconButton className='swipeButtons__right'>
        <FavoriteIcon fontSize="large"/>
    </IconButton>
    <IconButton className='swipeButtons__lightning'>
        <OfflineBoltIcon  fontSize="large"/>
    </IconButton>

    
    
    </div>
  )
}

export default SwipeButtons