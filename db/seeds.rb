# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

mythicaluser0 = User.create!(username: 'GOD', email: 'god@gmail.com', password: 'godmodeengage')
testuser1 = User.create!(username: 'testuser1', email: 'testuser1@gmail.com', password: 'testuser1pw')
testuser2 = User.create!(username: 'testuser2', email: 'testuser2@gmail.com', password: 'testuser2pw')
almostwhere = User.create!(username: 'almostwhere', email: 'almost00there@gmail.com', password: 'almostwherepw')
waterbottlemusic = User.create!(username: 'waterbottlemusic', email: 'waterbottlemusic@gmail.com', password: 'waterbottlemusicpw')
chipsanddip = User.create!(username: 'chipsanddip', email: 'chipsanddip@gmail.com', password: 'chipsanddippw')

testsong1 = Song.create!(title: 'testsong1', description: 'this is the description for testsong1, made by testuser1', artist_id: testuser1.id)
testsong2 = Song.create!(title: 'testsong2', description: 'this is the description for testsong2, made by testuser2', artist_id: testuser2.id)
decline = Song.create!(title: 'decline', description: 'decline, by almost there.', artist_id: almostwhere.id)
thewaterbottlesong = Song.create!(title: 'the water bottle song', description: 'this is the water bottle song', artist_id: waterbottlemusic.id)
thechipsanddipsong = Song.create!(title: 'the chips and dip song', description: 'this is the chips and dip song', artist_id: chipsanddip.id)