import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Greeting = props => {
    const userGreeting = () => (
        <div className="user-greeting-div">
            <h2 className="user-greeting-welcome">Welcome, {props.currentUser.username}</h2>
            <button className="user-greeting-logout-button" onClick={props.logout}>Log Out</button>
        </div>
    );

    const sessionLinks = () => (
        <div className='sessionLinks'>
            <header>
                {/* <h3 className='App-welcome-to-title'>welcome to</h3> */}
                <h1 className='App-main-title'>coda</h1>
                <h4 className='App-main-tagline'>music by <span className='you'>you</span>, for <span className='you'>you</span>.</h4>
                {/* <GreetingContainer className='App-main-greeting-container' /> */}
            </header>
            {/* <img className='logo' src="/assets/logos/coda1.svg" /> */}
            <div className="user-greeting-session-links">
                <NavLink className="user-greeting-login-link" activeClassName="active-user-greeting-login-link" exact to="/login">login</NavLink>
                <NavLink className="user-greeting-signup-link" activeClassName="active-user-greeting-login-link" exact to="/signup">signup</NavLink>
            </div>
            <div className='splash-art-div'>
                <h3 className='splash-art-text'>never stop listening.</h3>
                <Link to="/login" className='splash-art-link'>login to continue</Link>
                {/* <p className='splash-art-words'>signup or login to listen to your favorite tunes</p> */}
                {/* <img className='modern-life-image' src="/assets/svgassets/undraw_walk_in_the_city_1ma6.svg" /> */}
                <img src={window.splashImage} />;
            </div>

        </div>
    );

    return props.currentUser ? userGreeting() : sessionLinks();
};

export default Greeting;