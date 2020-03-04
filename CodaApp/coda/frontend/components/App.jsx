import React from "react";
import {
    Route
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";


const App = () => (
    <div className='App-main-div'>
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;