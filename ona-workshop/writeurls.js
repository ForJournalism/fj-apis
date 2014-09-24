/*
 * Write URLS to a file using APIS.
 *
 */

var fs = require('fs'),
    nytimes = require('./nytimes.js'),
    youtube = require('./youtube.js');

/** Used to write URLS to a specific file **/
var URLWriter = function(filename) {
  this.filename = filename;
  this.write = function (content) {
    fs.writeFile(filename, 
                 content + '\n', {flag: 'a'}, function(err) {
    if(err) {
        console.log(err);
    }
   }); 
  }
}
exports.URLWriter = URLWriter


/** Write some URLS to files **/

/** Write most-emailed urls from all-sections on nytimes to a file. **/
nytimes.getPopular('mostemailed', 'all-sections', 7, 
                   (new URLWriter('./sample_urls/nytimes_mostemailed.txt')).write);


/** Write urls from a search for obama on nytimes to a file. **/
nytimes.search('obama', 
              (new URLWriter('./sample_urls/nytimes_search.txt')).write);