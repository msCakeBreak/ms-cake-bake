var numberOfTags = 0;

  var addPhotos = function(tag) {
    $( "#photocontainer" ).append("<div class='grid' id='instafeed" + numberOfTags + "'><div class='grid-sizer'></div></div>" );

    var imgTemplate = '<div class="grid-item"><a href={{link}} target="_blank"><img class="grid-img-fluid" src={{image}}/></a>'
    + '<div class="footer"><div class="user"><a href="https://www.instagram.com/{{model.user.username}}/" target="_blank"><img src="{{model.user.profile_picture}}"></a>'
    + '</div><div class="imgDescription"><p><i class="fa fa-heart"></i> {{likes}}</p>'
    + '<p class="comment"><i class="fa fa-comment"></i> {{comments}}</p></div></div></div>'

    var feed = new Instafeed({
        get: 'tagged',
        tagName: tag,
        accessToken: '44511616.ba4c844.47b3e2cdf67141149c829d026e883d6a',
        sortBy: 'most-recent',
        // limit: 10,
        target: "instafeed" + numberOfTags,
        resolution: 'standard_resolution',
        template: imgTemplate
    });
    // Request add instagram handle
    // var link = '#instafeed' + numberOfTags
    // // re-run feed
    // setInterval(function () {
    //   $(link).empty();
    //     feed.run();
    // }, 10000);

    feed.run();
    numberOfTags += 1;
  }

  $(document).ready(function() {
    var queryParams = location.search.substr(1).split("&")
    .forEach(function(item) {
      addPhotos(item.split("=")[1])
      numberOfTags += 1;
    })

    $('.grid').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    })

  });
