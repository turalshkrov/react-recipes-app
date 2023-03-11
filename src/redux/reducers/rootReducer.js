import { combineReducers } from "redux";
import { libraryReducer } from "./libraryReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
    libraryReducer, modalReducer
})

export default rootReducer;