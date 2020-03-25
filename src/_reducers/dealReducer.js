import { GET_ALL_DEALS } from "../_actions/_types";

const initialState = {
    deals: []
}

export function dealReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DEALS:
            return {
                ...state,
                deals: action.payload
            }
        default:
            return state;
    }
}