

var searchYouTube = (options, callback) => {
  options = options || {
    key: YOUTUBE_API_KEY,
    query: 'eminem',
    max: 20
  };
  $.ajax({
    context: this,
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET', 
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbedabble: true,
      part: 'snippet'
    },
    contentType: 'application/json',
    success: function(data){
      callback(data.items);
    },
    error: function(data) {
    	console.log('Failed to retrieve videos', data)
    }
  })
};

window.searchYouTube = searchYouTube;

// var _retrieveVideos = function (videos){
//   window.youTubeData = videos;   
// }
// searchYouTube(null, _retrieveVideos);




