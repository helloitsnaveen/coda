export const getTrack = songId => (
    $.ajax({
        method: 'GET',
        url: `/api/songs/${songId}`
    })
);

