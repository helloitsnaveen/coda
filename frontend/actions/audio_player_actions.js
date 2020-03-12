import * as AudioPlayerUtil from "../util/audio_player_api_util";

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS'

const receiveTrack = song => ({
    type: RECEIVE_TRACK, 
    song
});

const receiveErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
});

export const getTrack = songId => dispatch => (
    AudioPlayerUtil.getTrack(songId)
        .then(song => dispatch(receiveTrack(song)))
        .fail(err => dispatch(receiveErrors(err)))
);

