/*
 * Write URLS to a file using APIS.
 *
 */

var fs = require('fs'),
    nytimes = require('./nytimes.js'),
    youtube = require('./youtube.js');

/** Used to write URLS to a specific file **/
function Writer(filename) {
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

/** Load mostemailed urls allsections **/
nytimes.getPopular('mostemailed', 'all-sections', 7, 
                   (new Writer('./sample_urls/nytimes_mostemailed.txt')).write);


/** Load mostemailed urls allsections **/
nytimes.search('obama', 
              (new Writer('./sample_urls/nytimes_search.txt')).write);