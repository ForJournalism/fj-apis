/*
 * Instagram Media Location API
 *
 */
var ig = require('instagram-node').instagram(),
    config = require('./config.js');

ig.use({ client_id: config.instagram.clientId ,
             client_secret: config.instagram.clientSecret });


module.exports = {

    /*
     * Images from Location on Instagram
     *
     * @param  {float} lat - latitude of location
     * @param {float} lon cb - longitude of location
     * @param {funtion} to print out URLS.
     *
     * http://instagram.com/developer/endpoints/media/
     *
     */

    locationSearch : function(lat, lon, distance, cb){
      ig.media_search(41.8819, 87.6278, {distance: distance},
                      function(err, medias, remaining, limit) {
        medias.forEach(function(m){
          cb(m.link);
        });
      });
    }
}

module.exports.locationSearch(41.8819, 87.6278, 1000, console.log);
