import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import './Menu.scss'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <a href='https://jonathanmagliano.github.io/johntor' className='menu__logo'>JohnTor</a>
      <Navbar className='menu__links'>
        <NavItem className='menu__links__logo'>
          <a href='https://jonathanmagliano.github.io/johntor'>JohnTor</a>
        </NavItem>
        <NavItem className='menu__links__item'>
          <Link data-toggle='collapse' data-target='.sidenav' to='/solucoes' onClick={closeMenu}>Soluções</Link>
        </NavItem>
        <NavItem className='menu__links__item'>
          <Link to='/sobre' onClick={closeMenu}>Sobre</Link>
        </NavItem>
      </Navbar>
    </div>
  );
};

export default Menu;