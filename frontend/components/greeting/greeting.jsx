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
        <div className='session-links-div-main'>
            <header className='App-main-header'>
                <Link exact to="/" className='App-main-title'>coda</Link>
                <h4 className='App-main-tagline'>music by <span className='App-tagline-you'>you</span>, for <span className='App-tagline-you'>you</span>.</h4>
            </header>

            <div className="user-greeting-session-links" >
                <NavLink className="user-greeting-login-link" activeClassName="active-user-greeting-login-link" exact to="/login">login</NavLink>
                <NavLink className="user-greeting-signup-link" activeClassName="active-user-greeting-login-link" exact to="/signup">signup</NavLink>
                <button className="user-greeting-demouser" onClick={demoUserLogin}>demo user</button>
                {/* onClick={demoUserLogin()} */}
            </div>


            <div className='splash-art-div'>
                <h3 className='splash-art-text-one'>never stop listening.</h3>
            </div>

            <h3 className='splash-art-text-two'><span className='splash-art-yours'>your</span> music on <span className='splash-art-yours'>your</span> terms.</h3>
            
            <img className="splash-image" src={window.splashImage} />

            <Link to="/login" className='splash-art-link'>login to continue</Link>
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
