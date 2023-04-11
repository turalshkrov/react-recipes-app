import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideDeleteBookModal, deleteBook } from '../../redux/actions/actions';
import './deleteBookModal.css'

export default function DeleteBookModal(props) {
    const library = useSelector(state => state.libraryReducer.library);
    const dispatch = useDispatch();
    const { book } = props;
    
    const handleHideModal = (e) => {
        if (e.target.className === 'modal' || e.target.id === 'hide-delete-modal') {
            dispatch(hideDeleteBookModal());
        }
    }

    const handleDeleteBook =() => {
        dispatch(deleteBook(book));
        dispatch(hideDeleteBookModal())
    }

    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(library))
    }, [library]);

  return (
    <div className='modal' onClick={handleHideModal}>
        <div className="modal-content" id="delete-book-modal">
            <div className="delete-modal-title">
                <p>Delete from Library?</p>
            </div>
            <div className="delete-modal-content">
                <p>This will delete <b>{book}</b> from <b>Your Library</b></p>
            </div>
            <div className="delete-book-actions">
                <button 
                    className="modal-btn"
                    onClick={handleHideModal}
                    id="hide-delete-modal"
                    >
                    Cancel
                </button>
                <button 
                    className="modal-btn"
                    id='deletete-book'
                    onClick={handleDeleteBook}>
                    Delete
                </button>
            </div>
        </div>
    </div>
  )
}
