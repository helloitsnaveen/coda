import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateState(p) {
        return p => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    CODA
                    <br/>
                    {this.props.otherAction}
                    <br/>
                    <label>Username:
                        <input type="text"
                        onChange={this.updateState('username')}
                        value={this.state.username}/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input type="password"
                        onChange={this.updateState('password')}
                        />
                    </label>
                    <br/>
                    <button value={this.props.formType}></button>
                </form>
            </div>
        )
    }
}

export default SessionForm;