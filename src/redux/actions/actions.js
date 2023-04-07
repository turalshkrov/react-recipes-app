import * as actionTypes from './actionTypes';

export const createBook = (title) => {
    return {
        type: actionTypes.CREATE_BOOK,
        payload: title
    }
}

export const deleteBook = (title) => {
    return {
        type: actionTypes.DELETE_BOOK,
        payload: title
    }
}

export const addToLibrary = (bookTitle, id) => {
    return {
        type: actionTypes.ADD_TO_LIBRARY,
        payload: { bookTitle, id }
    }
}

export const removeFromLibrary = (bookTitle, id) => {
    return {
        type: actionTypes.REMOVE_FROM_LIBRARY,
        payload: { bookTitle, id }
    }
}

export const showAddToLIbraryModal = () => {
    return {
        type: actionTypes.SHOW_ADD_TO_LIBRARY_MODAL
    }
}

export const hideAddToLibraryModal = () => {
    return {
        type: actionTypes.HIDE_ADD_TO_LIBRARY_MODAL
    }
}

export const showCreateBookModal = () => {
    return {
        type: actionTypes.SHOW_CREATE_BOOK_MODAL
    }
}

export const hideCreateBookModal = () => {
    return {
        type: actionTypes.HIDE_CREATE_BOOK_MODAL
    }
}
