import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = props => (
    <li>
        <div className='song-index-item-outer-div'>
            <img className='song-index-OUTER-image-tag' src={props.song.image} />


            {/* <div className='song-index-item-image'>
                <img className='song-index-image-tag' src={props.song.image}/>
            </div> */}

            <div className='song-index-item-rest'>
                <div className='song-index-item-title-and-duration'>
                    <div className='song-index-item-duration-container'>
                        <h3 className='song-index-item-duration'>2:43</h3>
                    </div>
                    
                    <div className='song-index-item-title-container'>
                        <Link exact to={`/songs/${props.songId}`} className='song-index-item-title'>{props.song.title}</Link>
                    </div>

                    <div className='song-index-item-artist-container'>
                        <Link exact to='/' className='song-index-item-artist'>naveen thota</Link>
                    </div>
                </div>

                <div className='song-index-item-like-and-play'>
                    <div className='song-index-item-like-container'>
                        <button className='song-index-item-like'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="like-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                        </button>
                        {/* <img src={likeIcon} className="like-icon" /> */}
                    </div>

                    <div className='song-index-item-play-container'>
                        <button className='song-index-item-play'>                        
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="play-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                        </button>
                        {/* <audio src={props.song.track}>PLAYER</audio> */}

                        {/* <img src={playIcon} className="play-icon" /> */}
                        {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="play-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> */}
                    </div>
                </div>
                <audio
                    className='songplayer'
                    controls
                    src={props.song.track}>
                </audio>
            </div>
        </div>
    </li>
);

export default SongIndexItem;

