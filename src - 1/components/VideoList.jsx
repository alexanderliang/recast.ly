var VideoList = (exampleVideoData) => (
  {console.log(true)}
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry 'author'='robin williams' />
    <VideoListEntry />
  </div>
);

// var VideoList (props) => {
//   <div className="video-list media">
//     {props.map(video => <VideoListEntry image={video.snippet.thumbnails.default.url} />)}
//   </div>
//   }

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

//exampleVideoData.map(video => <VideoListEntry image={video.snippet.thumbnails.default.url} />)}