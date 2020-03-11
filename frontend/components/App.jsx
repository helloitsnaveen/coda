import React from "react";
import {
    Route
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SongIndexContainer from "./song/song_index_container";
import SongShowContainer from "./song/song_show_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div className='App-main-div'>
        <ProtectedRoute exact path="/stream" component={SongIndexContainer} />
        <Route exact path="/" component={GreetingContainer} />
        <Route path="/songs/:songId" component={SongShowContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;