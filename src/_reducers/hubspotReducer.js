import { GET_DEAL } from "../_actions/_types";

const initialState = {
    deal: []
}

export function hubspotReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DEAL:
            return {
                ...state,
                deals: action.payload
            }
        default:
            return state;
    }
}