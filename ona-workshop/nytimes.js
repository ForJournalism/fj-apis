var request = require('request'),
  qs = require('querystring'),
  config = require('./config.js');

/*
 * Search for NYTimes urls.
 * http://developer.nytimes.com/docs/read/article_search_api_v2
 *
 * @param  {string} query - query term to search for in article title, body, or byline.
 * @param {function} cb - callback to print out URLS.
 */
var search = function(query, cb) {

    request.get({'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
                 'qs': {'q': query, 'api-key': config.nytimes.searchKey}, json:true},
      
      function (err, response, articles) {
      if (!err && response.statusCode == 200) {
        articles.response.docs.forEach(function(entry) {
        cb(entry.web_url);
        });
      }
      else {
        console.log('nytimes.search Error: ' + err);
      }
      });
};


/** Run this ish **/
//search('obama', console.log);

/*
 * Get Popular NYTimes urls.
 * http://developer.nytimes.com/docs/most_popular_api/
 *
 * @param  {string} category - values can be mostemailed, mostshared, mostviewed
 * @param {string} section - all-sections or section names delimited by semi-colons
 * @param {int} days - number of days to look for popular articles
 * @param {function} cb - callback to print out URLS.
 */
var getPopular = function(category, section, days, cb) {
    url = 'http://api.nytimes.com/svc/mostpopular/v2/%s/%s/%s.json';
    url = url.replace('%s', category);
    url = url.replace('%s', section);
    url = url.replace('%s', days);
    request.get({'url': url,
                 'qs': {'api-key': config.nytimes.popularKey}, json:true},
      
      function (err, response, articles) {
      if (!err && response.statusCode == 200) {
        articles.results.forEach(function(entry) {
        cb(entry.url);
        });
      }
      else {
        console.log('nytimes.getPopular Error: ' + err);
      }
      });
};

/** Run this ish **/
//getPopular('mostemailed', 'all-sections', 7, console.log);