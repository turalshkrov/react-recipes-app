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

export const addToLibrary = (id) => {
    return {
        type: actionTypes.ADD_TO_LIBRARY,
        payload: { bookTitle, id }
    }
}

export const removeFromLibrary = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_LIBRARY,
        payload: { bookTitle, id }
    }
}

export const showModal = () => {
    return {
        type: actionTypes.SHOW_MODAL
    }
}

export const hideModal = () => {
    return {
        type: actionTypes.HiDE_MODAL
    }
}