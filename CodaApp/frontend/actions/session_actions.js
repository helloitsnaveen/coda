import * as SessionApiUtil from "../util/session_api_util";

export const RECEIEVE_CURRENT_USER = "RECEIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER  = "LOGOUT_CURRENT_USER";
export const RECEIEVE_SESSION_ERRORS = "RECEIEVE_SESSION_ERRORS";


// regular action creators 
const receieveCurrentUser = user => ({
    type: RECEIEVE_CURRENT_USER, 
    user 
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receieveErrors = errors => ({
    type: RECEIEVE_SESSION_ERRORS, 
    errors
});

// async action creators 
export const login = user => dispatch => {
    return (
    SessionApiUtil.login(user)
        .then(user => dispatch(receieveCurrentUser(user)))
        .fail(err => dispatch(receieveErrors(err.responseJSON))) // to render as JSON
)};

export const logout = () => dispatch => (
    SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(err => dispatch(receieveErrors(err.responseJSON))) 
);

export const signup = user => dispatch => (
    SessionApiUtil.signup(user)
        .then(user => dispatch(receieveCurrentUser(user)))
        .fail(err => dispatch(receieveErrors(err.responseJSON)))
);


