/*
 * Soundcloud Search API
 *
 */
var request = require('request'),
  config = require('./config.js');


module.exports = {
  /*
   * Search for SoundClound Tracks
   * https://developers.soundcloud.com/docs/api/guide#search
   *
   * @param  {string} query - query term to search a song.
   * @param  {string} fields - search fields values can be title, username, description.
   * @param {string} count - count of tracks to send back up to 200.
   * @param {function} cb - callback to print out URLS.
   */
  search : function(query, fields, count, cb) {

      request.get({'url': 'https://api.soundcloud.com/tracks',
                   'qs': {'q': query, 'limit': count, 'fields': fields,
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
}

/** Run this ish **/
//module.exports.search('whichlight', 'username', 10, console.log);