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