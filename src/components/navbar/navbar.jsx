import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass, faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { showCreateBookModal } from '../../redux/actions/actions';
import CreateBookModal from '../createBookModal/createBookModal';
import './navbar.css';

export default function Navbar() {
  const dispatch = useDispatch();
  const library = useSelector(state => state.libraryReducer.library);
  const createBookModal = useSelector(state => state.modalReducer.modalVisibility.createBookModal);

  const handleShowModal = () => {
    dispatch(showCreateBookModal());
  }

  return (
    <div className='navbar'>
      {
        createBookModal ? <CreateBookModal />
        : null
      }
        <div className="navbar-logo">
            <h2>Recipes</h2>
        </div>
      <nav>
        <NavLink to='/'><FontAwesomeIcon icon={faHome}/><p className='nav-menu-link-text'>Home</p></NavLink>
        <NavLink to='/search'><FontAwesomeIcon icon={faMagnifyingGlass}/><p className='nav-menu-link-text'>Search</p></NavLink>
        <NavLink to='/library'><FontAwesomeIcon icon={faBookmark}/><p className='nav-menu-link-text'>Library</p></NavLink>
      </nav>
      <div className="create-book">
        <div className="create-book-button" onClick={handleShowModal}>
          <FontAwesomeIcon icon={faPlus}/>
          <p>Create Book</p>
        </div>
      </div>
      <div className="book-links">
        {
          library.map(book => {
            return(
              <Link to={`/library/books/:${book.title}`} className='book-link' key={book.title}>{book.title}</Link>
            )
          })
        }
      </div>
    </div>
  )
}
