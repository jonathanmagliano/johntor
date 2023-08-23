import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import './Menu.scss'

const Menu = () => (
    <div className='menu'>
        <a href='https://jonathanmagliano.github.io/johntor' className='menu__logo'>JohnTor</a>
        <Navbar className='menu__links'>
            <NavItem className='menu__links__logo'>
                <a href='https://jonathanmagliano.github.io/johntor'>JohnTor</a>
            </NavItem>
            <NavItem className='menu__links__item'>
                <Link data-toggle="collapse" data-target=".sidenav" to='/solucoes'>Soluções</Link>
            </NavItem>
            <NavItem className='menu__links__item'>
                <Link to='/sobre'>Sobre</Link>
            </NavItem>
        </Navbar>
    </div>
)

export default Menu