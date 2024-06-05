import React from 'react';
import '../stylesheets/NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <img src='./src/assets/logo-condinv.svg' alt='logo condinv' className='nav__logo'/>
      <ul className="nav__ul">
        <li className="nav__li">
            <a href="#" className="nav__a">
                <img src="src/assets/icon-instagram.svg" alt="icono de instagram" className="nav__icon" />
            </a>
        </li>
        <li className="nav__li">
            <a href="#" className="nav__a">
                <img src="src/assets/icon-whatsapp.svg" alt="icono de whatsapp" className="nav__icon" />
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
