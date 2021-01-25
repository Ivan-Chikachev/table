import { combineReducers, createStore } from "redux";
import paginationReducer from "./pagination-reducer";
import tableReducer from "./table-reducer";
import searchReducer from "./search-reducer";
import newPersonReducer from "./newPerson-reducer";

let reducer = combineReducers({
    tablePage: tableReducer,
    pagination: paginationReducer,
    search: searchReducer,
    newPerson: newPersonReducer
});

let store = createStore(reducer);

window.store = store;

export default store;
