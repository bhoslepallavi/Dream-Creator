import React from 'react';
import Nav from './Nav';

const Header = () => {

  
  return (
    <div className='main-header'>
        <img src="./images/logo.jpeg" alt="logo" className='logo' />

        <Nav />
    </div>
  )
}

export default Header