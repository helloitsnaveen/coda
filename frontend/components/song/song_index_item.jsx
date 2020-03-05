import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = props => (
    <li>
        <div className='song-index-item-div'>
            <h3>{props.song.title}</h3>
            <button onClick={() => props.deleteSong(props.song.id)}>delete</button>      
        </div> 
    </li>
);

export default SongIndexItem;