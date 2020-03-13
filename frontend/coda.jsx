// modules //
import React from "react";
import ReactDOM from "react-dom";

// session //
import { signup, login, logout } from "./actions/session_actions";

// songs //
import {
    indexSongs,
    showSong, 
    createSong, 
    updateSong, 
    deleteSong
} from './actions/song_actions'; 

// general //
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();

    // current user bootstrap 
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // testing //
    window.getState = store.getState
    window.dispatch = store.dispatch
    
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;

    // window.indexSongs = indexSongs;
    // window.showSong = showSong; 
    // window.createSong = createSong; 
    // window.updateSong = updateSong; 
    // window.deleteSong = deleteSong;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store } />, root);
});





// testing //
// window.signup = signup;
// window.login = login;
// window.logout = logout;