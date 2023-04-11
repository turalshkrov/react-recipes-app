import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHamburger, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { showCreateBookModal, showDeleteBookModal } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import CreateBookModal from '../../components/createBookModal/createBookModal';
import DeleteBookModal from '../../components/deleteBookModal/deleteBookModal';
import './library.css';

export default function Library() {
  const [ bookDelete, setBookDelete ] = useState(null);
  const dispatch = useDispatch();
  const library = useSelector(state => state.libraryReducer.library);
  const createBookModal = useSelector(state => state.modalReducer.modalVisibility.createBookModal);
  const deleteBookModal = useSelector(state => state.modalReducer.modalVisibility.deleteBookModal);

  const handleShowModal = () => {
    dispatch(showCreateBookModal());
  }

  const handleBookDelete = (book) => {
    setBookDelete(book);
    dispatch(showDeleteBookModal());
  }

  return (
    <div className='page'>
      {
        createBookModal ? <CreateBookModal /> 
          : null
      }
      {
        deleteBookModal ? <DeleteBookModal book={bookDelete}/>
          : null
      }
      <Navbar />
      <main>
        <section>
          <h1>Your Library</h1>
          <div className="library-main">
            <div className="library-create-book">
              <div className="library-create-book-button" onClick={handleShowModal}>
                <div className="create-book-icon">
                  <FontAwesomeIcon icon={faPlus}/>
                </div>
                <p>Create Book</p>
              </div>
            </div>
            <div className="library-book-list">
              {
                library.length > 0 && library.map((book, index) => {
                  return(
                    <div className="book-item" key={book.title}>
                      <div className='book-cover-icon'><FontAwesomeIcon icon={faHamburger}/></div>
                      <Link to={`/library/books/:${book.title}`} className='book-link'>
                        <p>{book.title}</p>
                      </Link>
                      <div className="book-action">
                        <div className="book-delete" onClick={() => handleBookDelete(book.title)}>
                          <FontAwesomeIcon icon={faTrashCan}/>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
