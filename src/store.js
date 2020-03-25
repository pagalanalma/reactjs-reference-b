import { createStore } from "redux";
import rootReducer from './_reducers';

// redux function to store state
const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;