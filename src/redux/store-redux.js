import {applyMiddleware, combineReducers, createStore } from "redux";
import paginationReducer from "./pagination-reducer";
import tableReducer from "./table-reducer";
import searchReducer from "./search-reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

let reducer = combineReducers({
    tablePage: tableReducer,
    pagination: paginationReducer,
    search: searchReducer,
    form: formReducer,
});

let store = createStore(reducer,  applyMiddleware(thunk));

window.store = store;

export default store;
