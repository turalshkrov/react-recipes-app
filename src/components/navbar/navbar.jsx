import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <h2>Recipes</h2>
        </div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/library'>Library</NavLink>
      </nav>
    </div>
  )
}
