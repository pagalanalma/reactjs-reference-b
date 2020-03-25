import store from "../store";
import { GET_ALL_BORROWERS } from './_types';

const getAllBorrowers = borrowers => {
    return{
        type: GET_ALL_BORROWERS,
        payload: borrowers
    };
}

// DISPATCH ACTION
export const boundGetAllBorrowers = borrowers => 
    store.dispatch(getAllBorrowers(borrowers));
