
var readTxtFile = function(src, cb){
  var request = new XMLHttpRequest();
  request.onload = function() {
    if(request.status==200){
    var fileContent = this.responseText;
    var fileContentLines = fileContent.split( '\n' );
    cb(fileContentLines);
    }
  };

  request.open( 'GET', src, true );
  request.send();

}


var urlsToCards = function(urls){
  urls.forEach(function(url){
    var card = document.createElement('div');
    $(card).addClass("col-md-4");

    var a = document.createElement('a');
    a.href=url;
    a.text = url;
    $(a).addClass("embedly-card");
    $(card).append(a);
    $('.content').append(card);
  });
}


readTxtFile('../../urls/twitter_screennames.txt', urlsToCards);

