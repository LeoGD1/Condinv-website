import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/NavBar.css';
import logo from '../assets/logo-condinv.svg';
import iconInstagram from '../assets/icon-instagram.svg';

const NavBar = ( {instagram} ) => {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo condinv' className='nav__logo'/>
      <ul className="nav__ul">
      <Link to='/Inicio'>
          <li className="nav__li">
            <a className="nav__a-page">Inicio</a>
          </li>
        </Link>
        <Link to='/Precios'>
          <li className="nav__li">
            <a className="nav__a-page">Precios</a>
          </li>
        </Link>
        <li className="nav__li">
            <a href={instagram} className="nav__a">
                <img src={iconInstagram} alt="icono de instagram" className="nav__icon" />
            </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
