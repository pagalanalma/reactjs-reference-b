import { combineReducers } from 'redux';
import { borrowerReducer } from './borrowerReducer';
import { dealReducer } from './dealReducer';
import { hubspotReducer } from './hubspotReducer';

export default combineReducers({
    borrowerReducer,
    dealReducer,
    hubspotReducer
})