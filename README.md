# **__coda__**, a functional clone of _[soundcloud](http://www.soundcloud.com/)_. 
##### go to the [live site](https://app-coda.herokuapp.com/#/)

![splash page](https://github.com/helloitsnaveen/coda/blob/master/readmeImages/SPLASHIMAGE.png)

_**coda**_ is an audio-sharing website inspired by SoundCloud, with a complete redesign. 
It was built using the following:
* **Backend:** Ruby on Rails, running on Postgresql database
* **Frontend:** React.js, with Redux
* **Storage:** Rails Active Storage, used with Amazon S3 hosting
* **Hosting:** Heroku
* **Misc:** SCSS, Webpack  

# Features 
### User Authentication 
![signup page](https://github.com/helloitsnaveen/coda/blob/master/readmeImages/SIGNUPIMAGE.png)  

Users may create, and log in to an account - with validations and relevent errors present for all fields. For those that do not wish to make an account, the demo user button logs in with a default credentials

### Stream / Index Page
![stream](https://github.com/helloitsnaveen/coda/blob/master/readmeImages/STREAMIMAGE.png)  

Immediately after login, users are taken to the stream / song index page. There is a nav bar present, with a home button, upload link and a logout button. The sidebar contains a few containers with music stats, recommended users to follow and the current users liked tracks, all with unique hover animations. 

![stream 2](https://github.com/helloitsnaveen/coda/blob/master/readmeImages/STREAM2IMAGE.png)  

The main index component holds all uploaded tracks, with a bold hover effect. Each song title is a link to the pertinent song show page, and artist names lead to artist show pages. Each song also holds a like option, and a play button that sends the song to the music player - which then begins playback. The music player also holds a show-button, which leads to the currently playing songs' show page.

### Show Page 
![show page](https://github.com/helloitsnaveen/coda/blob/master/readmeImages/SHOWIMAGE.png)  

The show page holds a larger player component for each song, with more CRUD options buttons on the bottom. Each song will also have a unique waveform displayed on the show page, next to the image. The rest of each show page will be populated with a smaller version of the song index, so users may have quick access to other songs at all times.

### Upload Form 
![upload form](https://github.com/helloitsnaveen/coda/blob/master/readmeImages/UPLOADIMAGE.png)  

The upload form holds a similar design to the session form, with fields for title, description, an image, and the track. Both image and track fields ensure the validity of the file uploaded. The upload form will update to preview the currently selected image, as well as a minified player for the user to ensure they have uploaded the correct track. 


--- 
## Design Docs
[MVPs](https://github.com/helloitsnaveen/coda/wiki/mvp-list) · [Schema](https://github.com/helloitsnaveen/coda/wiki/schema) · [Sample State](https://github.com/helloitsnaveen/coda/wiki/sample-state) · [Frontend](https://github.com/helloitsnaveen/coda/wiki/frontend-routes) · [Backend](https://github.com/helloitsnaveen/coda/wiki/backend-routes)

#### by Naveen Thota
