import { RECEIEVE_CURRENT_USER, RECEIEVE_SESSION_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIEVE_CURRENT_USER:
            return [];
        case RECEIEVE_SESSION_ERRORS:
            return action.errors; 

        default: 
            return state;
    }
};

export default sessionErrorsReducer;