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
 * URLs from Screen Names on Twitter
 *
 * @param  {string} screen name
 * @param {function} cb - callback to print out URLS.
 *
 * https://dev.twitter.com/rest/reference/get/statuses/user_timeline
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


/* These are the screen names we'll check out */
users = ['niemanlab', 'creatorsproject'];

/* run this */
users.forEach(function(u){
  getUrlsFromScreenName(u, console.log);
});


