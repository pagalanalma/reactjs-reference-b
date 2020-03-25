import { GET_ALL_BORROWERS } from "../_actions/_types";

const initialState = {
    borrowers: []
}

export function borrowerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_BORROWERS:
            return {
                ...state,
                borrowers: action.payload
            }
        default:
            return state;
    }
}