import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {};

    render() {
        // console.log(this.props.currentUser);
        const username = this.props.currentUser ? this.props.currentUser.username : ""
        return (
           <div className='nav-bar-MAIN-div'>
               <div className='nav-bar-top'>
                    <div className='nav-bar-logo-container'>
                        <header className='App-main-header'>
                            <Link exact to="/stream" className='nav-bar-App-main-title'>coda</Link>
                        </header>

                        <h4 className='nav-bar-App-main-tagline'>music by <span className='App-tagline-you'>you</span>, for <span className='App-tagline-you'>you</span>.</h4>
                    </div>

                    <div className='nav-bar-user-container'>
                        <div className='nav-bar-user-icon'>

                        </div>

                        <div className='nav-bar-welcome-text'>
                            <p className='nav-bar-welcome-text-text'>welcome, </p>
                        </div>

                        <div className='nav-bar-username-text'>
                            <p className='nav-bar-username-text-text'>{username}</p>
                        </div>
                    </div>

                    <div className='nav-bar-upload-container'>
                        <Link exact to='/upload'>
                            <svg className='nav-bar-upload-icon-svg' aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>                        
                        </Link>    
                    </div>                    

                    <div className='nav-bar-logout-container'>
                        <svg className='nav-bar-logout-icon-svg' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
                    </div>

               </div>
           </div> 
        );
    };
};

export default NavBar;