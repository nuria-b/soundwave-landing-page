import React from 'react';
import logo from '../imagenes/logo.svg';

export default function Navbar() {
    return (
      <nav>
        <div>
            <img src={logo} alt='logo' id='logo'/>
            <a id='text-logo' className='menu' href='#Header'>Soundwave</a>
        </div>
        <div>
            <a className='menu' href='#Discover'>Discover</a>
            <a className='menu' href='#Join'>Join</a>
        </div>
      </nav>
    );
}
