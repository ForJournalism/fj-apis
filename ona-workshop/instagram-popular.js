/*
 * Instagram Media Popular API
 *
 */
var ig = require('instagram-node').instagram(),
    config = require('./config.js');

ig.use({ client_id: config.instagram.clientId ,
             client_secret: config.instagram.clientSecret });

module.exports = {

    /*
     * Popular Images on Instagram
     *
     * @param  {float} lat - latitude of location
     * @param {float} lon cb - longitude of location
     * @param {funtion} to print out URLS.
     *
     * http://instagram.com/developer/endpoints/media/
     *
     */

    getPopular : function(cb){
      ig.media_popular(function(err, medias, remaining, limit) {
        medias.forEach(function(m){
          cb(m.link);
        });
      });
    }
}

module.exports.getPopular(console.log);
