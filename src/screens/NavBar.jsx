import React from 'react';
import '../stylesheets/NavBar.css';
import logo from '../assets/logo-condinv.svg';
import iconInstagram from '../assets/icon-instagram.svg';
import iconWhatsapp from '../assets/icon-whatsapp.svg';

const NavBar = ( {instagram, whatsapp} ) => {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo condinv' className='nav__logo'/>
      <ul className="nav__ul">
        <li className="nav__li">
            <a href={instagram} className="nav__a">
                <img src={iconInstagram} alt="icono de instagram" className="nav__icon" />
            </a>
        </li>
        <li className="nav__li">
            <a href={whatsapp} className="nav__a">
                <img src={iconWhatsapp} alt="icono de whatsapp" className="nav__icon" />
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
