import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import SongIndexItem from "./song_index_item";

class SongIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.indexSongs();

        // console.log(this.props.getTrack(2))
    };

    render() {
        const { songs, deleteSong } = this.props; 

        return (
            <div className='entire-song-index-div'>
                <div className='top-nav-bar'>

                </div>

                <div className='song-index-div'>

                    <ul>
                        {
                            songs.map(song => (
                                <SongIndexItem 
                                    song={song}
                                    deleteSong={deleteSong}
                                    songId={song.id}
                                    key={song.id}
                                    className='anbba'
                                    getTrack={this.props.getTrack}
                                />
                            ))
                        }
                    </ul>
                </div>
                
                <div className='song-index-labels'>
                    <div className='song-index-label-icon'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path></svg>
                    </div>
                    <label className='song-index-label-label'>song index</label>
                </div>
                
                <div className='song-index-side-bar-container'> 
                    <div className='song-index-side-bar'>
                        <div className='stats-bar-container'>
                            <div className='stats-bar-label'>
                                <div className='stats-bar-logo'>
                                    <svg className='stats-bar-logo-svg' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>
                                </div>
                                <div className='stats-bar-title'>
                                    stats
                                </div>
                            </div>

                            <div className='number-stat-container'>
                                <div className='twenty-four-hour-stat-container'>
                                    <p className='twenty-four-hour-total-num'>43</p>
                                    <p className='twenty-four-hour-text'>twenty four hours</p>
                                </div>
                                <div className='seven-day-stat-container'>
                                    <p className='seven-day-total-num'>362</p>
                                    <p className='seven-day-text'>seven days</p>
                                </div>
                            </div>

                            <div className='stats-bottom-text-container'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="index-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                <p className='stats-bottom-total-plays'>7,438 plays</p>
                            </div>
                        </div>
                        <div className='who-to-follow-container'>
                            <div className='who-to-follow-label'>
                                <div className='who-to-follow-logo'>
                                    <svg className='who-to-follow-logo-svg' aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                                </div>
                                <div className='who-to-follow-title'>
                                    more to follow
                                </div>
                            </div>

                            <div className='who-to-follow-users-container'>
                                <div className='who-to-follow-user1'>
                                    <div className='who-to-follow-user1-image'></div>
                                    <div className='who-to-follow-user1-user'>
                                        clappyclap
                                    </div>
                                    <div className='who-to-follow-user1-plays'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="FOLLOW-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                        <p className='who-follow-plays'>14,238</p>
                                    </div>

                                    <div className='who-to-follow-user1-followers'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" className="FOLLOW-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>                                        <p className='who-follow-plays'>536</p>
                                    </div>

                                    <div className='who-to-follow-user1-followbtn'>
                                        <svg aria-hidden="true" data-prefix="fas" data-icon="user-check" className="FOLLOW-side-follow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path></svg>
                                    </div>
                                </div>
                                <div className='who-to-follow-user2'>
                                    <div className='who-to-follow-user2-image'></div>
                                    <div className='who-to-follow-user2-user'>
                                        bonGOD!
                                    </div>
                                    <div className='who-to-follow-user2-plays'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="FOLLOW-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                        <p className='who-follow-plays'>89,124</p>
                                    </div>
                                    <div className='who-to-follow-user2-followers'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" className="FOLLOW-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>                                        <p className='who-follow-plays'>7k</p>
                                    </div>
                                    <div className='who-to-follow-user2-followbtn'>
                                        <svg aria-hidden="true" data-prefix="fas" data-icon="user-check" className="FOLLOW-side-follow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path></svg>
                                    </div>
                                </div>
                                <div className='who-to-follow-user3'>
                                    <div className='who-to-follow-user3-image'></div>
                                    <div className='who-to-follow-user3-user'>
                                        codegurl1
                                    </div>
                                    <div className='who-to-follow-user3-plays'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="FOLLOW-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                        <p className='who-follow-plays'>152</p>
                                    </div>
                                    <div className='who-to-follow-user3-followers'>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" className="FOLLOW-side-plays" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>                                        <p className='who-follow-plays'>2</p>
                                    </div>
                                    <div className='who-to-follow-user3-followbtn'>
                                        <svg aria-hidden="true" data-prefix="fas" data-icon="user-check" className="FOLLOW-side-follow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='index-likes-container'>
                            <div className='index-likes-label'>
                                <div className='index-likes-logo'>
                                    <svg aria-hidden="true" focusable="false" className='index-likes-logo-svg' data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                </div>
                                <div className='index-likes-title'>your likes</div>
                            </div>

                            <div className='index-likes-tracks-container'>
                                <div className='index-likes-track-1'>
                                    <div className='index-likes-track-1-image'></div>
                                    
                                    <div className='index-likes-text-1'>
                                        <div className='index-likes-track-1-user'>sam gellaitry</div>
                                        <div className='index-likes-track-1-title'>jungle waters</div>
                                        <div className='index-likes-track-1-stats'>
                                            <div className='index-likes-track-1-stats-plays'>
                                                <div className='index-likes-track-1-stats-plays-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-plays-number'>
                                                    6,152
                                                </div>
                                            </div>

                                            <div className='index-likes-track-1-stats-likes'>
                                                <div className='index-likes-track-1-stats-likes-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-likes-number'>
                                                    274
                                                </div>
                                            </div>

                                            <div className='index-likes-track-1-stats-comments'>
                                                <div className='index-likes-track-1-stats-comments-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-comments-number'>
                                                    16
                                                </div>
                                            </div>

                                            <div className='index-likes-track-1-stats-follows'>
                                                <div className='index-likes-track-1-stats-follows-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-follows-number'>
                                                    536
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className='index-likes-track-2'>
                                    <div className='index-likes-track-2-image'></div>

                                    <div className='index-likes-text-2'>
                                        <div className='index-likes-track-2-user'>kanye east</div>
                                        <div className='index-likes-track-2-title'>silver miner</div>
                                        <div className='index-likes-track-2-stats'>
                                            <div className='index-likes-track-2-stats-plays'>
                                                <div className='index-likes-track-1-stats-plays-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-plays-number'>
                                                    1,251
                                                </div>            
                                            </div>

                                            <div className='index-likes-track-2-stats-likes'>
                                                <div className='index-likes-track-1-stats-likes-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-likes-number'>
                                                    89
                                                </div>                                            
                                            </div>

                                            <div className='index-likes-track-2-stats-comments'>
                                                <div className='index-likes-track-1-stats-comments-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-comments-number'>
                                                    4
                                                </div>
                                            </div>

                                            <div className='index-likes-track-2-stats-follows'>
                                                <div className='index-likes-track-1-stats-follows-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-follows-number'>
                                                    4
                                                </div>     
                                            </div>                                        
                                        </div>
                                    </div>    
                                </div>
                                <div className='index-likes-track-3'>
                                    <div className='index-likes-track-2-image'></div>

                                    <div className='index-likes-text-2'>
                                        <div className='index-likes-track-2-user'>almost there</div>
                                        <div className='index-likes-track-2-title'>keyboard n mouse</div>
                                        <div className='index-likes-track-2-stats'>
                                            <div className='index-likes-track-2-stats-plays'>
                                                <div className='index-likes-track-1-stats-plays-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-plays-number'>
                                                    13
                                                </div>
                                            </div>

                                            <div className='index-likes-track-2-stats-likes'>
                                                <div className='index-likes-track-1-stats-likes-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-likes-number'>
                                                    1
                                                </div>
                                            </div>

                                            <div className='index-likes-track-2-stats-comments'>
                                                <div className='index-likes-track-1-stats-comments-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-comments-number'>
                                                    0
                                                </div>
                                            </div>

                                            <div className='index-likes-track-2-stats-follows'>
                                                <div className='index-likes-track-1-stats-follows-icon'>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                                                </div>
                                                <div className='index-likes-track-1-stats-follows-number'>
                                                    194k
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
};

export default SongIndex;