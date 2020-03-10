json.extract! @song, :id, :title, :description, :artist_id
json.track url_for(@song.image)