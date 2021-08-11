import initialState from "./initialState";
import { SET_ERROR, SET_LOADING, SET_USERS } from "./types";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: return {
            ...state,
            users: action.payload,
            loading: false,
            error: false
        };
        case SET_LOADING: return { ...state, loading: true };
        case SET_ERROR: return { ...state, error: true, loading: false };

        default: return state;
    }

}

export default reducer;