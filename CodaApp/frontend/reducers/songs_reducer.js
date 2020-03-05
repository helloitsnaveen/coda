import { 
    RECEIVE_SONG, 
    REMOVE_SONG, 
    RECEIVE_ALL_SONGS
} from '../actions/song_actions';

const _empty = ({
});

const songsReducer = (state = _empty, action) => {
    Object.freeze(state);
    // debugger; 
    switch(action.type) {
        case RECEIVE_SONG: 
            return Object.assign({}, state, { [action.song.id]: action.song });
        case REMOVE_SONG: 
            return _empty;
        case RECEIVE_ALL_SONGS: 
            return Object.assign({}, state, action.songs);

        
        default: 
            return state;
    }
}; 

export default songsReducer;