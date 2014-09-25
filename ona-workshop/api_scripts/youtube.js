/*
 * Youtube Search API
 *
 */
var google = require('googleapis'),
  config = require('./config.js');


/** Global google **/
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(config.google.clientId, config.google.clientSecret, config.google.redirectURL);
google.options({ auth: oauth2Client }); // set auth as a global default

/** Set Credentials **/
oauth2Client.setCredentials({
  access_token: config.google.accessToken
});

/** Youtube V3 API Access **/
var youtube = google.youtube('v3');


/*
 * Search for Youtube video urls.
 *
 * @param  {string} query - search query allows boolean OR(|) and NOT(|)
 * @param  {string} order - order by parameter acceptable values: date,
 * rating, relevance (default), title, videoCount, viewCount.
 * @param  {int} maxResults - 0 to 50 results, Default: 5
 * @param {function} cb - callback to print out URLS.
 */
var search = function(query, order, maxResults, cb) {
  var videos = youtube.search.list({'part': 'id', 'q': query, 'order': order},
                                   function(err, videos) {
  if (err) {
    console.log('youtube.search.list Error: ' + err.message);
  }
  else {
    videos.items.forEach(function(entry) {
    cb('http://www.youtube.com/watch?v=' + entry.id.videoId);
    });
  }
  });
}

exports.search = search;

/** Run this ish **/
search('cats', 'date', 5, console.log);
