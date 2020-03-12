import { connect } from "react-redux";

import SongIndex from "./song_index";
import { indexSongs, deleteSong } from "../../actions/song_actions";

import { getTrack } from "../../actions/audio_player_actions";

const mapStateToProps = state => ({
    songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
    indexSongs: () => dispatch(indexSongs()), 
    deleteSong: songId => dispatch(deleteSong(songId)), 
    getTrack: songId => dispatch(getTrack(songId)) 
});

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(SongIndex);