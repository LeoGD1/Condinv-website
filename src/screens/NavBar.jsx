import React from 'react';
import '../stylesheets/NavBar.css';

const NavBar = ( {instagram, whatsapp} ) => {
  return (
    <nav className='nav'>
      <img src='./src/assets/logo-condinv.svg' alt='logo condinv' className='nav__logo'/>
      <ul className="nav__ul">
        <li className="nav__li">
            <a href={instagram} className="nav__a">
                <img src="src/assets/icon-instagram.svg" alt="icono de instagram" className="nav__icon" />
            </a>
        </li>
        <li className="nav__li">
            <a href={whatsapp} className="nav__a">
                <img src="src/assets/icon-whatsapp.svg" alt="icono de whatsapp" className="nav__icon" />
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
