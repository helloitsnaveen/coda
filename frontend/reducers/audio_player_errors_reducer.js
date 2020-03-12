import {
    RECEIVE_TRACK,
    RECEIVE_TRACK_ERRORS
} from '../actions/audio_player_actions';

const audioPlayerErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACK:
            return [];
        case RECEIVE_TRACK_ERRORS:
            return action.errors;

        default:
            return state;
    }
};

export default audioPlayerErrorsReducer;