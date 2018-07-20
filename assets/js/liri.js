// read and set any environment variables with the dotenv package:

require("dotenv").config();

var require = require("assets/js/keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

/*
LIRI commands:
* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

node liri.js my-tweets`
- shows last 20 tweets + when they were created in terminal

`node liri.js spotify-this-song '<song name here>'`
- shows in terminal:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
(If no song is provided then your program will default to "The Sign" by Ace of Base.)
[node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

spotify client id: ab5530e55a024bd3b22f5de6b2fdad1c
secret: eab1fe20734f44e488d9a3e94bcffe6a
[node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

`node liri.js movie-this '<movie name here>'`
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
(if nothing typed default to  output data for the movie 'Mr. Nobody.')

 You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

 `node liri.js do-what-it-says`
    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    * Feel free to change the text in that document to test out the feature for other commands.
*/