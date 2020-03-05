import * as SongApiUtil from "../util/song_api_util";

export const RECEIVE_SONG = 'RECEIEVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';


// regular action creators 
const receieveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS, 
    songs
});

const receiveSong = song => ({
    type: RECEIVE_SONG, 
    song
}); 

const removeSong = songId => ({
    type: REMOVE_SONG, 
    songId
});

const receiveErrors = errors => ({
    type: RECEIVE_SONG_ERRORS, 
    errors
});

// async action creators 
export const indexSongs = () => dispatch => (
    SongApiUtil.indexSongs()
        .then(songs => dispatch(receieveAllSongs(songs)))
        .fail(err => dispatch(receiveErrors(err)))
);

export const showSong = songId => dispatch => (
    SongApiUtil.showSong(songId)
        .then(song => dispatch(receiveSong(song)))
        .fail(err => dispatch(receiveErrors(err)))
); 

export const createSong = song => dispatch => (
    SongApiUtil.createSong(song)
        .then(song => dispatch(receiveSong(song)))
        .fail(err => dispatch(receiveErrors(err)))
); 

export const updateSong = (songId, editSong) => dispatch => (
    SongApiUtil.updateSong(songId, editSong)
        .then(song => dispatch(receiveSong(song)))
        .fail(err => dispatch(receiveErrors(err)))
); 

export const deleteSong = songId => dispatch => {
    // debugger;
    return (
        SongApiUtil.deleteSong(songId)
            .then(() => dispatch(removeSong(songId)))
            .fail(err => dispatch(receiveErrors(err)))
    );
};

