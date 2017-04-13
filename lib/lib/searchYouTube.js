

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET', 
    data: _.extend({
      key: YOUTUBE_API_KEY,
      q: 'hello adele', 
      maxResults: 40,
      part: 'snippet'  
    }, options),
    contentType: 'application/json',
    success: function(data){
    	console.log('Retrieved videos', data)
      console.log(options)
    },
    error: function(data) {
    	console.log('Failed to retrieve videos', data)
    }
  })
};

window.searchYouTube = searchYouTube;