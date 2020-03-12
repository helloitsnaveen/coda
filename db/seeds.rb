# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

## #ALL SEEDS!# ##
## GOD 
mythicaluser0 = User.create!(username: 'GOD', email: 'god@gmail.com', password: 'godmodeengage')

## TEST 
# TEST USERS
testuser1 = User.create!(username: 'testuser1', email: 'testuser1@gmail.com', password: 'testuser1pw')
testuser2 = User.create!(username: 'testuser2', email: 'testuser2@gmail.com', password: 'testuser2pw')

# TEST SONGS
testsong1 = Song.create!(title: 'testsong1', description: 'this is the description for testsong1, made by testuser1', artist_id: testuser1.id)
testsong2 = Song.create!(title: 'testsong2', description: 'this is the description for testsong2, made by testuser2', artist_id: testuser2.id)

# TEST SONGIMAGE LINK 
testUserIIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/TESTUSERIIMAGE.jpg')
testUserIIIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/TESTUSERIIIMAGE.jpg')

# TEST SONGTRACK LINK 
testUserITRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/TESTUSERITRACK.wav')
testUserIITRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/TESTUSERIITRACK.wav')

# TEST IMAGE ATTACHMENT 
testsong1.image.attach(io: testUserIIMAGE, filename: 'TESTUSERIIMAGE.jpg')
testsong2.image.attach(io: testUserIIIMAGE, filename: 'TESTUSERIIIMAGE.jpg')

# TEST TRACK ATTACHMENT 
testsong1.track.attach(io: testUserITRACK, filename: 'TESTUSERITRACK.wav')
testsong2.track.attach(io: testUserIITRACK, filename: 'TESTUSERIITRACK.wav')

## SEED 
# SEED USERS
almostwhere = User.create!(username: 'almostwhere', email: 'almost00there@gmail.com', password: 'almostwherepw')
waterbottlemusic = User.create!(username: 'waterbottlemusic', email: 'waterbottlemusic@gmail.com', password: 'waterbottlemusicpw')
chipsanddip = User.create!(username: 'chipsanddip', email: 'chipsanddip@gmail.com', password: 'chipsanddippw')
daboombapper = User.create!(username: 'daboombapper', email: 'daboombapper@gmail.com', password: 'boombappw')
guacboi = User.create!(username: 'guacboi!', email: 'guacboi@gmail.com', password: 'guacboypw') 
onionringsupreme = User.create!(username: 'onionringsupreme', email: 'onionringsupreme@gmail.com', password: 'onionringsupremepw')

# SEED SONGS
decline = Song.create!(title: 'decline', description: 'decline, by almost there.', artist_id: almostwhere.id)
fragilityoflife = Song.create!(title: 'the fragility of life', description: 'almost there', artist_id: almostwhere.id) 
speedituprmx = Song.create!(title: 'speed it up rmx!', description: 'almost there', artist_id: almostwhere.id) 
separate = Song.create!(title: 'separate', description: 'almost there separate', artist_id: almostwhere.id) 
yayaya = Song.create!(title: 'ya3rmx', description: 'almost there ya rmx', artist_id: almostwhere.id) 
thewaterbottlesong = Song.create!(title: 'waterbottles!', description: 'this is the water bottle song', artist_id: waterbottlemusic.id)
thechipsanddipsong = Song.create!(title: 'chippin n dippin', description: 'chips and dip u know how it do', artist_id: chipsanddip.id)
boomsandbaps = Song.create!(title: 'booms and baps', description: 'the true boom bapper rises again!', artist_id: daboombapper.id)
hardhit = Song.create!(title: 'hardhitter', description: 'this song slap!', artist_id: daboombapper.id)
guac = Song.create!(title: 'GUAC!', description: 'first part of III part GUAC trilogy!', artist_id: guacboi.id)
moreguac = Song.create!(title: 'MOREGUAC!', description: 'you know what they say, fool me once GUAC fool me twice MOREGUAC', artist_id: guacboi.id)
extraguac = Song.create!(title: 'EXTRAGUAC!', description: 'cant believe these fools charging extra for guac fr…', artist_id: guacboi.id) 
onionsinrings = Song.create(title: 'put a ring on it', description: 'if you love that onion, put a ring on it', artist_id: onionringsupreme.id)

# SEED SONGIMAGE LINK
declineIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/1DECLINEIMAGE.jpg')
fragilityIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/2FRAGILITYIMAGE.jpg')
speedIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/3SPEEDIMAGE.jpg')
separateIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/4SEPARATEIMAGE.jpg')
yayayaIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/5YAYAYAIMAGE.jpg')
waterBottleIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/6WATERBOTTLEIMAGE.jpg')
chipsDipIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/7CHIPSANDDIPIMAGE.jpg')
boomBapIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/8BOOMBAPIMAGE.jpg')
hardHitterIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/9HARDHITTERIMAGE.jpg')
guacIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/10GUACIMAGE.jpg')
moreGuacIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/11MOREGUACIMAGE.jpg')
extraGuacIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/12EXTRAGUACIMAGE.jpg')
onionRingsIMAGE = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songImages/13ONIONRINGSIMAGE.jpg')

