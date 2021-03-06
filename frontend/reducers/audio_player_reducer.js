import { RECEIVE_TRACK, RECEIVE_TRACK_ERRORS } from "../actions/audio_player_actions";

const audioPlayerReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACK:
            return action.song

        default: 
            return state;
    }
};

export default audioPlayerReducer;