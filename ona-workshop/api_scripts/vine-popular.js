/*
 * Vine Popular API
 *
 */
var vine = require('node-vine'),
    config = require('./config.js');

/*
 * Popular Vines
 *
 * @param {funtion} cb to print out URLS.
 *
 * https://github.com/mstuart/node-vine
 *
 */
var getPopular = function(cb){
  vine.login(config.vine.email, config.vine.password, function(err, response) {
    vine.popular(function(err, response) {
      response.records.forEach(function(r){
        cb(r.permalinkUrl);
      });
    });
  });
}

exports.getPopular = getPopular;

getPopular(console.log);
