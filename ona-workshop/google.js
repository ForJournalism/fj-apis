/**
 * Helps us generate an access token for Google OAUTH2.0
 * Ref: https://github.com/google/google-api-nodejs-client
 *
 * Note: This file is used for manual creation of OAUTH AccessToken.
**/
var google = require('googleapis'),
  config = require('./config.js');


/** Global google **/
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(config.google.clientId, config.google.clientSecret, config.google.redirectURL);
google.options({ auth: oauth2Client }); // set auth as a global default


/** Enter code from visited auth_url below **/
var code = null;

/** Generate AUTH URL to get code **/
if (code == null) {

  /* Generate a url that asks permissions for Youtube scope */
  var scopes = [
    'https://www.googleapis.com/auth/youtube',
  ];

  var auth_url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
    scope: scopes// If you only need one scope you can pass it as string
  });

  console.log("Visit this URL with a google account to get code: " + auth_url);

}

/** Spit out access token **/
oauth2Client.getToken(code, function(err, tokens, body) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if(!err) {
    console.log("Update access or refresh tokens: " + tokens);
    oauth2Client.setCredentials(tokens);
  }
  else{
    console.log('Get token Error: ' + err)
  }
});