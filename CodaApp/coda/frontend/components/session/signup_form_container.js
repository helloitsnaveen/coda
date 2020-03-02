import { connect } from "react-redux";

import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'signup',
    otherAction: <Link to="/login">Log In Instead!</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: dispatch(signup())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);