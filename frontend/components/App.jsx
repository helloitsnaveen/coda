import React from "react";
import {
    Route, 
    Switch, 
    Redirect
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SongIndexContainer from "./song/song_index_container";
import SongShowContainer from "./song/song_show_container";
import SongFormContainer from "./create_song_form/create_song_form_container"
import AudioFormContainer from "./audio_player/audio_player_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div className='App-main-div'>
        {/* <Switch>  */}
            <Route exact path="/" component={GreetingContainer} />

            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/stream" component={SongIndexContainer} />
            
            <Route exact path="/songs/:songId" component={SongShowContainer} />
            {/* <Route exact path="/songs/:songId" component={AudioFormContainer} /> */}

            <ProtectedRoute path="/" component={AudioFormContainer} />

            <ProtectedRoute exact path="/upload" component={SongFormContainer} />
        {/* </Switch> */}
    </div>
);

export default App;