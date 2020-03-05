import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '', 
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        //     .then( () => this.props.history.push('/'))
    }

    updateState(field) {
        return p => this.setState({
            [field]: p.currentTarget.value
        });
    }

    render() {
        return (
            <div className="session-form-div">
                <h1 className='App-main-title'>coda</h1>
                <h4 className='App-main-tagline'>music by <span className='you'>you</span>, for <span className='you'>you</span>.</h4>
                {this.props.formType === 'login' ?
                    <div className='login-visual-div'></div>
                :
                    <div className='signup-visual-div'></div>
                }

                {this.props.formType === 'login' ?
                    <div className="session-signupinstead-link-div">
                        <NavLink className="session-form-signup-link" exact to="/signup">signup <span>instead</span></NavLink>
                    </div>
                        :
                    <div className="session-logininstead-link-div">
                        <NavLink className="session-form-login-link" exact to="/login">login <span>instead</span></NavLink>
                    </div>
                }
                
                <div className='login-visual-div-2'></div>
                <form className='session-form-form' onSubmit={this.handleSubmit}>
                    {this.props.formType === 'login' ?
                        <p className='signin-title'>
                            <span className='signin-word'>{this.props.formType}</span> to your account
                        </p>
                    :
                        <p className='signin-title'>
                            <span className='signin-word'>{this.props.formType}</span> for an account
                        </p>
                    }


                    <br/>
                    {/* <p className="session-other-action">{this.props.otherAction}</p> */}
                    <br/> 
                    <label className="session-username-label">username
                        <br/>
                        <input type="text"
                        onChange={this.updateState('username')}
                        value={this.state.username}
                        className="session-username-input"
                        placeholder='username'/>
                    </label>
                    <br/>
                    <label className="session-password-label">password
                        <br/>
                        <input type="password"
                        onChange={this.updateState('password')}
                        className="session-password-input"
                        placeholder='password'
                        />
                    </label>
                    <br/>
                    {this.props.formType === 'signup' ? 
                        <label className="session-email-label">email
                            <input className="session-email-input"
                            type="text"
                            onChange={this.updateState('email')}
                            value={this.state.email}
                            placeholder='email'/>
                        </label>
                     : null}
                    <br/>
                    <button className="session-form-button" value={this.props.buttonName}>{this.props.buttonName}</button>
                </form>

                {this.props.formType === 'login' ?
                    <img src="assets/svgassets/undraw_listening_1u79.svg" className="login-image" />
                :
                    <img src="assets/svgassets/undraw_compose_music_ovo2.svg" className="signup-image" />
                }
            </div>
        )
    }
}

export default SessionForm;



{/* <NavLink className="user-greeting-login-link" activeClassName="active-user-greeting-login-link" exact to="/login">login</NavLink> */}
{/* <NavLink className="user-greeting-signup-link" activeClassName="active-user-greeting-login-link" exact to="/signup">signup</NavLink>  */}






