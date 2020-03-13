import { connect } from "react-redux";

import NavBar from "./nav_bar";

const mapStateToProps = (state, ownProps) => ({
    // song: Object.values(state.entities.songs)[ownProps.match.params.songId - 1]
    currentUser: Object.values(state.entities.users)[0]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);