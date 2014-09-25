/*
 Reddit API for URLs in Subreddit

*/

var request = require('request');


/*
 * Get the links of a Subreddit.
 *
 * @param  {string} query - the name of the subreddit
 * @param {function} cb - callback to print out URLS.
 */

var getSubredditLinks = function(subreddit, cb){
  request('http://reddit.com/r/'+subreddit+".json", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res = JSON.parse(body);
        res.data.children.forEach(function(c){
          cb(c.data.url)
        });
      }
      });
}

getSubredditLinks('mildlyinteresting', console.log);
