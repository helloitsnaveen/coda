import React from "react";
import { Link } from "react-router-dom";
import SongIndexItem from "./song_index_item";


class SongShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.indexSongs()
        // this.props.showSong(this.props.match.params.songId); 
    };
    
    // componentDidUpdate() {
        //     this.props.showSong(this.props.match.params.songId); 
        // };
        
    render() {
        const id = this.props.songs.length === 1 ? 0 : this.props.match.params.songId
        // console.log(id);
        const title = this.props.song ? this.props.song.title : ""
        // const title = this.props.songs[id].title;
        const image = this.props.song ? this.props.song.image : ""
        
        
        // console.log(title);
            
        return (
            <div className='MAIN-SONG-SHOW-DIV'>
                <div className='SONG-ONLY-DIV'>
                    <div className='song-show-image-container'><img className='IMGSHOW' src={image} alt=""/></div>
                    <div className='song-show-play-button'></div>
                    <div className='song-show-text-container'>
                        <div className='song-show-artist-container'><a href='' className='artist-words'>almost there</a></div>
                        <div className='song-show-title-container'><p className='title-words'>{title}</p></div>
                        <div className='song-show-age-container'><p className='age-words'>3 months</p></div>
                    </div>
                    <div className='song-show-wave-form'></div>
                </div>

                <div className='OUTSIDE-SONG-DIV'>
                    <div className='SONG-SHOW-BUTTONS'>
                        <div className='song-show-like-container'>
                            <div className='song-show-like-btn-icon'>
                                <svg className='song-show-btn-icons' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                            </div>
                            <div className='song-show-like-btn-text'>like</div>
                        </div>
                        <div className='song-show-share-container'>
                            <div className='song-show-share-btn-icon'>
                                <svg className='song-show-btn-icons' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z"></path></svg>
                            </div>
                            <div className='song-show-share-btn-text'>share</div>
                        </div>
                        <div className='song-show-edit-container'>
                            <div className='song-show-edit-btn-icon'>
                                <svg className='song-show-btn-icons' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>
                            </div>

                            <div className='song-show-edit-btn-text'>edit</div>
                        </div>
                        <div className='song-show-delete-container'>
                            <div className='song-show-delete-btn-icon'>
                                <svg className='song-show-btn-icons' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>
                            </div>
                            <div className='song-show-delete-btn-text'>delete</div>
                        </div>
                    </div>

                    <div className='SONG-STATS-CONTAINER'>
                        <div className='song-show-plays'>
                            <div className='song-show-play-icon'>
                                <svg className='song-show-share-icon-svg' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>   
                            </div>
                            <div className='song-show-play-num'>7, 124</div>
                        </div>
                        <div className='song-show-likes'>
                            <div className='song-show-like-icon'>
                                <svg className='song-show-like-icon-svg' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                            </div>
                            <div className='song-show-like-num'>53</div>
                        </div>
                        <div className='song-show-shares'>
                            <div className='song-show-share-icon'>
                                <svg className='song-show-share-icon-svg' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="retweet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"></path></svg>                           
                            </div>
                            <div className='song-show-share-num'>19</div>
                        </div>
                    </div>
                </div>
            
                {/* <div className='SHOW-SONG-INDEX-DIV'>
                    <ul>
                        {
                            songs.map(song => (
                                <SongIndexItem
                                    song={song}
                                    deleteSong={deleteSong}
                                    songId={song.id}
                                    key={song.id}
                                />
                            ))
                        }
                    </ul>
                </div> */}
            </div>
        );
    };
};

export default SongShow;