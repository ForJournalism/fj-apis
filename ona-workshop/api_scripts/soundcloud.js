/*
 * Soundcloud Search API
 *
 */
var request = require('request'),
  config = require('./config.js');


/*
 * Search for SoundClound Tracks
 * https://developers.soundcloud.com/docs/api/guide#search
 *
 * @param  {string} tag - tag term to search a song.
 * @param {string} count - count of tracks to send back up to 200.
 * @param {function} cb - callback to print out URLS.
 */
var search = function(tag, count, cb) {

  request.get({'url': 'https://api.soundcloud.com/tracks',
               'qs': {'tags': tag, 'limit': count,
               'client_id': config.soundcloud.clientId}, json:true},

    function (err, response, songs) {
    if (!err && response.statusCode == 200) {
      songs.forEach(function(entry) {
      cb(entry.permalink_url);
      });
    }
    else {
      console.log('soundcloud.search Error: ' + err);
    }
    });
}

exports.search = search;

/** Run this ish **/
search('futurebass', 10, console.log);
