require("dotenv").config();
var keys =  require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var omdb = require("omdb");
var request = require("request");


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var OMDBquery = "http://www.omdbapi.com/?apikey=trilogy&";

var liriCommand = process.argv;
var liriFunc = liriCommand[2];
var search = "";
for(var i = 3; i < liriCommand.length; i++){
    search = search + ' ' + liriCommand[i];
};
console.log(search);

//listen for liri command to choose which function to run
switch(liriFunc){
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
  console.log('starting liri twitter command');
  client.get('statuses/user_timeline', function(error, tweets, response) {
    if (!error) {
     var tweetsArr = [];
      for(var i = 0; i < tweets.length; i++){
       tweetsArr.push(tweets[i].text);
    };
    tweetsArr.reverse();
    var counter = 0;
    for(var i = 0; i < tweetsArr.length; i++) {
      counter++;
      console.log(`Tweet #${counter}: "${tweetsArr[i]}"`);
    }
    }
  });
}

// default to "The Sign" by Ace of Base for no song
function spotifyCall(search) {
  console.log('starting liri spotify command');
  spotify.search({ type: 'track', query: search, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  var songName = search;
  var artist = data.tracks.items[0].artists[0].name;
  var album = data.tracks.items[0].album.name;
  var songURL = data.tracks.items[0].external_urls.spotify;

  console.log(`Song Name: ${songName}, Artist: ${artist}, Album: ${album}, Listen: ${songURL}`);

  });
}

function omdbCall(search){  
  var request = require('request');
  request(`http://www.omdbapi.com/?apikey=trilogy&t=${search}`, function (error, response, body) {
  console.log('error:', error);
  //console.log('statusCode:', response && response.statusCode);
  var movie = JSON.parse(body);
  var title = movie.Title;
        var year = movie.Year;
        var ratingIMDB =  movie.imdbRating;
        var ratingRT = movie.Ratings[1].Value;
        var country = movie.Country;
        var language = movie.Language;
        var plot = movie.Plot;
        var actors = movie.Actors;

console.log(`
Movie Title: ${title},
Year: ${year},
IMDB Rating: ${ratingIMDB}, 
Rotten Tomatoes Score: ${ratingRT}, 
Country produced in: ${country}, 
Language: ${language}, 
Plot: ${plot}, 
Actors: ${actors}
`);
});


//nothing typed default to  output data for the movie 'Mr. Nobody.
}

function fsCommand (){
  console.log('starting liri fs command');
//Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// Feel free to change the text in that document to test out the feature for other commands.
}
