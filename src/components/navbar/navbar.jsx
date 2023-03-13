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
        <NavLink to='/'><FontAwesomeIcon icon={faHome}/> Home</NavLink>
        <NavLink to='/search'><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</NavLink>
        <NavLink to='/library'><FontAwesomeIcon icon={faBookmark}/> Your Library</NavLink>
      </nav>
    </div>
  )
}
