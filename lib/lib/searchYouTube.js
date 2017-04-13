

var searchYouTube = (options, callback) => {
  //console.log(options);
  $.ajax({
    context: this,
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET', 
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      part: 'snippet'
    },
    contentType: 'application/json',
    success: function(data){
    	console.dir(data)
      //console.log('Retrieved videos', JSON.stringify(data))
      callback(data.items);
    },
    error: function(data) {
    	console.log('Failed to retrieve videos', data)
    }
  })
};

window.searchYouTube = searchYouTube;



// {
//       key: YOUTUBE_API_KEY,
//       q: 'hello adele', 
//       maxResults: 40,
//       part: 'snippet'  
//     }