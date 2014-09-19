# APIs for Journalism workshop. 

Workshop assumes you have familiarity with HTML and JavaScript. 

In this workshop you will learn how to source content from APIs and render the media in the browser. Such a tool can be used to create a content dashboard, reader, or media rich article. 

## 1 Sourcing Content

You will make queries to the following APIs to source content. Sever calls will be made with node and saved to flat files.  

* Youtube
  * Search - https://developers.google.com/youtube/v3/docs/search/list
* Vine
  * Popular - https://github.com/starlock/vino/wiki/API-Reference#get-popular
* Instagram
  * Popular - http://instagram.com/developer/endpoints/media/#get_media_popular
  * Search - http://instagram.com/developer/endpoints/media/#get_media_search
* Twitter
  * Search - https://dev.twitter.com/docs/api/1.1/get/search/tweets
  * Trending Topics by Geo - https://dev.twitter.com/docs/api/1.1/get/trends/place  
* Soundcloud
  * Search - https://developers.soundcloud.com/docs/api/guide#search
  * Tracks - https://developers.soundcloud.com/docs/api/reference#tracks
* Reddit - Go to subreddit url and append.json
  * Subreddit - http://www.reddit.com/r/videos.json
* RSS
* Nytimes
 * Article Search - http://developer.nytimes.com/docs/read/article_search_api_v2
 * Popular - http://developer.nytimes.com/docs/most_popular_api/

## 2 Rendering content

Next you will create an interface to render the media you retrieved in the first part of the workshop. You will read the files and parse for the URLs.  You will display the media as a dashboard, reader, or article with Embedly. 

* Bootstrap for the layout - http://getbootstrap.com/
* Cards for rendering URLs - embed.ly/docs/products/cards

## 3 Explore

For those who finish the first two parts, you can further explore the APIs to customize your app. 
