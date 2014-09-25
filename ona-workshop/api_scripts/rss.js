/**
 * RSS Parsing via parse-rss
 * https://github.com/nikezono/node-parse-rss
 **/
var rss_parser = require('parse-rss');

/*
 * Parse URLS from RSS Feed
 *
 * @param  {string} rss_feed - the URL of the RSS feed to parse.
 * @param {function} cb - callback to print out URLS.
 */
var parseFeed = function(rss_feed, cb) {
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

exports.parseFeed = parseFeed;

/** Run this ish **/
//parseFeed('http://sports.espn.go.com/espn/rss/mlb/news', console.log)
parseFeed('http://thecreatorsproject.vice.com/en_us/rss', console.log)
