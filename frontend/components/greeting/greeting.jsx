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
                <h1 className='App-main-title'>coda</h1>
                <h4 className='App-main-tagline'>music by <span className='you'>you</span>, for <span className='you'>you</span>.</h4>
            </header>

            <div className="user-greeting-session-links" >
                <h1>TESTEST</h1>
                <NavLink className="user-greeting-login-link" activeClassName="active-user-greeting-login-link" exact to="/login">login</NavLink>
                <NavLink className="user-greeting-signup-link" activeClassName="active-user-greeting-login-link" exact to="/signup">signup</NavLink>
                <button className="user-greeting-demouser" onClick={demoUserLogin()}>demo user</button>
                <p>asdasd</p>
            </div>
            
            <div className='splash-art-div'>
                <h3 className='splash-art-text'>never stop listening.</h3>
                <Link to="/login" className='splash-art-link'>login to continue</Link>
                <img src={window.splashImage} />;
            </div>
        </div>
    );

    const demoUserLogin = () => {
        const demoUser = {
            username: 'demoUser',
            password: 'demouserpw'
        };

        props.login(demoUser);
    };

    return props.currentUser ? userGreeting() : sessionLinks();
};

export default Greeting;