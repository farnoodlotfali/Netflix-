import React, { useEffect, useState } from 'react';
import logo from './net.png';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className='nav__logo' src={logo} alt='netflix logo' />
      <img className='nav__avatar' src={logo} alt='netflix logo' />
    </div>
  );
}

export default Nav;
