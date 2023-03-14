import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass, faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <h2>Recipes</h2>
        </div>
      <nav>
        <NavLink to='/'><FontAwesomeIcon icon={faHome}/><p className='nav-menu-link-text'>Home</p></NavLink>
        <NavLink to='/search'><FontAwesomeIcon icon={faMagnifyingGlass}/><p className='nav-menu-link-text'>Search</p></NavLink>
        <NavLink to='/library'><FontAwesomeIcon icon={faBookmark}/><p className='nav-menu-link-text'>Library</p></NavLink>
      </nav>
    </div>
  )
}
