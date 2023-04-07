import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAddToLibraryModal, createBook, addToLibrary, removeFromLibrary } from '../../redux/actions/actions';
import './AddToLibraryModal.css';

export default function AddToLibraryModal(props) {
    const {
        id
    } = props

    const [ newBook, setNewBook ] = useState('');
    const library = useSelector(state => state.libraryReducer.library);
    const dispatch = useDispatch();

    const handleHideModal = (e) => {
        if (e.target.className === 'modal' || e.target.id === 'hide-modal') {
            dispatch(hideAddToLibraryModal());
        }
    }

    const handleChange = (e) => {
        setNewBook(e.target.value);
    }

    const handleCreateBook =() => {
        dispatch(createBook(newBook));
        setNewBook('');
    }

    const handleAddToBook = (e) => {
        const bookTitle = e.target.parentElement.firstElementChild.innerText;
        dispatch(addToLibrary(bookTitle, id));
        console.log(library);
    }

    const handleRemoveFromBook = (e) => {
        const bookTitle = e.target.parentElement.firstElementChild.innerText;
        dispatch(removeFromLibrary(bookTitle, id));
        console.log(library);
    }

    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(library))
    }, [library]);

    return (
        <div className='modal' onClick={handleHideModal}>
            <div className="modal-content">
                <div className="modal-title">
                    <p>Add to Library</p>
                </div>
                <div className="create-book-m">
                    <input 
                        type="text" 
                        placeholder='Create book'
                        value={newBook}
                        onChange={handleChange}
                        />
                </div>
                <button 
                    className="modal-btn"
                    id='create-book'
                    onClick={handleCreateBook}>
                    Create
                </button>
                <div className="book-list">
                    {
                        library.map(book => {
                            return(
                                <div className='book' key={book.title}>
                                    <p className="book-title">
                                        {book.title}
                                    </p>
                                    <button
                                        onClick={book.data.filter(currentId => currentId === id).length > 0 ? handleRemoveFromBook : handleAddToBook}
                                        className={book.data.filter(currentId => currentId == id).length > 0 ? "remove-from-book" : "add-to-book"}>
                                        {book.data.filter(currentId => currentId === id).length > 0 ? 'Remove' : 'Add'}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <button
                    onClick={handleHideModal}
                    id="hide-modal"
                    className="modal-btn">
                    OK
                </button>
            </div>
        </div>
    )
}
