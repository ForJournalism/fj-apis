var Twit = require('twit'),
  config = require('./config.js');

/*
 * Get links from some set of twitter users
 */
var T = new Twit({
    consumer_key:  config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token: config.twitter.accessToken,
    access_token_secret: config.twitter.accessTokenSecret
})


/*
 * look over specific users
 * creatorsproject
 * embedly
 * niemanlab
 * whichlight
 */


var getUrlsFromScreenName = function(user, cb){
  T.get('statuses/user_timeline', {screen_name: user, count:5},function(err, data, response) {
    //iterate through response, look in entities for URL
    data.forEach(function(d){
      if(d.entities.urls.length >0){
        var urls = d.entities.urls;
        urls.forEach(function(url){
          cb(url.expanded_url);
        });
      }
    });
  })
}

users = ['niemanlab', 'creatorsproject'];

users.forEach(function(u){
  getUrlsFromScreenName(u, console.log);
});


//search
