import { connect } from "react-redux";

import SongShow from "./song_show";
import { indexSongs, updateSong, deleteSong, showSong } from "../../actions/song_actions";

const mapStateToProps = (state, ownProps) => ({
    songs: Object.values(state.entities.songs),
    song: Object.values(state.entities.songs)[ownProps.match.params.songId - 1],
    // songId: 
    // song: Object.values(state.entities.song)
    // songId: 
});

const mapDispatchToProps = dispatch => ({
    indexSongs: () => dispatch(indexSongs()), 
    updateSong: (songId, editSong) => dispatch(updateSong(songId, editSong)),
    deleteSong: songId => dispatch(deleteSong(songId)), 
    showSong: songId => dispatch(showSong(songId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongShow);