var numberOfTags = 0;

var addPhotos = function(tag) {
  $( "#photocontainer" ).append("<div class='col-xs-12' ><div class='row' id='instafeed" + numberOfTags + "'</div></div>" );


  var feed = new Instafeed({
      get: 'tagged',
      tagName: tag,
      accessToken: '44511616.ba4c844.47b3e2cdf67141149c829d026e883d6a',
      sortBy: 'most-recent',
      limit: 10,
      target: "instafeed" + numberOfTags,
      resolution: 'low_resolution',
  });
  feed.run();
  numberOfTags += 1;
}

$(document).ready(function() {
  var queryParams = location.search.substr(1).split("&")
  .forEach(function(item) {
    addPhotos(item.split("=")[1])
  })
});
