import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup',
    buttonName: 'signup',
    otherAction: <Link to="/login">Log In Instead!</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);