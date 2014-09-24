/*
 * Vine Tag Search API
 *
 */
var vine = require('node-vine'),
    config = require('./config.js');

/*
 * Vines Tag Search
 * @param  {string} tag - tag to perform a search on
 * @param {function} cb - to print out URLS.
 *
 * https://github.com/mstuart/node-vine
 *
 */
var searchTag = function(tag,cb) {
  vine.login(config.vine.email, config.vine.password, function(err, response) {
    vine.tags(tag,function(err, response) {
      response.records.forEach(function(r){
        cb(r.permalinkUrl);
      });
    });
  });
}

exports.searchTag = searchTag;

searchTag("art",console.log);