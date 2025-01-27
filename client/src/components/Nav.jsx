import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <div className='nav-bar'>
    <Link to='/'>Home</Link>
    <Link to='/destinations'>Destinations</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>

  </div>;
};

export default Nav;