# SEED SONGTRACK LINK 
declineTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/1DECLINETRACK.wav')
fragilityTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/2FRAGILITYTRACK.wav')
speedTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/3SPEEDTRACK.wav')
separateTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/4SEPARATETRACK.wav')
yayayaTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/5YAYAYATRACK.wav')
waterBottleTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/6WATERBOTTLETRACK.wav')
chipsDipTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/7CHIPSANDDIPTRACK.mp3')
boomBapTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/8BOOMBAPTRACK.wav')
hardHitterTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/9HARDHITTERTRACK.wav')
guacTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/10GUACTRACK.wav')
moreGuacTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/11MOREGUACTRACK.wav')
extraGuacTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/12EXTRAGUACTRACK.wav')
onionRingsTRACK = open ('/Users/naveen/Documents/MyAdminLabs/CODASEED/songTracks/13ONIONRINGSTRACK.wav')

# SEED IMAGE ATTACHMENT 
decline.image.attach(io: declineIMAGE, filename: '1DECLINEIMAGE.jpg')
fragilityoflife.image.attach(io: fragilityIMAGE, filename: '2FRAGILITYIMAGE.jpg')
speedituprmx.image.attach(io: speedIMAGE, filename: '3SPEEDIMAGE.jpg')
separate.image.attach(io: separateIMAGE, filename: '4SEPARATEIMAGE.jpg')
yayaya.image.attach(io: yayayaIMAGE, filename: '5YAYAYAIMAGE.jpg')
thewaterbottlesong.image.attach(io: waterBottleIMAGE, filename: '6WATERBOTTLEIMAGE.jpg')
thechipsanddipsong.image.attach(io: chipsDipIMAGE, filename: '7CHIPSANDDIPIMAGE.jpg')
boomsandbaps.image.attach(io: boomBapIMAGE, filename: '8BOOMBAPIMAGE.jpg')
hardhit.image.attach(io: hardHitterIMAGE, filename: '9HARDHITTERIMAGE.jpg')
guac.image.attach(io: guacIMAGE, filename: '10GUACIMAGE.jpg')
moreguac.image.attach(io: moreGuacIMAGE, filename: '11MOREGUACIMAGE.jpg')
extraguac.image.attach(io: extraGuacIMAGE, filename: '12EXTRAGUACIMAGE.jpg')
onionsinrings.image.attach(io: onionRingsIMAGE, filename: '13ONIONRINGSIMAGE.jpg')

# SEED TRACK ATTACHMENT 
decline.track.attach(io: declineTRACK, filename: '1DECLINETRACK.wav')
fragilityoflife.track.attach(io: fragilityTRACK, filename: '2FRAGILITYTRACK.wav')
speedituprmx.track.attach(io: speedTRACK, filename: '3SPEEDTRACK.wav')
separate.track.attach(io: separateTRACK, filename: '4SEPARATETRACK.wav')
yayaya.track.attach(io: yayayaTRACK, filename: '5YAYAYATRACK.wav')
thewaterbottlesong.track.attach(io: waterBottleTRACK, filename: '6WATERBOTTLETRACK.wav')
thechipsanddipsong.track.attach(io: chipsDipTRACK, filename: '7CHIPSANDDIPTRACK.wav')
boomsandbaps.track.attach(io: boomBapTRACK, filename: '8BOOMBAPTRACK.wav')
hardhit.track.attach(io: hardHitterTRACK, filename: '9HARDHITTERTRACK.wav')
guac.track.attach(io: guacTRACK, filename: '10GUACTRACK.wav')
moreguac.track.attach(io: moreGuacTRACK, filename: '11MOREGUACTRACK.wav')
extraguac.track.attach(io: extraGuacTRACK, filename: '12EXTRAGUACTRACK.wav')
onionsinrings.track.attach(io: onionRingsTRACK, filename: '13ONIONRINGSTRACK.wav')

## UNUSED ##
# mythicaluser0 = User.create!(username: 'GOD', email: 'god@gmail.com', password: 'godmodeengage')
# testuser1 = User.create!(username: 'testuser1', email: 'testuser1@gmail.com', password: 'testuser1pw')
# testuser2 = User.create!(username: 'testuser2', email: 'testuser2@gmail.com', password: 'testuser2pw')
# almostwhere = User.create!(username: 'almostwhere', email: 'almost00there@gmail.com', password: 'almostwherepw')
# waterbottlemusic = User.create!(username: 'waterbottlemusic', email: 'waterbottlemusic@gmail.com', password: 'waterbottlemusicpw')
# chipsanddip = User.create!(username: 'chipsanddip', email: 'chipsanddip@gmail.com', password: 'chipsanddippw')

# testsong1 = Song.create!(title: 'testsong1', description: 'this is the description for testsong1, made by testuser1', artist_id: testuser1.id)
# testsong2 = Song.create!(title: 'testsong2', description: 'this is the description for testsong2, made by testuser2', artist_id: testuser2.id)
# decline = Song.create!(title: 'decline', description: 'decline, by almost there.', artist_id: almostwhere.id)
# thewaterbottlesong = Song.create!(title: 'the water bottle song', description: 'this is the water bottle song', artist_id: waterbottlemusic.id)
# thechipsanddipsong = Song.create!(title: 'the chips and dip song', description: 'this is the chips and dip song', artist_id: chipsanddip.id)

# ## demo user ! ## 
# demo_user = User.create!(username: 'demoUser', email: 'demouser@mail.com', password: 'demouserpw')

# demo_user1song = Song.create!(title: 'apples and oranges!', description: 'this is the demo users first song', artist_id: demo_user.id)
# demo_user2song = Song.create!(title: 'headphone boy!', description: 'this is the demo users second song, ya!', artist_id: demo_user.id)
# demo_user3song = Song.create!(title: 'coding gurl!', description: 'demo user song 3 u know how it be', artist_id: demo_user.id)
