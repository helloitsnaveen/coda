import { connect } from "react-redux";

import AudioPlayer from "./audio_player";
import { getTrack } from "../../actions/audio_player_actions";

const mapStateToProps = (state, ownProps) => ({
    // song: Object.values(state.entities.songs)[ownProps.match.params.songId - 1]
    currentSong: state.entities.audioPlayer
});

const mapDispatchToProps = dispatch => ({
    getTrack: songId => dispatch(getTrack(songId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioPlayer);