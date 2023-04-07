import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { showCreateBookModal } from '../../redux/actions/actions';
import Navbar from '../../components/navbar/navbar';
import CreateBookModal from '../../components/createBookModal/createBookModal';
import './library.css';

export default function Library() {
  const dispatch = useDispatch();
  const createBookModal = useSelector(state => state.modalReducer.modalVisibility.createBookModal);

  const handleShowModal = () => {
    dispatch(showCreateBookModal());
  }

  return (
    <div className='page'>
      {
        createBookModal ? <CreateBookModal /> 
          : null
      }
      <Navbar />
      <main>
        <h1>Your Library</h1>
        <div className="library-book-list">
          <div className="library-create-book">
            <div className="library-create-book-button" onClick={handleShowModal}>
              <div className="create-book-icon">
                <FontAwesomeIcon icon={faPlus}/>
              </div>
              <p>Create Book</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
