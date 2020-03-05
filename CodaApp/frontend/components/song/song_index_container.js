import { connect } from "react-redux";

import SongIndex from "./song_index";
import { indexSongs, deleteSong } from "../../actions/song_actions";

const mapStateToProps = state => ({
    songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
    indexSongs: () => dispatch(indexSongs()), 
    deleteSong: songId => dispatch(deleteSong(songId))
});

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(SongIndex);