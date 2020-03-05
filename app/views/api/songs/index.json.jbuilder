json.array! @songs.each do |song|
    json.extract! song, :id, :title, :description, :artist_id
end 