import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import songsErrorsReducer from "./songs_errors_reducer";
import audioPlayerErrorsReducer from "./audio_player_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer, 
    songs: songsErrorsReducer, 
    audioPlayer: audioPlayerErrorsReducer
});

export default errorsReducer;
