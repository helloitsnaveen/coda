import {
    RECEIVE_SONG,
    RECEIVE_SONG_ERRORS
} from '../actions/song_actions';

const songsErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SONG:
            return [];
        case RECEIVE_SONG_ERRORS:
            return action.errors;

        default:
            return state;
    }
};

export default songsErrorsReducer;