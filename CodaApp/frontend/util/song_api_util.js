// indexSongs showSong createSong updateSong deleteSong

export const indexSongs = () => (
    $.ajax({
        method: 'GET', 
        url: '/api/songs'
    })
); 

export const showSong = songId => (
    $.ajax({
        method: 'GET', 
        url: `/api/songs/${songId}`
    })
)

export const createSong = song => (
    $.ajax({
        method: 'POST', 
        url: '/api/songs', 
        data: { song }
    })
);

export const updateSong = (songId, editSong) => (
    $.ajax({
        method: 'PATCH', 
        url: `/api/songs/${songId}`, 
        data: { editSong }
    })
);

export const deleteSong = songId => {
    // debugger;
    return (
        $.ajax({
            method: 'DELETE', 
            url: `/api/songs/${songId}`
        })
    )
};