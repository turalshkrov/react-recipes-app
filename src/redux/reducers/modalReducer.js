import { SHOW_MODAL, HIDE_MODAL } from "../actions/actionTypes";

const INITAL_STATE = {
    showModal: false
}

export const modalReducer =(state = INITAL_STATE, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                showModal: false
            }
        default:
            return state;
    }
}