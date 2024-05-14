import {combineReducers, createStore} from "redux";
import patternReducer from "./patternReducer";


let reducers = combineReducers({
    page : patternReducer
})

let store  = createStore(reducers)

export default store;
