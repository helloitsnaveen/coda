import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import songsReducer from "./songs_reducer";
import audioPlayerReducer from "./audio_player_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer, 
    songs: songsReducer, 
    audioPlayer: audioPlayerReducer,
});

export default entitiesReducer;