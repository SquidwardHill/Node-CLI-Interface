require("dotenv").config();
var keys = require("keys.js");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
//var omdb = "http://www.omdbapi.com/?apikey=trilogy&";

var liriCommand = process.argv;
var liriFunc = liriCommand[2];
var search;
for(var i = 2; i < liriCommand.length; i++){
    search = liriCommand[i].split(' ');
    console.log(search);
};
//listen for liri command to choose which function to run
switch(command){
    case 'my-tweets':
    twitterCall();
    break;

    case 'spotify-this-song':
    spotifyCall(search);
    break;

    case 'movie-this':
    omdbCall(search);
    break;

    case 'do-what-it-says':
    fsCommand(search);
    break;
}

//Twitter API call (retrieve 20 most recent tweets)
function twitterCall(){
//client.get(path, params, callback);
//POST statuses/update
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
}

function spotifyCall(search) {
//Artist(s)
//The song's name
//A preview link of the song from Spotify
//The album that the song is from
// default to "The Sign" by Ace of Base for no song
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}

function omdbCall(){  
//Title of the movie.
//Year the movie came out.
// IMDB Rating of the movie.
//Rotten Tomatoes Rating of the movie.
//Country where the movie was produced.
//Language of the movie.
//Plot of the movie.
//Actors in the movie.
//nothing typed default to  output data for the movie 'Mr. Nobody.
}

function fsCommand (){
//Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// Feel free to change the text in that document to test out the feature for other commands.
}
