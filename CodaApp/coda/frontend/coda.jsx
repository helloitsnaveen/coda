import React from "react";
import ReactDOM from "react-dom";

import { signup, login, logout } from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    
    // testing 
    window.getState = store.getState
    window.dispatch = store.dispatch
    
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    // testing 
    
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store } />, root);
});





// testing 
// window.signup = signup;
// window.login = login;
// window.logout = logout;