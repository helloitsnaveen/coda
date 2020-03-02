import React from "react";
import { Link } from "react-router-dom";

const Greeting = props => {
    const userGreeting = () => (
        <div className="userGreetingDiv">
            <h2 className="userWelcome">Welcome, {props.currentUser.username}</h2>
            <button className="userLogoutButton" onClick={props.logout}>Log Out</button>
        </div>
    );

    const sessionLinks = () => (
        <nav className="sessionLinks">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </nav>
    );

    return props.currentUser ? userGreeting() : sessionLinks();
};

export default Greeting;