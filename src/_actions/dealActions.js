import store from "../store";
import { GET_ALL_DEALS } from './_types';

const getDeals = deals => {
    return{
        type: GET_ALL_DEALS,
        payload: deals
    };
}

// DISPATCH ACTION
export const boundGetDeals = deals => 
    store.dispatch(getDeals(deals));
