import React from 'react';
import twitter from '../imagenes/twitter.svg';
import facebook from '../imagenes/facebook.svg';


export default function Footer() {
    
  return (
      <footer className='footer'>
        <div id='text-footer' >
            <a className='footer-text' href="#">About us</a>
            <a className='footer-text' href="#">Contact</a>
        </div>

        <div>
          <div className='redes-footer'>
            <img src={twitter} alt='twitter' id='twitter-img'/>
            <a className='footer-text twitter' href="#">Twitter</a>
          </div>
          <div className='redes-footer'>
          <img src={facebook} alt='facebook' id='facebook-img'/>
            <a className='footer-text facebook' href="#">Facebook</a>
          </div>
        </div>

      </footer>
    );
}

