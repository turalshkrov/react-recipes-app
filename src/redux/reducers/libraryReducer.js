import { CREATE_BOOK, DELETE_BOOK, ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from '../actions/actionTypes';

const INITAL_STATE = {
    library: JSON.parse(localStorage.getItem('library')) === null ? [] : JSON.parse(localStorage.getItem('library'))
}

export const libraryReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CREATE_BOOK:
            return {
                ...state,
                library: state.library.map(book => book.title).indexOf(action.payload) < 0 ? 
                    [...state.library, { title: action.payload, data: [] }] : [...state.library]
            }
        case DELETE_BOOK:
            return {
                ...state,
                library: [...state.library.filter(book => book.title !== action.payload)]
            }
        case ADD_TO_LIBRARY:
            return {
                ...state,
                library: state.library.map(book => book.title === action.payload.bookTitle ? {
                    ...book,
                    data: book.data.indexOf(action.payload.id) < 0 ? [...book.data, action.payload.id] : [...book.data]
                } : book)
            }
        case REMOVE_FROM_LIBRARY:
            return {
                ...state,
                library: state.library.map(book => book.title === action.payload.bookTitle ? {
                    ...book,
                    data: [...book.data.filter(id => id !== action.payload.id)]
                }: book)
            }
        default:
            return state;
    }
}