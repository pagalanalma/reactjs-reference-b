import store from "../store";
import { GET_DEAL } from './_types';

const getDeal = deal => {
    return{
        type: GET_DEAL,
        payload: deal
    };
}

// DISPATCH ACTION
export const boundGetDeal = deal => 
    store.dispatch(getDeal(deal));
