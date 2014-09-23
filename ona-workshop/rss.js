/**
 * RSS Parsing via parse-rss
 * https://github.com/nikezono/node-parse-rss
 **/
var rss_parser = require('parse-rss'),
    config = require('./config.js');


module.exports = {
  /*
   * Parse URLS from RSS Feed
   *
   * @param  {string} rss_feed - the URL of the RSS feed to parse.
   * @param {function} cb - callback to print out URLS.
   */
  parseFeed : function(rss_feed, cb) {
      rss_parser(rss_feed, function (err, rss) {
        if (err) {
          console.log('rss.parseFeed: ' + url + 'Error: ' + err);
        }
        else {
          rss.forEach(function(entry) {
          cb(entry.link);
          });
        }
        });
  }
}

/** Run this ish **/
//module.exports.parseFeed('http://sports.espn.go.com/espn/rss/mlb/news', console.log)