json.array! @songs.each do |song|
    json.extract! song, :id, :title, :description, :artist_id
    json.image url_for(song.image)
    json.track url_for(song.track)
end 

