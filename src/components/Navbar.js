import React from 'react'
import  './navbar.css'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import dog from './img/dog.png'
import GroupIcon from '@mui/icons-material/Group';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Navbar = () => {
  return (
    <div>
    <div class="navbar">
    <a class="active" href="#"> Taco's Tacos</a> 
    <a href="#"> <StarBorderRoundedIcon/></a> 
    <a href="#"> <img src={dog} alt="Italian Trulli"></img></a> 
    <a href="#"> Taco & Co</a>

    <a href="#"> Free</a>
    <a href="#"> <GroupIcon></GroupIcon></a>

    <a href="#"> Team Visible</a>
    <div className='left_nav'>
    <a href="#" > <MoreHorizIcon/></a>
    <a href="#" > Show Menu</a></div>
    
  </div></div>
  )
}

export default Navbar