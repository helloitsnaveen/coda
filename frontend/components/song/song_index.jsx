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
                                    key={song.id}
                                />
                            ))
                        }
                    </ul>
                </div>
                
                <div className='song-index-side-bar-container'> 
                    <div className='song-index-side-bar'>
                        <div className='stats-bar-container'>
                            <div className='stats-bar-label'>
                                <div className='stats-bar-logo'></div>
                                <div className='stats-bar-title'></div>
                            </div>

                            <div className='number-stat-container'>
                                <div className='twenty-four-hour-stat-container'>

                                </div>
                                <div className='seven-day-stat-container'>

                                </div>
                            </div>

                            <div className='stats-bottom-text-container'>

                            </div>
                        </div>
                        <div className='who-to-follow-container'>
                            <div className='who-to-follow-label'>
                                <div className='who-to-follow-logo'></div>
                                <div className='who-to-follow-title'></div>
                            </div>

                            <div className='who-to-follow-users-container'>
                                <div className='who-to-follow-user1'>
                                    <div className='who-to-follow-user1-image'></div>
                                    <div className='who-to-follow-user1-user'></div>
                                    <div className='who-to-follow-user1-followers'></div>
                                    <div className='who-to-follow-user1-followbtn'></div>
                                </div>
                                <div className='who-to-follow-user2'>
                                    <div className='who-to-follow-user2-image'></div>
                                    <div className='who-to-follow-user2-user'></div>
                                    <div className='who-to-follow-user2-followers'></div>
                                    <div className='who-to-follow-user2-followbtn'></div>
                                </div>
                                <div className='who-to-follow-user3'>
                                    <div className='who-to-follow-user3-image'></div>
                                    <div className='who-to-follow-user3-user'></div>
                                    <div className='who-to-follow-user3-followers'></div>
                                    <div className='who-to-follow-user3-followbtn'></div>
                                </div>
                            </div>
                        </div>
                        <div className='index-likes-container'>
                            <div className='index-likes-label'>
                                <div className='index-likes-logo'></div>
                                <div className='index-likes-title'></div>
                            </div>

                            <div className='index-likes-tracks-container'>
                                <div className='index-likes-track-1'>
                                    <div className='index-likes-track-1-image'></div>
                                    
                                    <div className='index-likes-text-1'>
                                        <div className='index-likes-track-1-user'></div>
                                        <div className='index-likes-track-1-title'></div>
                                        <div className='index-likes-track-1-stats'>
                                            <div className='index-likes-track-1-stats-plays'>
                                                <div className='index-likes-track-1-stats-plays-icon'></div>
                                                <div className='index-likes-track-1-stats-plays-number'></div>
                                            </div>

                                            <div className='index-likes-track-1-stats-likes'>
                                                <div className='index-likes-track-1-stats-likes-icon'></div>
                                                <div className='index-likes-track-1-stats-likes-number'></div>
                                            </div>

                                            <div className='index-likes-track-1-stats-comments'>
                                                <div className='index-likes-track-1-stats-comments-icon'></div>
                                                <div className='index-likes-track-1-stats-comments-number'></div>
                                            </div>

                                            <div className='index-likes-track-1-stats-follows'>
                                                <div className='index-likes-track-1-stats-follows-icon'></div>
                                                <div className='index-likes-track-1-stats-follows-number'></div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className='index-likes-track-2'>
                                    <div className='index-likes-track-2-image'></div>

                                    <div className='index-likes-text-2'>
                                        <div className='index-likes-track-2-user'></div>
                                        <div className='index-likes-track-2-title'></div>
                                        <div className='index-likes-track-2-stats'>
                                            <div className='index-likes-track-2-stats-plays'>
                                                <div className='index-likes-track-2-stats-plays-icon'></div>
                                                <div className='index-likes-track-2-stats-plays-number'></div>
                                            </div>

                                            <div className='index-likes-track-2-stats-likes'>
                                                <div className='index-likes-track-2-stats-likes-icon'></div>
                                                <div className='index-likes-track-2-stats-likes-number'></div>
                                            </div>

                                            <div className='index-likes-track-2-stats-comments'>
                                                <div className='index-likes-track-2-stats-comments-icon'></div>
                                                <div className='index-likes-track-2-stats-comments-number'></div>
                                            </div>

                                            <div className='index-likes-track-2-stats-follows'>
                                                <div className='index-likes-track-2-stats-follows-icon'></div>
                                                <div className='index-likes-track-2-stats-follows-number'></div>
                                            </div>                                            
                                        </div>
                                    </div>    
                                </div>
                                <div className='index-likes-track-3'>
                                    <div className='index-likes-track-3-image'></div>

                                    <div className='index-likes-text-3'>
                                        <div className='index-likes-track-3-user'></div>
                                        <div className='index-likes-track-3-title'></div>
                                        <div className='index-likes-track-3-stats'>
                                            <div className='index-likes-track-3-stats-plays'>
                                                <div className='index-likes-track-3-stats-plays-icon'></div>
                                                <div className='index-likes-track-3-stats-plays-number'></div>
                                            </div>

                                            <div className='index-likes-track-3-stats-likes'>
                                                <div className='index-likes-track-3-stats-likes-icon'></div>
                                                <div className='index-likes-track-3-stats-likes-number'></div>
                                            </div>

                                            <div className='index-likes-track-3-stats-comments'>
                                                <div className='index-likes-track-3-stats-comments-icon'></div>
                                                <div className='index-likes-track-3-stats-comments-number'></div>
                                            </div>

                                            <div className='index-likes-track-3-stats-follows'>
                                                <div className='index-likes-track-3-stats-follows-icon'></div>
                                                <div className='index-likes-track-3-stats-follows-number'></div>
                                            </div>                                            
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='song-progress-bar'>

                </div>

            </div>
        );
    };
};

export default SongIndex;