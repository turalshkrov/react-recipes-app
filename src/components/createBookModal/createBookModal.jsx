import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideCreateBookModal, createBook } from '../../redux/actions/actions';
import './createBookModal.css';

export default function CreateBookModal() {
    const library = useSelector(state => state.libraryReducer.library);
    const dispatch = useDispatch();
    const [ newBook, setNewBook ] = useState('');
    
    const handleHideModal = (e) => {
        if (e.target.className === 'modal' || e.target.id === 'hide-modal') {
            dispatch(hideCreateBookModal());
        }
    }

    const handleChange = (e) => {
        setNewBook(e.target.value);
    }

    const handleCreateBook =() => {
        if (newBook.length > 0) {
            dispatch(createBook(newBook));
            setNewBook('');
        }
        dispatch(hideCreateBookModal());
    }

    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(library))
    }, [library]);

  return (
    <div className='modal' onClick={handleHideModal}>
        <div className="modal-content" id="create-book-modal">
            <div className="modal-title">
                <p>Create Book</p>
            </div>
            <div className="create-book-m">
                <input 
                    type="text" 
                    placeholder='Create book'
                    value={newBook}
                    onChange={handleChange}
                />
            </div>
            <div className="create-book-actions">
                <button 
                    className="modal-btn"
                    onClick={handleHideModal}
                    id="hide-modal"
                    >
                    Cancel
                </button>
                <button 
                    className="modal-btn"
                    id='create-book'
                    onClick={handleCreateBook}>
                    Create
                </button>
            </div>
        </div>
    </div>
  )
}
