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


module.exports = {

  /*
   * Search on Twitter.
   *
   * @param  {string} query - search query
   * @param  {string} type - the type of results: mixed, recent, popular
   * @param {function} cb - callback to print out URLS.
   *
   * https://dev.twitter.com/rest/reference/get/search/tweets
   */
  searchTweets : function(query, type, cb){
    T.get('search/tweets', { q: query, count: 20, result_type: type}, function(err, reply) {
      reply.statuses.forEach(function(d){
        if(d.entities.urls.length >0){
          var urls = d.entities.urls;
          urls.forEach(function(url){
            cb(url.expanded_url);
          });
        }
      });
    });
  }
}

/** run this **/
module.exports.searchTweets("#funny", 'popular', console.log);

