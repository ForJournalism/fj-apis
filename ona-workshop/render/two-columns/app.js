
var readTxtFile = function(src, classname, cb){
  var request = new XMLHttpRequest();
  request.onload = function() {
    if(request.status==200){
    var fileContent = this.responseText;
    var fileContentLines = fileContent.split( '\n' );
    cb(fileContentLines, classname);
    }
  };
  request.open( 'GET', src, true );
  request.send();

}


var urlsToCards = function(urls, classname){
  urls.forEach(function(url){
    var card = document.createElement('div');
    $(card).addClass("col-md-12");
    var a = document.createElement('a');
    a.href=url;
    a.text = url;
    $(a).addClass("embedly-card");
    $(card).append(a);
    $(classname).append(card);
  });
}


readTxtFile('../../urls/twitter_screennames.txt', '.firstcol', urlsToCards);
readTxtFile('../../urls/rss_creatorsproject.txt', '.secondcol', urlsToCards);

