import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/mainlogo.jpeg';
import navProfile from '../../assets/navprofile.webp';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src={navlogo} className='nav-logo'/>
        <p>BookWander</p>
        </div>
        <img src={navProfile} className='nav-profile'/>
        
    </div>
  )
}

export default Navbar