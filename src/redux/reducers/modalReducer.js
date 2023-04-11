import { SHOW_ADD_TO_LIBRARY_MODAL, HIDE_ADD_TO_LIBRARY_MODAL, SHOW_CREATE_BOOK_MODAL, HIDE_CREATE_BOOK_MODAL, SHOW_DELETE_BOOK_MODAL, HIDE_DELETE_BOOK_MODAL } from "../actions/actionTypes";

const INITAL_STATE = {
    modalVisibility : {
        addToLibraryModal: false,
        createBookModal: false,
        deleteBookModal: false
    }
}

export const modalReducer =(state = INITAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ADD_TO_LIBRARY_MODAL:
            return {
                ...state,
                modalVisibility: {
                    ...state.modalVisibility,
                    addToLibraryModal : true
                }
            }
        case HIDE_ADD_TO_LIBRARY_MODAL:
            return {
                ...state,
                modalVisibility: {
                    ...state.modalVisibility,
                    addToLibraryModal : false
                }
            }
        case SHOW_CREATE_BOOK_MODAL:
            return {
                ...state,
                modalVisibility: {
                    ...state.modalVisibility,
                    createBookModal : true
                }
            }
        case HIDE_CREATE_BOOK_MODAL:
            return {
                ...state,
                modalVisibility: {
                    ...state.modalVisibility,
                    createBookModal : false
                }
            }
        case SHOW_DELETE_BOOK_MODAL:
            return {
                ...state,
                modalVisibility: {
                    ...state.modalVisibility,
                    deleteBookModal : true
                }
            }
        case HIDE_DELETE_BOOK_MODAL:
            return {
                ...state,
                modalVisibility: {
                    ...state.modalVisibility,
                    deleteBookModal : false
                }
            }
        default:
            return state;
    }
}