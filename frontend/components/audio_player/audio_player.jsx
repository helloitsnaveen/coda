import React from "react";
import { Link } from "react-router-dom";

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {

    };

    componentDidUpdate() {

    };
    
    render() {
        const audioTag = this.props.currentSong ?
            <audio
                className='songplayer'
                controls
                autoPlay
                src={this.props.currentSong.track}
            />
            :
            null
        ;

        const showLink = this.props.currentSong.title ? 
            <Link exact to={`/songs/${this.props.currentSong.id}`} ><svg className='AP-SHOW-ICON' aria-hidden="true" focusable="false" data-prefix="far" data-icon="dot-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg></Link>
            : 
            <Link exact to={`/stream`} ><svg className='AP-SHOW-ICON' aria-hidden="true" focusable="false" data-prefix="far" data-icon="dot-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg></Link>
        ;

        return (
            <div className='AP-MUSIC-PLAYER-DIV'>
                <div className='BORDER0'>
                    <div className='inBORDER0'>
                        <div className='AP-play-container'>
                            <svg className='AP-PLAY-ICON' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                        </div>

                        <div className='AP-PROGRESS-BAR'>
                            {audioTag}
                        </div>

                        <div className='AP-show-container'>
                            {showLink}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default AudioPlayer