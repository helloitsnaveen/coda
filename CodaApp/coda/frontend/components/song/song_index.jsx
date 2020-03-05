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
            <div>
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
        );
    };
};

export default SongIndex;