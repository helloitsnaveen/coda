import { RECEIEVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullId = ({
    id: null
}); 

const sessionReducer = (state = _nullId, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIEVE_CURRENT_USER:
            return {id: action.user.id};
        case LOGOUT_CURRENT_USER: 
            return _nullId;

        default: 
            return state;
    }
};

export default sessionReducer;