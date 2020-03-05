import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors, 
    formType: 'login',
    buttonName: 'login',
    otherAction: <Link to="/signup">Sign Up Instead!</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);